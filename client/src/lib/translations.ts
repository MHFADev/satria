export type Language = 'ID' | 'EN';

export interface Translations {
  nav: {
    logo: string;
    services: string;
    portfolio: string;
    contact: string;
    order: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    scrollDown: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    graphicDesign: {
      title: string;
      description: string;
      items: string[];
    };
    academicHelp: {
      title: string;
      description: string;
      items: string[];
      note: string;
    };
  };
  portfolio: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewProject: string;
  };
  order: {
    sectionTitle: string;
    sectionSubtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      contact: string;
      contactPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: {
        graphicDesign: string;
        academicHelp: string;
      };
      subService: string;
      subServicePlaceholder: string;
      graphicDesignOptions: {
        flyer: string;
        poster: string;
        socialMedia: string;
        uiux: string;
      };
      academicHelpOptions: {
        essay: string;
        ppt: string;
        resume: string;
      };
      topic: string;
      topicPlaceholder: string;
      deadline: string;
      deadlinePlaceholder: string;
      budget: string;
      budgetPlaceholder: string;
      submit: string;
      submitting: string;
      academicHelperText: string;
      graphicHelperText: string;
    };
    success: {
      title: string;
      message: string;
    };
    error: {
      title: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    social: string;
  };
}

export const translations: Record<Language, Translations> = {
  ID: {
    nav: {
      logo: 'CIPET',
      services: 'Layanan',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      order: 'Pesan Sekarang',
    },
    hero: {
      badge: 'FREELANCER KREATIF',
      title: 'Wujudkan Ide Kreatifmu Bersama Kami',
      subtitle: 'Layanan desain grafis profesional dan bantuan akademik berkualitas tinggi untuk kebutuhan Anda.',
      cta: 'Mulai Proyek',
      scrollDown: 'Scroll ke bawah',
    },
    services: {
      sectionTitle: 'Layanan Kami',
      sectionSubtitle: 'Solusi kreatif untuk berbagai kebutuhan Anda',
      graphicDesign: {
        title: 'Desain Grafis',
        description: 'Layanan desain visual profesional untuk kebutuhan bisnis dan personal Anda.',
        items: ['Flyer & Brosur', 'Poster', 'Konten Media Sosial', 'UI/UX Design'],
      },
      academicHelp: {
        title: 'Joki Tugas',
        description: 'Bantuan akademik untuk tugas penulisan dan presentasi.',
        items: ['Makalah & Essay', 'Presentasi PowerPoint', 'Resume & Ringkasan'],
        note: 'Kami hanya menerima tugas penulisan dan presentasi. Tidak termasuk perhitungan/coding.',
      },
    },
    portfolio: {
      sectionTitle: 'Portofolio',
      sectionSubtitle: 'Karya-karya terbaik yang telah kami selesaikan',
      viewProject: 'Lihat Proyek',
    },
    order: {
      sectionTitle: 'Pesan Layanan',
      sectionSubtitle: 'Isi formulir di bawah untuk memesan layanan kami',
      form: {
        name: 'Nama Lengkap',
        namePlaceholder: 'Masukkan nama lengkap Anda',
        contact: 'Nomor WhatsApp',
        contactPlaceholder: 'Contoh: 08123456789',
        service: 'Kategori Layanan',
        servicePlaceholder: 'Pilih layanan',
        serviceOptions: {
          graphicDesign: 'Desain Grafis',
          academicHelp: 'Joki Tugas',
        },
        subService: 'Jenis Layanan Spesifik',
        subServicePlaceholder: 'Pilih jenis layanan',
        graphicDesignOptions: {
          flyer: 'Flyer & Brosur',
          poster: 'Poster',
          socialMedia: 'Konten Media Sosial',
          uiux: 'UI/UX Design',
        },
        academicHelpOptions: {
          essay: 'Makalah / Essay',
          ppt: 'Presentasi PowerPoint',
          resume: 'Resume / Ringkasan',
        },
        topic: 'Deskripsi / Topik',
        topicPlaceholder: 'Jelaskan detail proyek atau tugas Anda...',
        deadline: 'Tenggat Waktu',
        deadlinePlaceholder: 'Contoh: 3 hari, 1 minggu',
        budget: 'Budget (Rp)',
        budgetPlaceholder: 'Contoh: 50000, 100000',
        submit: 'Kirim Pesanan',
        submitting: 'Mengirim...',
        academicHelperText: 'Untuk Joki Tugas, kami hanya menerima tugas penulisan dan presentasi.',
        graphicHelperText: 'Sertakan referensi desain jika ada untuk hasil terbaik.',
      },
      success: {
        title: 'Pesanan Terkirim!',
        message: 'Kami akan menghubungi Anda segera melalui WhatsApp.',
      },
      error: {
        title: 'Gagal Mengirim',
        message: 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.',
      },
    },
    footer: {
      tagline: 'Kreativitas tanpa batas, hasil tanpa kompromi.',
      copyright: '© 2024 Cipet. Hak cipta dilindungi.',
      social: 'Ikuti Kami',
    },
  },
  EN: {
    nav: {
      logo: 'CIPET',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      order: 'Order Now',
    },
    hero: {
      badge: 'CREATIVE FREELANCER',
      title: 'Bring Your Creative Ideas to Life',
      subtitle: 'Professional graphic design services and high-quality academic assistance for your needs.',
      cta: 'Start Project',
      scrollDown: 'Scroll down',
    },
    services: {
      sectionTitle: 'Our Services',
      sectionSubtitle: 'Creative solutions for all your needs',
      graphicDesign: {
        title: 'Graphic Design',
        description: 'Professional visual design services for your business and personal needs.',
        items: ['Flyer & Brochure', 'Poster', 'Social Media Content', 'UI/UX Design'],
      },
      academicHelp: {
        title: 'Academic Help',
        description: 'Academic assistance for writing and presentation tasks.',
        items: ['Essay & Papers', 'PowerPoint Presentations', 'Resume & Summary'],
        note: 'We only accept writing and presentation tasks. Calculations/coding not included.',
      },
    },
    portfolio: {
      sectionTitle: 'Portfolio',
      sectionSubtitle: 'Our best completed works',
      viewProject: 'View Project',
    },
    order: {
      sectionTitle: 'Order Service',
      sectionSubtitle: 'Fill the form below to order our services',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        contact: 'WhatsApp Number',
        contactPlaceholder: 'Example: 08123456789',
        service: 'Service Category',
        servicePlaceholder: 'Select service',
        serviceOptions: {
          graphicDesign: 'Graphic Design',
          academicHelp: 'Academic Help',
        },
        subService: 'Specific Service Type',
        subServicePlaceholder: 'Select service type',
        graphicDesignOptions: {
          flyer: 'Flyer & Brochure',
          poster: 'Poster',
          socialMedia: 'Social Media Content',
          uiux: 'UI/UX Design',
        },
        academicHelpOptions: {
          essay: 'Essay / Paper',
          ppt: 'PowerPoint Presentation',
          resume: 'Resume / Summary',
        },
        topic: 'Description / Topic',
        topicPlaceholder: 'Describe your project or task details...',
        deadline: 'Deadline',
        deadlinePlaceholder: 'Example: 3 days, 1 week',
        budget: 'Budget (IDR)',
        budgetPlaceholder: 'Example: 50000, 100000',
        submit: 'Submit Order',
        submitting: 'Submitting...',
        academicHelperText: 'For Academic Help, we only accept writing and presentation tasks.',
        graphicHelperText: 'Include design references if available for best results.',
      },
      success: {
        title: 'Order Submitted!',
        message: 'We will contact you shortly via WhatsApp.',
      },
      error: {
        title: 'Failed to Submit',
        message: 'An error occurred. Please try again or contact us directly.',
      },
    },
    footer: {
      tagline: 'Unlimited creativity, uncompromising results.',
      copyright: '© 2024 Cipet. All rights reserved.',
      social: 'Follow Us',
    },
  },
};
