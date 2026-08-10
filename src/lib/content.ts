import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Cross,
  Dumbbell,
  Heart,
  LineChart,
  Users,
  BookOpen,
  Radio,
  Target,
  Shield,
  Zap,
} from "lucide-react";

export const navLinks = [
  { href: "#launch", label: "Launch" },
  { href: "#programs", label: "Programs" },
  { href: "#academy", label: "Academy" },
  { href: "#community", label: "Community" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#founders", label: "Founders" },
];

export type Program = {
  id: string;
  title: string;
  outcome: string;
  desc: string;
  icon: LucideIcon;
  accent: "red" | "gold";
  tracks?: string[];
};

export const programs: Program[] = [
  {
    id: "faith",
    title: "Faith",
    outcome: "Rooted identity in Christ",
    desc: "Scripture, prayer, spiritual warfare, and daily obedience — not performance, but presence.",
    icon: Cross,
    accent: "red",
  },
  {
    id: "fitness",
    title: "Fitness",
    outcome: "A body built for the mission",
    desc: "Training, nutrition, and discipline — stewarding strength for whatever God assigns.",
    icon: Dumbbell,
    accent: "gold",
  },
  {
    id: "business",
    title: "Business",
    outcome: "Kingdom marketplace skill",
    desc: "Real strategies from practitioners: investing, crypto, marketing, e-commerce, social media, real estate.",
    icon: Briefcase,
    accent: "red",
    tracks: ["Investing", "Crypto", "Marketing", "E-Commerce", "Social Media", "Real Estate"],
  },
  {
    id: "finances",
    title: "Finances",
    outcome: "Wealth with wisdom",
    desc: "Budgeting, investing, debt freedom, and building generational impact without compromise.",
    icon: LineChart,
    accent: "gold",
  },
  {
    id: "family",
    title: "Family",
    outcome: "Legacy on purpose",
    desc: "Marriage, parenting, and household leadership grounded in biblical foundations.",
    icon: Heart,
    accent: "red",
  },
];

export const systemSteps = [
  { step: "01", label: "Learn", desc: "Structured teachings from people who are actually doing it." },
  { step: "02", label: "Apply", desc: "Weekly actions — not theory hoarding." },
  { step: "03", label: "Build", desc: "Skills, habits, income, and standards that compound." },
  { step: "04", label: "Connect", desc: "Ambitious believers who refuse to drift alone." },
  { step: "05", label: "Evolve", desc: "A new identity forged through repetition and environment." },
];

export const membershipBenefits = [
  {
    icon: BookOpen,
    title: "Academy Curriculum",
    items: ["Faith, fitness, business, finances, family", "Business & wealth tracks", "Launching November 1, 2026"],
  },
  {
    icon: Radio,
    title: "Live Environment",
    items: ["Strategy calls & live sessions", "Accountability culture", "RB Insiders premium tier"],
  },
  {
    icon: Users,
    title: "Community",
    items: ["Believers who push you forward", "Shared standards, not noise", "Network across Thy Kingdom"],
  },
];

export const transformationPairs = [
  { from: "Passive", to: "Powerful" },
  { from: "Isolated", to: "Connected" },
  { from: "Unfocused", to: "Disciplined" },
  { from: "Consumer", to: "Creator" },
  { from: "Potential", to: "Execution" },
];

export const communityFeatures = [
  { icon: Users, title: "Live Community", desc: "Strategy calls, accountability, believers who push you forward." },
  { icon: BookOpen, title: "Expert Teachings", desc: "Courses from practitioners — not theorists." },
  { icon: Shield, title: "Faith-First", desc: "Every framework filtered through Scripture." },
  { icon: Target, title: "Clear Action", desc: "Assignments you can execute this week." },
  { icon: Zap, title: "High Energy", desc: "Built for people who want to move." },
  { icon: Target, title: "RB Insiders", desc: "Premium tier for deepest access at launch." },
];
