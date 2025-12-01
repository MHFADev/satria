import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { orderFormSchema } from "@shared/schema";

const serviceLabels: Record<string, string> = {
  graphicDesign: 'Graphic Design',
  academicHelp: 'Academic Help (Joki Tugas)',
  flyer: 'Flyer & Brochure',
  poster: 'Poster',
  socialMedia: 'Social Media Content',
  uiux: 'UI/UX Design',
  essay: 'Essay / Paper',
  ppt: 'PowerPoint Presentation',
  resume: 'Resume / Summary',
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post('/api/order', async (req, res) => {
    try {
      const validatedData = orderFormSchema.parse(req.body);

      const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

      if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not configured');
        return res.status(500).json({
          success: false,
          message: 'Server configuration error. Please contact administrator.',
        });
      }

      const serviceCategoryLabel = serviceLabels[validatedData.serviceCategory] || validatedData.serviceCategory;
      const subServiceLabel = serviceLabels[validatedData.subService] || validatedData.subService;

      const embed = {
        title: '🚀 New Order Received!',
        description: 'A new order has been submitted via the Cipet website.',
        color: 0x00FF00,
        fields: [
          {
            name: '👤 Client Name',
            value: validatedData.name,
            inline: true,
          },
          {
            name: '📱 WhatsApp',
            value: validatedData.contact,
            inline: true,
          },
          {
            name: '📁 Service Category',
            value: serviceCategoryLabel,
            inline: true,
          },
          {
            name: '🔧 Specific Service',
            value: subServiceLabel,
            inline: true,
          },
          {
            name: '⏰ Deadline',
            value: validatedData.deadline,
            inline: true,
          },
          {
            name: '💰 Budget',
            value: `Rp ${validatedData.budget}`,
            inline: true,
          },
          {
            name: '📝 Project Description',
            value: validatedData.topic.length > 1024 
              ? validatedData.topic.substring(0, 1021) + '...' 
              : validatedData.topic,
            inline: false,
          },
        ],
        footer: {
          text: 'Cipet Creative Freelancer',
        },
        timestamp: new Date().toISOString(),
      };

      const discordPayload = {
        embeds: [embed],
      };

      const discordResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload),
      });

      if (!discordResponse.ok) {
        const errorText = await discordResponse.text();
        console.error('Discord webhook error:', errorText);
        return res.status(500).json({
          success: false,
          message: 'Failed to send order notification. Please try again.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Order submitted successfully!',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors,
        });
      }

      console.error('Order submission error:', error);
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      });
    }
  });

  return httpServer;
}
