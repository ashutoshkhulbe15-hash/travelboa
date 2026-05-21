// Guide content registry
// Add content here for each guide slug.
// Guides without content will show "coming soon" placeholder.

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  tip?: string;
  warning?: string;
  items?: string[];
}

export interface GuideContent {
  sections: GuideSection[];
}

export const guideContent: Record<string, GuideContent> = {
  // Content will be added here as guides are written.
  // Example structure:
  //
  // "acclimatization": {
  //   sections: [
  //     {
  //       heading: "What is altitude sickness?",
  //       paragraphs: ["Paragraph 1...", "Paragraph 2..."],
  //       tip: "Pro tip text",
  //       warning: "Warning text",
  //       items: ["Bullet point 1", "Bullet point 2"],
  //     },
  //   ],
  // },
};
