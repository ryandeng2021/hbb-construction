import { getAssetPath } from '../utils/path';

export const processSteps = {
  description: 'Our streamlined process ensures quality, efficiency, and satisfaction at every stage of your project.',
  itemsPerRow: 3, // Number of items per row on desktop (will adapt on mobile)
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Site Assessment',
      icon: 'uil uil-map-marker',
      duration: 'Free | 1-2 hours',
      description: 'On-site evaluation of your house, structure, and lot. We provide feasibility advice and general direction based on regulations and your needs.',
    },
    {
      id: 2,
      number: '02',
      title: 'Proposal & Quote',
      icon: 'uil uil-file-alt',
      duration: 'Free | 1 week',
      description: 'Clear construction quote and project scope to help you understand budget and timeline.',
    },
    {
      id: 3,
      number: '03',
      title: 'On-Site Project Visit',
      icon: 'uil uil-eye',
      duration: 'Free | 2-3 hours',
      description: 'Visit ongoing projects to see construction quality, craftsmanship, and site management firsthand.',
    },
    {
      id: 4,
      number: '04',
      title: 'Permit Submission',
      icon: 'uil uil-file-check-alt',
      duration: '3-8 weeks',
      description: 'Coordinate design, structural, and engineering documents for city permit submission. Approval usually takes 3-6 months, including review comments and revisions.',
    },
    {
      id: 5,
      number: '05',
      title: 'Pre-Construction',
      icon: 'uil uil-clipboard-notes',
      duration: '3-8 weeks',
      description: 'Schedule, material confirmation, site protection, neighbor notifications, and safety planning.',
    },
    {
      id: 6,
      number: '06',
      title: 'Construction Phase',
      icon: 'uil uil-home',
      duration: '3-6 months',
      description: 'Complete workflow from foundation to structure, MEP, and interior/exterior finishes. Regular progress updates provided.',
    }
  ]
};

// Construction Timeline data
export const constructionTimeline = {
  projectInfo: {
    timeline: "4-5 months (≤1500 sqft), 6-8 months (>1500 sqft)",
    costRange: "$350-$400 / sqft",
    priceIncludes: "Rough materials + labor for finish installation + on-site management & cleanup"
  },
  steps: [
    {
      id: 1,
      number: 1,
      title: "Demolition",
      duration: "7-10 Days",
      description: "Selective demolition, site protection, debris removal."
    },
    {
      id: 2,
      number: 2,
      title: "Foundation",
      duration: "2-3 Weeks",
      description: "Excavation / Grading Footings & Reinforcement."
    },
    {
      id: 3,
      number: 3,
      title: "Framing",
      duration: "3-4 Weeks",
      description: "Framing, waterproofing, tiling, ceilings, and floor leveling."
    },
    {
      id: 4,
      number: 4,
      title: "E& P Rough-In",
      duration: "7-10 Days",
      description: "Code-compliant electrical and plumbing installation."
    },
    {
      id: 5,
      number: 5,
      title: "Drywall",
      duration: "3-4 Weeks",
      description: "Surface preparation, primer, and finish painting."
    },
    {
      id: 6,
      number: 6,
      title: "Finish",
      duration: "3-4 Weeks",
      description: "Cabinetry, flooring, fixtures, and hardware installation."
    },
    {
      id: 7,
      number: 7,
      title: "Final",
      duration: "3-5 Days",
      description: "Final inspection, cleaning, and project close-out."
    }
  ]
};

// Badges/Statistics data
