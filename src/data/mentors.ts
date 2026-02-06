

// Import images (assuming Vite/Webpack will handle these imports)
// If not using dynamic imports, we might need to rely on public folder or standard imports
// For now, let's assume we can use relative paths or imports if we change the file extension to .tsx or rely on Vite's asset handling.
// Actually, in Vite/React, usually we put images in `public` or import them.
// Let's use the `src/assets` approach and assume imports. 
// However, since this is a .ts data file, we can't easily import images without type defs or changing to .tsx.
// BETTER APPROACH: Move images to `public/mentors/` and use absolute string paths.

export interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  experience: string;
  rating: number;
  image: string;
  linkedin?: string;
  availability: 'available' | 'limited' | 'waitlist';
  skills: string[];
  isAlumni?: boolean;
}

// NOTE: Images should be placed in `public/mentors/` for these paths to work directly.
// We will move the copied images to `public/mentors` in the next step.

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Shehzaad Dhuliawala",
    title: "Research Scientist",
    company: "Meta",
    experience: "8+ years",
    rating: 4.9,
    image: "/mentors/shehzaad.png",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["AI Research", "Deep Learning", "NLP"],
  },
  {
    id: 2,
    name: "Koushik G",
    title: "Product Manager",
    company: "McKinsey",
    experience: "7+ years",
    rating: 4.9,
    image: "/mentors/koushik.png",
    linkedin: "https://linkedin.com",
    availability: "limited",
    skills: ["Product Strategy", "Consulting", "AI Products"],
  },
  {
    id: 3,
    name: "Arvind Iyer",
    title: "Cybersecurity Advisor",
    company: "Optiv",
    experience: "10+ years",
    rating: 4.9,
    image: "/mentors/arvind.jpg",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Cybersecurity", "Risk Management", "Enterprise Security"],
  },
  {
    id: 4,
    name: "Rakind Gupta",
    title: "Strategy Consultant",
    company: "Bain Consulting",
    experience: "12+ years",
    rating: 4.9,
    image: "/mentors/rakind.jpg",
    linkedin: "https://linkedin.com",
    availability: "waitlist",
    skills: ["Strategy", "Business Transformation", "Leadership"],
  },
  {
    id: 5,
    name: "Ronit Khopkar",
    title: "Founder - CEO",
    company: "Barter",
    experience: "10+ years",
    rating: 4.9,
    image: "/mentors/ronit.jpg",
    linkedin: "https://linkedin.com",
    availability: "limited",
    skills: ["Entrepreneurship", "Startups", "Product Building"],
  },
  {
    id: 6,
    name: "Udayan Anand",
    title: "Founder - CEO",
    company: "Finish Line Athlete",
    experience: "8+ years",
    rating: 4.9,
    image: "/mentors/udayan.jpg",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Sports Tech", "Entrepreneurship", "Mentored 50+ students"],
  },
  {
    id: 7,
    name: "Shireen Nagdive",
    title: "Lead Software Engineer",
    company: "Salesforce",
    experience: "8+ years",
    rating: 4.9,
    image: "/mentors/shireen.jpg",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Software Engineering", "Cloud", "Mentored 50+ students"],
  },
  {
    id: 8,
    name: "Aditya Kamath",
    title: "Senior Engineer",
    company: "Qualcomm",
    experience: "8+ years",
    rating: 4.9,
    image: "/mentors/aditya.jpg",
    linkedin: "https://linkedin.com",
    availability: "limited",
    skills: ["Hardware", "AI Chips", "Mentored 50+ students"],
  },
  {
    id: 9,
    name: "Abhishek Shukla",
    title: "Product Lead",
    company: "PayPal",
    experience: "9+ years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["FinTech", "Product Management", "Payments"],
    isAlumni: true,
  },
  {
    id: 10,
    name: "Abhishek Kumar",
    title: "Product Manager",
    company: "Adobe",
    experience: "7+ years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=400&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Product", "Design", "SaaS"],
    isAlumni: true,
  },
  {
    id: 11,
    name: "Milan Modi",
    title: "Deputy GM - Digital Marketing",
    company: "Madison World",
    experience: "10+ years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Digital Marketing", "Brand Strategy", "Advertising"],
    isAlumni: true,
  },
  {
    id: 12,
    name: "Mohit Geat",
    title: "Mentor",
    company: "McKinsey",
    experience: "6+ years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
    availability: "available",
    skills: ["Consulting", "Strategy", "ISB Rank-1"],
    isAlumni: true,
  },
];

export const mentorCompanies = [
  "All Companies",
  "Meta",
  "McKinsey",
  "Salesforce",
  "Optiv",
  "Bain Consulting",
  "Qualcomm",
  "Barter",
];

export const mentorIndustries = [
  "All Industries",
  "Technology",
  "Consulting",
  "Finance",
  "Marketing",
  "Startups",
];
