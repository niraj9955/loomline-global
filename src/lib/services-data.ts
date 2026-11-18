import {
  Camera,
  PackageSearch,
  TrendingUp,
  Megaphone,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
  deliverables: string[];
}

export interface Specialization {
  id: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  services: ServiceItem[];
}

export const specializations: Specialization[] = [
  {
    id: "creative",
    tabLabel: "Creative & Visual",
    title: "Creative & Visual Production",
    tagline: "Make every product pixel-perfect",
    description:
      "Studio-grade visuals that stop the scroll — from professional shoots to AI-powered imagery and manufacturing-ready tech pack sketches.",
    image: "/images/creative.png",
    imageAlt: "Professional product photography of a luxury handbag in a studio",
    icon: Camera,
    services: [
      {
        name: "Professional Product Photography",
        description:
          "High-end photography designed to highlight product details, textures, and quality for e-commerce and marketing campaigns.",
        deliverables: ["Studio & on-model shoots", "Detail & texture close-ups", "Campaign-ready files"],
      },
      {
        name: "Photo Editing",
        description:
          "Professional retouching, color correction, and background optimization to make your imagery stand out.",
        deliverables: ["Retouching & cleanup", "Color grading", "Background optimization"],
      },
      {
        name: "AI Product Photo Development",
        description:
          "Cutting-edge AI-generated visual solutions to showcase your products dynamically on websites and digital marketplaces.",
        deliverables: ["AI lifestyle scenes", "Model & mannequin swaps", "Marketplace-ready visuals"],
      },
      {
        name: "Technical Flat Sketches",
        description:
          "Precise and detailed apparel flat sketches created in Adobe Illustrator for manufacturing and design tech packs.",
        deliverables: ["Front / back flats", "Stitch & trim callouts", "Tech pack illustrations"],
      },
    ],
  },
  {
    id: "sourcing",
    tabLabel: "Sourcing",
    title: "Sourcing",
    tagline: "Reliable supply, from sample to shipment",
    description:
      "We connect your brand with vetted manufacturers and manage the entire production pipeline so quality and deadlines never slip.",
    image: "/images/sourcing.png",
    imageAlt: "Garment manufacturing facility with fabric rolls and production racks",
    icon: PackageSearch,
    services: [
      {
        name: "Garment Sourcing",
        description:
          "Connecting your brand with reliable manufacturers and managing production pipelines from sample to final delivery.",
        deliverables: ["Factory identification & audits", "Sample development", "Production & QC management"],
      },
      {
        name: "Vendor / Manufacturer / Buyer Sourcing",
        description:
          "End-to-end matchmaking between trusted vendors, manufacturers, and buyers to build resilient, cost-efficient supply chains.",
        deliverables: ["Vendor vetting & negotiation", "Buyer outreach", "Supply chain coordination"],
      },
    ],
  },
  {
    id: "business",
    tabLabel: "Business & Sales",
    title: "Business Development & Sales",
    tagline: "Strategy that turns contacts into contracts",
    description:
      "From partnership pipelines to operational scaling, we build the growth engine your brand needs to move to the next stage.",
    image: "/images/business.png",
    imageAlt: "Business team analyzing sales growth charts in a meeting",
    icon: TrendingUp,
    services: [
      {
        name: "Business Development",
        description:
          "Identifying strategic growth opportunities, partnership pipelines, and operational scaling techniques.",
        deliverables: ["Market & opportunity mapping", "Partnership pipelines", "Scaling playbooks"],
      },
      {
        name: "Sales",
        description:
          "Conversion-focused sales strategies, persuasive pitch development, and hands-on closing support to grow revenue consistently.",
        deliverables: ["Sales strategy & funnels", "Pitch decks & collateral", "Deal closing support"],
      },
    ],
  },
  {
    id: "marketing",
    tabLabel: "Digital Marketing",
    title: "Digital Marketing & Content",
    tagline: "Campaigns that convert, content that sticks",
    description:
      "Full-funnel digital marketing — paid ads, email automation, affiliate programs, and scroll-stopping scripts for every platform.",
    image: "/images/marketing.png",
    imageAlt: "Social media advertising analytics dashboard on devices",
    icon: Megaphone,
    services: [
      {
        name: "Email Marketing",
        description:
          "Targeted newsletter campaigns, automated flows, and customer retention strategies to drive repeat sales.",
        deliverables: ["Campaign design & copy", "Automation flows", "Retention strategy"],
      },
      {
        name: "Meta Ads Management",
        description:
          "High-converting paid advertising campaigns on Facebook and Instagram designed to maximize ROI.",
        deliverables: ["Audience & creative testing", "Campaign management", "ROI reporting"],
      },
      {
        name: "Affiliate Marketing",
        description:
          "Developing and managing profitable partner programs to expand your brand's reach and sales channels.",
        deliverables: ["Program setup", "Partner recruitment", "Performance tracking"],
      },
      {
        name: "LinkedIn Page Management",
        description:
          "Strategic community engagement and brand positioning to grow your B2B professional presence.",
        deliverables: ["Content calendar", "Community engagement", "B2B brand positioning"],
      },
      {
        name: "Script Writing",
        description:
          "Engaging, persuasive, and platform-optimized video scripts for social media and brand commercials.",
        deliverables: ["Reels & ad scripts", "Brand commercials", "Platform-optimized hooks"],
      },
    ],
  },
  {
    id: "ecommerce",
    tabLabel: "E-Commerce Support",
    title: "E-Commerce Website Support",
    tagline: "Backends, catalogues and listings — done right",
    description:
      "The operational backbone of your online store: catalogue architecture, content, SKU systems, and flawless product listings.",
    image: "/images/ecommerce.png",
    imageAlt: "Laptop displaying a fashion e-commerce store with shipping packages",
    icon: ShoppingCart,
    services: [
      {
        name: "Product Catalog Development",
        description:
          "Handling complex category mapping, managing variable product attributes (size, color, stock levels), and creating catalogue PDFs of your products.",
        deliverables: ["Category mapping", "Variable attribute setup", "Catalogue PDF creation"],
      },
      {
        name: "Fashion Content Writing",
        description:
          "Compelling product descriptions and lifestyle copy crafted to boost search visibility and drive online sales.",
        deliverables: ["Product descriptions", "SEO-friendly copy", "Lifestyle storytelling"],
      },
      {
        name: "SKU Management",
        description:
          "Comprehensive product categorization, inventory architecture, and SKU cataloging for seamless e-commerce operations.",
        deliverables: ["SKU architecture", "Inventory categorization", "Catalog hygiene audits"],
      },
      {
        name: "Product Listing",
        description:
          "End-to-end listing of products on e-commerce websites with optimized titles, attributes, and imagery.",
        deliverables: ["Bulk listing uploads", "Optimized titles & tags", "Image & attribute QA"],
      },
    ],
  },
];

export const totalServices = specializations.reduce(
  (sum, s) => sum + s.services.length,
  0
);
