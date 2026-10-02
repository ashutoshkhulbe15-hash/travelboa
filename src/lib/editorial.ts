export interface EditorialSource {
  label: string;
  url: string;
}

export interface DestinationEditorialRecord {
  searchIndexable: boolean;
  deskVerified: string;
  modifiedISO: string;
  fieldNote?: string;
  reviewNote: string;
  sources: EditorialSource[];
}

const DEFAULT_RECORD: DestinationEditorialRecord = {
  searchIndexable: false,
  deskVerified: "30 September 2026",
  modifiedISO: "2026-09-30",
  reviewNote:
    "This guide is being re-checked against primary sources. Treat prices, access rules and seasonal conditions as planning guidance, then confirm them with the linked authority or local control room before departure.",
  sources: [],
};

const DESTINATION_EDITORIAL: Record<string, DestinationEditorialRecord> = {
  kedarnath: {
    searchIndexable: true,
    deskVerified: "2 October 2026",
    modifiedISO: "2026-10-02",
    reviewNote:
      "Rebuilt against 2026 Uttarakhand Tourism, District Rudraprayag, the state health department, BKTC and IRCTC guidance. Unconfirmed closing dates, stale fares, unsupported personal claims and general medication advice were removed.",
    sources: [
      {
        label: "Uttarakhand Tourism — Kedarnath Dham registration and opening date",
        url: "https://registrationandtouristcare.uk.gov.in/dham_detail.php?dham=Mw%3D%3D",
      },
      {
        label: "Uttarakhand Tourism — registration FAQ and assistance centres",
        url: "https://registrationandtouristcare.uk.gov.in/faq.php",
      },
      {
        label: "District Rudraprayag — Kedarnath Yatra 2026 and control rooms",
        url: "https://rudraprayag.gov.in/kedarnath-yatra-2/",
      },
      {
        label: "Uttarakhand Health Department — Char Dham health advisory 2026",
        url: "https://health.uk.gov.in/document-category/char-dham-yatra-health-advisory/",
      },
      {
        label: "Badrinath–Kedarnath Temple Committee",
        url: "https://badrinath-kedarnath.gov.in/",
      },
      {
        label: "IRCTC HeliYatra — official Kedarnath helicopter booking",
        url: "https://heliyatra.irctc.co.in/",
      },
    ],
  },
  badrinath: {
    searchIndexable: false,
    deskVerified: "30 September 2026",
    modifiedISO: "2026-09-30",
    reviewNote:
      "Temple information was checked against Uttarakhand Tourism and the temple committee. Road time and fares remain variable and should be confirmed locally.",
    sources: [
      {
        label: "Uttarakhand Tourism — Badrinath Dham registration and opening date",
        url: "https://registrationandtouristcare.uk.gov.in/dham_detail.php?dham=NA%3D%3D",
      },
      {
        label: "Badrinath–Kedarnath Temple Committee",
        url: "https://badrinath-kedarnath.gov.in/",
      },
    ],
  },
  spiti: {
    searchIndexable: true,
    deskVerified: "2 October 2026",
    modifiedISO: "2026-10-02",
    reviewNote:
      "Rebuilt against Himachal Tourism and state sources. Permit types are separated by nationality, protected route and vehicle; static road, fare, fuel, ATM and network promises were removed.",
    sources: [
      {
        label: "Himachal Tourism — Spiti Valley",
        url: "https://himachaltourism.gov.in/destination/spiti-valley/",
      },
      {
        label: "Himachal Tourism — travel safety and Inner Line Permits",
        url: "https://himachaltourism.gov.in/travel-safety-tips/",
      },
      {
        label: "Himachal Tourism — district tourism contacts",
        url: "https://himachaltourism.gov.in/contact/",
      },
      {
        label: "Himachal Pradesh — official Rohtang permit portal",
        url: "https://rohtangpermits.hp.gov.in/",
      },
      {
        label: "Himachal PWD — Spiti rest-house directory",
        url: "https://hppwd.hp.gov.in/spiti",
      },
    ],
  },
  lachung: {
    searchIndexable: true,
    deskVerified: "2 October 2026",
    modifiedISO: "2026-10-02",
    reviewNote:
      "Rebuilt against Sikkim Tourism and Government of Sikkim sources. The PAP, advance-issue and three-day/two-night rules are explicit; invented visits, fixed fares and live-looking road claims were removed.",
    sources: [
      {
        label: "Sikkim Tourism — Protected Area Permits",
        url: "https://www.sikkimtourism.gov.in/pap",
      },
      {
        label: "Government of Sikkim — September 2025 Lachung advisory",
        url: "https://sikkimtourism.gov.in/DownloadableFiles/Notifications/12e5c03e-9fc5-40f5-9b04-21444c814868_Notice.pdf",
      },
      {
        label: "Government of Sikkim — official road-condition reports",
        url: "https://www.sikkim.gov.in/departments/roads-and-bridges-department/road-conditions",
      },
      {
        label: "Government of Sikkim — July 2026 Lachung landslide inspection",
        url: "https://www.sikkim.gov.in/media/news-announcement/news-info?name=SDM+Chungthang+Inspects+Landslide+Site+at+Teeling%2C+Lachung",
      },
      {
        label: "Sikkim emergency operating centres and tourist helpline",
        url: "https://namchi.nic.in/emergency-operating-centereoc-helpline-number/",
      },
    ],
  },
  nainital: {
    searchIndexable: true,
    deskVerified: "2 October 2026",
    modifiedISO: "2026-10-02",
    fieldNote:
      "Ash was born in Nainital, and the three Naini Lake photographs are first-party material supplied from his collection.",
    reviewNote:
      "The guide was rebuilt against District Nainital, Uttarakhand Tourism and the official Corbett Tiger Reserve portal. Unsupported prices, fixed transport schedules, personal anecdotes and wildlife-sighting probabilities were removed. Changeable details are explicitly marked for same-day confirmation.",
    sources: [
      {
        label: "District Nainital — official tourist guidance and traffic rules",
        url: "https://nainital.nic.in/tips-for-tourists/",
      },
      {
        label: "District Nainital — Naini Lake and authorised boating information",
        url: "https://nainital.nic.in/tourist-place/naini-lake/",
      },
      {
        label: "District Nainital — official attractions directory",
        url: "https://nainital.nic.in/tourist-places/",
      },
      {
        label: "Uttarakhand Tourism — Nainital destination page",
        url: "https://uttarakhandtourism.gov.in/destination/Nainital",
      },
      {
        label: "Corbett Tiger Reserve — official booking and zone notices",
        url: "https://corbettgov.org/",
      },
    ],
  },
};

export function editorialForDestination(slug: string): DestinationEditorialRecord {
  return DESTINATION_EDITORIAL[slug] ?? DEFAULT_RECORD;
}
