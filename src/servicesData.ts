import { 
  Droplets, 
  Leaf, 
  Sun, 
  Waves, 
  Shovel, 
  Lightbulb,
  Scissors,
  TreePine,
  Trash2,
  Flower2
} from 'lucide-react';

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
    id: 'clean-ups',
    slug: 'yard-clean-ups',
    title: "Yard Clean-ups",
    shortDesc: "Complete property clean-ups to restore the beauty and health of your outdoor space.",
    longDesc: "Whether it's seasonal debris, overgrown vegetation, or post-storm mess, our comprehensive yard clean-up services will have your property looking pristine again. We handle leaf removal, branch clearing, and general tidying to ensure your landscape remains healthy and visually appealing year-round in San Marcos and surrounding areas.",
    benefits: [
      "Instantly improved curb appeal",
      "Prevents pests and plant diseases",
      "Saves you hours of back-breaking work",
      "Prepares your garden for new growth"
    ],
    features: [
      "Leaf and debris removal",
      "Weed clearing and management",
      "Dead branch and brush hauling",
      "Seasonal preparation"
    ],
    icon: Trash2,
    img: "/img/service_cleanup_1782917326014.png",
    seoKeywords: ["yard clean up San Marcos", "property cleanup", "leaf removal", "debris hauling", "overgrown yard cleanup"]
  },
  {
    id: 'mowing',
    slug: 'professional-mowing',
    title: "Professional Mowing",
    shortDesc: "Reliable, high-quality lawn mowing services to keep your grass perfectly manicured.",
    longDesc: "A perfectly cut lawn is the foundation of a beautiful landscape. Our professional mowing services ensure your grass is cut at the optimal height for its species and the season. We don't just mow; we edge along walkways, trim around obstacles, and blow away clippings, leaving you with a flawless, vibrant green lawn.",
    benefits: [
      "Consistent, uniform lawn appearance",
      "Promotes thicker, healthier grass growth",
      "Saves your weekends for relaxation",
      "Professional edging for a crisp look"
    ],
    features: [
      "Precision lawn mowing",
      "Hardscape edging",
      "Line trimming around obstacles",
      "Clipping cleanup and removal"
    ],
    icon: Shovel,
    img: "/img/service_mowing_1782917334934.png",
    seoKeywords: ["lawn mowing San Marcos", "grass cutting service", "lawn care La Costa", "professional edging", "weekly mowing"]
  },
  {
    id: 'tree-trimming',
    slug: 'tree-trimming',
    title: "Tree Trimming",
    shortDesc: "Expert tree trimming to enhance the health, safety, and shape of your trees.",
    longDesc: "Proper tree trimming is essential for both the health of your trees and the safety of your property. Our experienced team carefully removes dead, diseased, or overgrown branches. We shape trees to improve their structural integrity, encourage healthy growth, and ensure they don't interfere with power lines or roof structures.",
    benefits: [
      "Improves tree health and lifespan",
      "Prevents dangerous falling branches",
      "Increases sunlight to your lawn",
      "Enhances overall tree aesthetics"
    ],
    features: [
      "Crown thinning and shaping",
      "Deadwood removal",
      "Clearance pruning",
      "Debris hauling and cleanup"
    ],
    icon: Scissors,
    img: "/img/service_tree_trimming_1782917349028.png",
    seoKeywords: ["tree trimming San Marcos", "pruning services", "tree maintenance", "crown thinning", "arborist services Escondido"]
  },
  {
    id: 'sod-installation',
    slug: 'sod-installation',
    title: "Sod Installation",
    shortDesc: "Instant, lush green lawns with our premium sod installation services.",
    longDesc: "Why wait months for seed to grow when you can have a beautiful lawn today? Our sod installation services provide an instant transformation for your property. We carefully prepare the soil, select the best sod varieties for the Southern California climate, and install it with precision to ensure healthy roots and a seamless, vibrant lawn.",
    benefits: [
      "Instant beautiful green lawn",
      "Erosion and mud control",
      "Fewer weeds than seeded lawns",
      "Can be installed almost any time of year"
    ],
    features: [
      "Old lawn removal and grading",
      "Soil preparation and amendment",
      "Premium, climate-appropriate sod",
      "Initial watering and care instructions"
    ],
    icon: Leaf,
    img: "/img/service_sod_installation_1782917357016.png",
    seoKeywords: ["sod installation San Marcos", "new lawn installation", "turf grass San Diego", "instant lawn", "soil preparation"]
  },
  {
    id: 'tree-removal',
    slug: 'tree-removal',
    title: "Tree Removal",
    shortDesc: "Safe and efficient removal of dead, hazardous, or unwanted trees.",
    longDesc: "While we love trees, sometimes removal is the only option for safety or landscaping reasons. Whether a tree is dead, diseased, threatening your home's foundation, or simply in the way of a new project, our team handles tree removals safely and efficiently. We use proper equipment and techniques to protect your property during the process.",
    benefits: [
      "Eliminates hazards to your home and family",
      "Frees up space for new landscaping",
      "Prevents disease spread to other plants",
      "Stops root damage to foundations or pipes"
    ],
    features: [
      "Safe, controlled dismantling",
      "Hazard tree removal",
      "Stump grinding (optional)",
      "Complete wood and debris haul-away"
    ],
    icon: TreePine,
    img: "/img/service_tree_removal_1782917364743.png",
    seoKeywords: ["tree removal San Marcos", "hazardous tree cutting", "tree felling", "arborist tree removal", "stump removal"]
  },
  {
    id: 'gardening-upkeep',
    slug: 'gardening-upkeep',
    title: "Gardening Upkeep",
    shortDesc: "Meticulous garden care to keep your flower beds and plants thriving.",
    longDesc: "A beautiful garden requires regular attention. Our gardening upkeep services are tailored to the specific needs of your plants. From weeding and mulching to planting seasonal flowers and fertilizing, we provide the dedicated care needed to maintain a vibrant, colorful, and healthy garden throughout the year.",
    benefits: [
      "Maintains vibrant, healthy plant life",
      "Keeps garden beds weed-free",
      "Ensures continuous seasonal color",
      "Protects your landscaping investment"
    ],
    features: [
      "Hand weeding and cultivation",
      "Seasonal flower planting",
      "Mulch installation and refreshing",
      "Targeted fertilization and pest monitoring"
    ],
    icon: Flower2,
    img: "/img/service_gardening_1782917372488.png",
    seoKeywords: ["gardening upkeep San Marcos", "garden maintenance", "flower bed care", "weeding services", "landscape gardener Cardiff"]
  }
];
