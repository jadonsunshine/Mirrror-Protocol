export interface Campaign {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  raised: number;
  goal: number;
  image: string;
  creator: string;
  creatorImage: string;
  daysLeft: number;
  backers: number;
  isTrending?: boolean; // <--- NEW FLAG
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: "stacks-school",
    title: "Stacks School",
    description: "Teaching Clarity smart contracts to 10,000 developers worldwide. We are building the next generation of Bitcoin builders.",
    category: "Education",
    location: "Global",
    raised: 12000,
    goal: 100000,
    image: "/campaign-2.jpg",
    creator: "DeFi Academy",
    creatorImage: "https://github.com/shadcn.png",
    daysLeft: 45,
    backers: 340,
    isTrending: false
  },
  {
    id: "defi-for-everyone",
    title: "DeFi for Everyone",
    description: "The first mobile-first yield aggregator on Stacks. Democratizing finance for the 99% with simple UX and trustless strategies.",
    category: "DeFi",
    location: "Lagos, Nigeria",
    raised: 45000,
    goal: 50000,
    image: "/campaign-1.jpg",
    creator: "Alex Smith",
    creatorImage: "https://github.com/shadcn.png",
    daysLeft: 14,
    backers: 1240,
    isTrending: true // <--- THIS ONE IS THE HERO
  },
  {
    id: "green-mining",
    title: "Green Mining",
    description: "Solar-powered Bitcoin mining initiative in Texas. Carbon neutral production ensuring the future of sustainable POW.",
    category: "Mining",
    location: "Austin, TX",
    raised: 5000,
    goal: 25000,
    image: "/campaign-3.jpg",
    creator: "EcoBit",
    creatorImage: "https://github.com/shadcn.png",
    daysLeft: 21,
    backers: 85,
    isTrending: false
  }
];

// Helper: Get the single trending campaign for the center slot
export function getHeroCampaign() {
  return CAMPAIGNS.find((c) => c.isTrending) || CAMPAIGNS[0];
}

// Helper: Get 2 other campaigns for the side slots
export function getSideCampaigns() {
  return CAMPAIGNS.filter((c) => !c.isTrending).slice(0, 2);
}

export function getCampaign(id: string) {
  return CAMPAIGNS.find((c) => c.id === id);
}