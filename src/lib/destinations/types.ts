export interface QuickStat {
  label: string;
  value: string;
  icon: string;
}

export interface GuideSection {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export interface WeatherPoint {
  location: string;
  altitude: number;
  temp: number;
  weather: string;
}

export interface RouteStatus {
  from: string;
  to: string;
  status: "open" | "partial" | "closed";
  note: string;
}

export interface ChecklistItem {
  name: string;
  essential: boolean;
  affiliateLink?: string;
  affiliateStore?: string;
  price?: string;
}

export interface ChecklistCategory {
  category: string;
  items: ChecklistItem[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
}

export interface SubPage {
  slug: string;
  title: string;
  description: string;
}

export interface DestinationData {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  state: string;
  type: "pilgrimage" | "adventure";
  altitude: number;
  temp: number;
  weather: string;
  season: string;
  duration: string;
  budget: { min: number; max: number };
  heroGradient: string;
  quickStats: QuickStat[];
  intro: string;
  sections: GuideSection[];
  weatherPoints: WeatherPoint[];
  routes: RouteStatus[];
  checklist: ChecklistCategory[];
  faq: FAQ[];
  emergency: EmergencyContact[];
  subPages: SubPage[];
  metaTitle: string;
  metaDescription: string;
}
