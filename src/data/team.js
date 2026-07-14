import { getAssetPath } from '../utils/path';

export const teamRows = [
  [
    // Row 1: 3 members
    {
      id: 1,
      name: 'Ryan',
      title: 'Managing Director',
      image: getAssetPath('/img/team/kevin-patterson.webp'),
      bio: 'Ryan Deng brings over 15 years of experience in construction management and strategic leadership. Under his guidance, HBB CONSTRUCTION has grown into a leading construction company known for excellence and innovation.',
      email: 'ryand@hbbconstruction.com',
      phone: '+1 (650) 996-0715',
      experience: '15+ Years',
      specialties: ['Project Management', 'BConstruction & Technical Skills', 'Project Oversight']
    },

    {
      id: 2,
      name: 'Copper',
      title: 'Principal',
      image: getAssetPath('/img/team/john-mitchell.webp'),
      bio: 'John Mitchell is a seasoned project manager with expertise in coordinating complex construction projects from inception to completion. His attention to detail and leadership skills ensure projects are delivered on time and within budget.',
      email: 'copper@hbbconstruction.com',
      phone: '+1 (555) 234-5678',
      experience: '15+ Years',
      specialties: ['Project Coordination', 'Team Management', 'Quality Control']
    },
    {
      id: 3,
      name: 'Lynn',
      title: 'Project Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
      bio: 'David Ramirez is a highly skilled engineer specializing in structural design and site management. His technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'lynn@hbbconstruction.com',
      phone: '+1 (555) 345-6789',
      experience: '3+ Years',
      specialties: ['Structural Engineering', 'Site Management', 'Technical Design']
    },
    {
      id: 4,
      name: 'Bai',
      title: 'Project Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
      bio: 'David Ramirez is a highly skilled engineer specializing in structural design and site management. His technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'bai@hbbconstruction.com',
      phone: '+1 (555) 345-6789',
      experience: '3+ Years',
      specialties: ['Structural Engineering', 'Site Management', 'Technical Design']
    },
    {
      id: 5,
      name: 'Suzy',
      title: 'Design Manager',
      image: getAssetPath('/img/team/david-ramirez.webp'),
      bio: 'Suzy Zhang is a highly skilled architectual designer specializing in residential and commercial design. Her technical expertise and problem-solving abilities have been instrumental in the success of numerous high-profile projects.',
      email: 'suzy@hbbconstruction.com',
      phone: '+1 (267) 292-1638',
      experience: '3+ Years',
      specialties: ['Architectual Design', 'Residential Design', 'Commercial Design']
    },
  ],
  [
    {
      id: 11,
      name: 'Construction Team',
      title: 'In-House Construction Crew',
      image: getAssetPath('/img/team/construction-team.webp'),
      bio: 'Our in-house construction team consists of approximately 20 skilled professionals, organized into specialized groups to handle all aspects of project construction. With extensive experience, the team ensures high-quality execution and seamless coordination across all phases of construction.',
      experience: 'Approx. 20 Team Members',
      specialties: [
        'Structural Construction',
        'Site Management',
        'Foundation & Framing',
        'Demolition',
        'Grading',
        'Insulation'
      ]
    },
    {
      id: 12,
      name: 'Structural Team',
      title: 'Structural & Site Specialists',
      image: getAssetPath('/img/team/structural-team.webp'),
      bio: 'The structural team, composed of 14 experienced members, is responsible for foundation, framing, demolition, grading, and insulation work. They can flexibly take on additional structure-related tasks as needed, ensuring construction quality and efficient on-site progress.',
      experience: '14 Team Members',
      specialties: [
        'Foundation',
        'Framing',
        'Demolition',
        'Grading',
        'Insulation',
        'Structural Coordination'
      ]
    },
    {
      id: 13,
      name: 'Electrical Team',
      title: 'Licensed Electrical Crew',
      image: getAssetPath('/img/team/electrical-team.webp'),
      bio: 'Our electrical team, consisting of 2 skilled members, handles both rough-in and finish wiring for residential and commercial projects. All work complies with California electrical codes and safety standards, ensuring reliable performance and long-term system integrity.',
      experience: '2 Team Members',
      specialties: [
        'Electrical Rough-In',
        'Finish Wiring',
        'Code Compliance',
        'Safety Standards'
      ]
    },
    {
      id: 14,
      name: 'Interior Finishes Team',
      title: 'Interior Construction Specialists',
      image: getAssetPath('/img/team/interior-team.webp'),
      bio: 'Our interior finishes team, composed of 4 members, focuses on the final stages of construction. They deliver high-quality workmanship across drywall, trim, painting, and flooring, ensuring attention to detail, material precision, and a refined final presentation.',
      experience: '4 Team Members',
      specialties: [
        'Drywall',
        'Trim Work',
        'Painting',
        'Flooring',
        'Final Detailing'
      ]
    }
  ]
];

// Flattened array of all team members (computed from teamRows)
// Useful for pages that need to search/filter all members
export const teamMembers = teamRows.flat();
