export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Little Stars Events",
    legalName: "Little Stars Events",
    tagline: "Every Celebration Deserves to Shine.",
    description:
      "Little Stars Events is a Harare-based events company specializing in children's parties, family celebrations, and themed events with creative decor and meticulous planning.",
    phone: "+263 77 328 7720",
    phoneRaw: "+263773287720",
    whatsappNumber: "263773287720",
    email: "hello@littlestarsevents.co.zw",
    address: "15 Chalkmead Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.5,
    ratingRounded: 4,
    reviewCount: 6,
    established: "2017",
    yearsExperience: "7+",
    projectsCompleted: "500+",
    employees: "10+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "little-stars-events-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Little",
    logoLine2: "Stars Events",
  },

  hero: {
    badge: "Harare's Creative Children's Party & Events Specialists",
    titleParts: [
      { text: "EVERY " },
      { text: "CELEBRATION", highlight: true },
      { text: " DESERVES TO SHINE." },
    ],
    subtitle:
      "Themed parties, creative decor, and magical moments for children and families. 500+ celebrations planned with imagination, love, and flawless execution.",
    ctaPrimary: "Plan Your Party",
    ctaSecondary: "See Themes",
    trustBadge: "500+ Celebrations Created",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Little Stars Events professional image 1" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Little Stars Events professional image 2" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Little Stars Events professional image 3" },
    ],
  },

  stats: [
    { number: "500+", label: "Parties Planned" },
    { number: "7+", label: "Years of Magic" },
    { number: "50+", label: "Theme Options" },
    { number: "4.5", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Kids Birthday Parties",
      desc: "Themed birthday celebrations with custom decor, entertainment, party bags, and cake table styling for ages 1-16.",
      icon: "Star",
    },
    {
      title: "Baby Showers",
      desc: "Elegant baby shower setups with gender-reveal options, themed decor, games, and photography-ready backdrops.",
      icon: "Heart",
    },
    {
      title: "Christenings",
      desc: "Beautiful christening and dedication ceremony decor with elegant white and pastel themes.",
      icon: "Leaf",
    },
    {
      title: "Family Celebrations",
      desc: "Anniversary parties, family reunions, and milestone celebrations planned with warmth and attention to detail.",
      icon: "Buildings",
    },
    {
      title: "Themed Decor",
      desc: "Custom themed decorations for any occasion -- from princess castles to superhero headquarters to elegant garden parties.",
      icon: "Lightbulb",
    },
    {
      title: "Event Planning",
      desc: "Full event coordination including venue sourcing, vendor management, timeline creation, and on-the-day execution.",
      icon: "Briefcase",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Kids Birthday Parties",
        slug: "kids-birthday-parties",
        desc: "Themed birthday celebrations with custom decor, entertainment, party bags, and cake table styling for ages 1-16.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Baby Showers",
        slug: "baby-showers",
        desc: "Elegant baby shower setups with gender-reveal options, themed decor, games, and photography-ready backdrops.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Christenings",
        slug: "christenings",
        desc: "Beautiful christening and dedication ceremony decor with elegant white and pastel themes.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
      {
        title: "Family Celebrations",
        slug: "family-celebrations",
        desc: "Anniversary parties, family reunions, and milestone celebrations planned with warmth and attention to detail.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Themed Decor",
        slug: "themed-decor",
        desc: "Custom themed decorations for any occasion -- from princess castles to superhero headquarters to elegant garden parties.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      },
      {
        title: "Event Planning",
        slug: "event-planning",
        desc: "Full event coordination including venue sourcing, vendor management, timeline creation, and on-the-day execution.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Little",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in kids birthday parties.",
        client: "Commercial Client",
        services: ["Kids Birthday Parties", "Baby Showers"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Little",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in baby showers.",
        client: "Residential Client",
        services: ["Baby Showers", "Christenings"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Little",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in christenings.",
        client: "Industrial Client",
        services: ["Christenings", "Family Celebrations"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Little",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in family celebrations.",
        client: "Institutional Client",
        services: ["Family Celebrations", "Themed Decor"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Little",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in themed decor.",
        client: "Commercial Client",
        services: ["Themed Decor", "Event Planning"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Little",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in event planning.",
        client: "Residential Client",
        services: ["Event Planning", "Kids Birthday Parties"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Little Stars made my daughter's 5th birthday absolutely magical. The unicorn theme was executed perfectly and every child had the time of their lives.",
      name: "Rudo Chidhakwa",
      role: "Mum, Birthday Party Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We used Little Stars for our baby shower and it was stunning. The decor was elegant, the games were fun, and the team handled everything seamlessly.",
      name: "Mercy Gumbo",
      role: "Baby Shower Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Three years, three birthday parties, always perfect. Little Stars understands what makes children's events special and they never disappoint.",
      name: "Tatenda Mushore",
      role: "Repeat Client, Mum of 3",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "The Avengers theme party was incredible. My son could not believe his eyes when he walked in. The attention to detail was extraordinary.",
      name: "Brian Chikore",
      role: "Dad, Superhero Party Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Little Stars Events started with one mother's desire to create the perfect birthday party for her daughter. That passion for magical celebrations has grown into Harare's most creative children's events company.",
      "With over 500 celebrations planned and 50+ theme options, Little Stars brings imagination to life for families across Harare. Every party is custom-designed, every detail is considered, and every child feels like a star.",
    ],
    values: [
      { title: "Unlimited Creativity", desc: "50+ theme options and the ability to create any custom theme you can imagine. If they dream it, we build it." },
      { title: "All-Inclusive Packages", desc: "Decor, entertainment, party bags, cake table, and cleanup all included. You just enjoy the day." },
      { title: "Child-Safe Everything", desc: "All materials, decorations, and setups are child-safe and age-appropriate." },
      { title: "Stress-Free Planning", desc: "A dedicated planner handles every detail from start to finish. You relax, we create magic." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Little Stars made my daughter's 5th birthday absolutely magical. The unicorn theme was executed perfectly and every child had the time of their lives.", name: "Rudo Chidhakwa", role: "Mum, Birthday Party Client", rating: 5 },
      { text: "We used Little Stars for our baby shower and it was stunning. The decor was elegant, the games were fun, and the team handled everything seamlessly.", name: "Mercy Gumbo", role: "Baby Shower Client", rating: 5 },
      { text: "Three years, three birthday parties, always perfect. Little Stars understands what makes children's events special and they never disappoint.", name: "Tatenda Mushore", role: "Repeat Client, Mum of 3", rating: 5 },
      { text: "The Avengers theme party was incredible. My son could not believe his eyes when he walked in. The attention to detail was extraordinary.", name: "Brian Chikore", role: "Dad, Superhero Party Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Little Stars Events",
        address: "15 Chalkmead Ave, Harare, Zimbabwe",
        phone: "+263 77 328 7720",
        email: "hello@littlestarsevents.co.zw",
      },
    ],
  },

  homeCta: {
    title: "MAKE THEM SHINE",
    subtitle: "Themed parties, baby showers, and family celebrations created with love and limitless imagination. Book your Little Stars experience.",
    ctaPrimary: "Plan Your Party",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Little Stars! I want to plan a party/celebration.",
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85",
  },

  footer: {
    description: "Little Stars Events is a Harare-based events company specializing in children's parties, family celebrations, and themed events with creative decor an...",
    copyright: "Little Stars Events",
  },
};

export default siteData;
