import { 
  Droplets, 
  Leaf, 
  Sun, 
  Waves, 
  Shovel, 
  Lightbulb 
} from 'lucide-react';
import React from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  icon: any;
  img: string;
  seoKeywords: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'backyard-pool',
    slug: 'backyard-and-pool-landscaping',
    title: "Backyard & Pool Landscaping",
    shortDesc: "Turn your backyard into a beautifully relaxing retreat with our custom pool designs and landscaping.",
    longDesc: "Your backyard should be an extension of your home—a place for relaxation, entertainment, and beauty. Our expert team specializes in creating cohesive outdoor environments that integrate seamlessly with your pool area. From tropical plant selections that thrive in Chula Vista's climate to elegant hardscaping that provides the perfect space for lounging, we handle every detail of your backyard transformation.",
    benefits: [
      "Increased property value",
      "Enhanced outdoor living space",
      "Low-maintenance plant selections",
      "Professional pool-side safety features"
    ],
    features: [
      "Custom landscape design",
      "Pool-side hardscaping & decking",
      "Tropical & Mediterranean plant palettes",
      "Privacy screening & fencing"
    ],
    icon: Waves,
    img: "https://i.ibb.co/PLHkjmq/image.png",
    seoKeywords: ["pool landscaping Chula Vista", "backyard remodel San Diego", "outdoor living design", "pool deck landscaping", "backyard retreat"]
  },
  {
    id: 'smart-irrigation',
    slug: 'smart-irrigation-systems',
    title: "Smart Irrigation Systems",
    shortDesc: "Keep your garden thriving with solutions designed for efficiency and minimal water waste.",
    longDesc: "In Southern California, water efficiency is more than just a convenience—it's a necessity. Our smart irrigation systems use the latest technology to ensure your landscape gets exactly the amount of water it needs, and not a drop more. We install WiFi-enabled controllers, weather-sensing technology, and precision drip systems that can reduce your water bill while keeping your garden lush and green.",
    benefits: [
      "Reduced water bills",
      "Prevents overwatering & plant disease",
      "Remote control via smartphone",
      "Conserves local water resources"
    ],
    features: [
      "WiFi-enabled smart controllers",
      "Drip irrigation installation",
      "Sprinkler head repair & optimization",
      "Weather-based scheduling"
    ],
    icon: Droplets,
    img: "https://i.ibb.co/4wV9xWNk/image.png",
    seoKeywords: ["sprinkler repair Chula Vista", "smart irrigation San Diego", "water efficient landscaping", "drip system installation", "irrigation maintenance"]
  },
  {
    id: 'maintenance-fertilization',
    slug: 'maintenance-and-fertilization-plans',
    title: "Maintenance & Fertilization",
    shortDesc: "Ongoing plans crafted to keep your garden healthy and vibrant all year round.",
    longDesc: "A beautiful landscape requires consistent care. Our maintenance and fertilization plans are customized to the specific needs of your soil and plant species. We don't just mow lawns; we monitor plant health, manage pests, and provide the essential nutrients your garden needs to thrive through every season in Chula Vista.",
    benefits: [
      "Consistent curb appeal",
      "Healthier, greener lawn",
      "Early detection of pests & disease",
      "Saves you time and effort"
    ],
    features: [
      "Weekly or bi-weekly lawn care",
      "Custom fertilization schedules",
      "Weed control & management",
      "Pruning & hedge trimming"
    ],
    icon: Leaf,
    img: "https://i.ibb.co/qYMKX7gC/image.png",
    seoKeywords: ["lawn care Chula Vista", "garden maintenance San Diego", "landscape fertilization", "weekly lawn service", "property maintenance"]
  },
  {
    id: 'landscape-lighting',
    slug: 'landscape-lighting',
    title: "Landscape Lighting",
    shortDesc: "Enhance safety and highlight your home’s best features with strategic lighting.",
    longDesc: "Don't let your beautiful landscape disappear when the sun goes down. Our professional lighting designs enhance the safety of your property while highlighting architectural features and specimen plants. We use high-quality, energy-efficient LED fixtures that provide a warm, inviting glow to your walkways, patios, and garden beds.",
    benefits: [
      "Increased nighttime safety",
      "Enhanced home security",
      "Extended outdoor usability",
      "Stunning nighttime aesthetics"
    ],
    features: [
      "LED path lighting",
      "Architectural up-lighting",
      "Low-voltage system installation",
      "Smart lighting timers & controls"
    ],
    icon: Lightbulb,
    img: "https://i.ibb.co/x4m6qGH/image.png",
    seoKeywords: ["outdoor lighting Chula Vista", "landscape lights San Diego", "LED garden lighting", "security lighting", "pathway lights"]
  },
  {
    id: 'walkways-pathways',
    slug: 'walkways-and-pathways',
    title: "Walkways & Pathways",
    shortDesc: "Beautiful, durable paths that enhance accessibility and add elegance to your property.",
    longDesc: "Pathways do more than just connect spaces—they define the flow of your landscape. We design and install durable, elegant walkways using a variety of materials including pavers, flagstone, and decorative gravel. Whether you're looking for a formal entrance or a winding garden path, our expert hardscaping team ensures a level, long-lasting result.",
    benefits: [
      "Improved property accessibility",
      "Reduced soil compaction",
      "Defined garden structure",
      "Enhanced curb appeal"
    ],
    features: [
      "Paver & flagstone installation",
      "Decorative gravel paths",
      "Stepping stone designs",
      "Professional grading & drainage"
    ],
    icon: Shovel,
    img: "https://i.ibb.co/ZzW8XZKD/image.png",
    seoKeywords: ["paver walkways Chula Vista", "flagstone paths San Diego", "hardscaping services", "garden path design", "walkway installation"]
  },
  {
    id: 'mulching-soil',
    slug: 'mulching-and-soil-enhancement',
    title: "Mulching & Soil Enhancement",
    shortDesc: "Improve plant health and curb appeal with professional mulching and premium soil treatments.",
    longDesc: "The health of your plants starts with the soil. Our soil enhancement services include professional mulching, which helps retain moisture, suppress weeds, and regulate soil temperature. We also provide premium soil amendments and compost to improve soil structure and nutrient availability, ensuring your garden has the foundation it needs to flourish.",
    benefits: [
      "Improved water retention",
      "Natural weed suppression",
      "Enhanced soil fertility",
      "Polished, finished look"
    ],
    features: [
      "Premium organic mulch",
      "Soil testing & amendments",
      "Compost application",
      "Bark & decorative wood chips"
    ],
    icon: Sun,
    img: "https://i.ibb.co/1YTTNKXH/image.png",
    seoKeywords: ["mulching services Chula Vista", "soil enhancement San Diego", "garden soil prep", "bark installation", "organic soil amendments"]
  }
];
