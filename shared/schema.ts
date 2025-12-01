import { z } from "zod";

export const serviceCategories = ['graphicDesign', 'academicHelp'] as const;
export type ServiceCategory = typeof serviceCategories[number];

export const graphicDesignTypes = ['flyer', 'poster', 'socialMedia', 'uiux'] as const;
export type GraphicDesignType = typeof graphicDesignTypes[number];

export const academicHelpTypes = ['essay', 'ppt', 'resume'] as const;
export type AcademicHelpType = typeof academicHelpTypes[number];

export const orderFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  contact: z.string().min(10, 'Please enter a valid WhatsApp number'),
  serviceCategory: z.enum(serviceCategories, {
    errorMap: () => ({ message: 'Please select a service category' }),
  }),
  subService: z.string().min(1, 'Please select a specific service type'),
  topic: z.string().min(10, 'Please provide more details about your project'),
  deadline: z.string().min(1, 'Please specify a deadline'),
  budget: z.string().min(1, 'Please specify your budget'),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;

export interface OrderSubmission extends OrderFormData {
  submittedAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface DiscordEmbed {
  title: string;
  description?: string;
  color: number;
  fields: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  footer?: {
    text: string;
  };
  timestamp?: string;
}

export interface DiscordWebhookPayload {
  embeds: DiscordEmbed[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  imageUrl: string;
  description: string;
}
