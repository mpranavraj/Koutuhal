export interface Job {
  id: number;
  title: string;
  company: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  mode: 'WFO' | 'WFH' | 'Hybrid' | 'Remote';
  location: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  postedDays?: number;
  category?: string;
}

// 100 Unique Jobs Generator
const uniqueJobsList: Job[] = [
  // --- TECH GIANTS (Google, Microsoft, Meta, etc.) ---
  {
    id: 1, title: "Senior Software Engineer, Search", company: "Google", type: "Full-time", mode: "Hybrid", location: "Bangalore",
    experience: "5+ Years", salary: "45-65 LPA",
    description: "Join the core Search team to optimize indexing algorithms and improve query understanding for billions of users.",
    skills: ["C++", "Distributed Systems", "Algorithms", "Python"], category: "Engineering"
  },
  {
    id: 2, title: "Product Manager, Azure AI", company: "Microsoft", type: "Full-time", mode: "Hybrid", location: "Hyderabad",
    experience: "8+ Years", salary: "50-70 LPA",
    description: "Lead the product vision for Azure's generative AI capabilities, working closely with research and engineering.",
    skills: ["Product Strategy", "Cloud Computing", "AI/ML", "Stakeholder Management"], category: "Product"
  },
  {
    id: 3, title: "Frontend Engineer, Instagram", company: "Meta", type: "Full-time", mode: "WFO", location: "London",
    experience: "3+ Years", salary: "£80k-120k",
    description: "Build pixel-perfect UI for Instagram's creator tools. Focus on performance and smooth animations.",
    skills: ["React Native", "JavaScript", "GraphQL", "iOS"], category: "Engineering"
  },
  {
    id: 4, title: "Data Scientist, Recommendations", company: "Netflix", type: "Full-time", mode: "Remote", location: "Remote",
    experience: "4+ Years", salary: "$200k-350k",
    description: "Improve our content recommendation algorithms using causal inference and deep learning.",
    skills: ["Python", "Spark", "TensorFlow", "Causal Inference"], category: "Data"
  },
  {
    id: 5, title: "Software Development Engineer II", company: "Amazon", type: "Full-time", mode: "WFO", location: "Bangalore",
    experience: "2-5 Years", salary: "25-45 LPA",
    description: "Build scalable backend services for Amazon Pay. Handle millions of transactions with high availability.",
    skills: ["Java", "DynamoDB", "AWS", "System Design"], category: "Engineering"
  },
  {
    id: 6, title: "iOS Engineer, Music", company: "Spotify", type: "Full-time", mode: "Hybrid", location: "Stockholm",
    experience: "4+ Years", salary: "€70k-90k",
    description: "Craft the mobile experience for Spotify's new audiobook and podcast features.",
    skills: ["Swift", "Objective-C", "Mobile Architecture", "Audio Processing"], category: "Engineering"
  },
  {
    id: 7, title: "Marketing Analytics Manager", company: "Adobe", type: "Full-time", mode: "Hybrid", location: "Noida",
    experience: "6+ Years", salary: "20-35 LPA",
    description: "Drive marketing efficiency by analyzing campaign performance across Adobe Creative Cloud.",
    skills: ["SQL", "Tableau", "Marketing Mix Modeling", "Python"], category: "Marketing"
  },
  {
    id: 8, title: "Enterprise Account Executive", company: "Salesforce", type: "Full-time", mode: "WFO", location: "Mumbai",
    experience: "5+ Years", salary: "30-50 LPA + Comm",
    description: "Manage relationships with key enterprise clients in the financial sector.",
    skills: ["B2B Sales", "CRM", "Negotiation", "SaaS"], category: "Sales"
  },
  // --- STARTUPS & UNICORNS ---
  {
    id: 9, title: "Founding Engineer", company: "StealthAI", type: "Full-time", mode: "WFO", location: "San Francisco",
    experience: "3+ Years", salary: "$150k-250k + 1% Equity",
    description: "Be the first hire at a YC-backed AI startup building autonomous agents. Wear many hats.",
    skills: ["TypeScript", "Python", "LLMs", "FastAPI"], category: "Engineering"
  },
  {
    id: 10, title: "Product Designer", company: "Notion", type: "Full-time", mode: "Remote", location: "Remote",
    experience: "3+ Years", salary: "$140k-200k",
    description: "Design intuitive interfaces for Notion's productivity tools. Simplify complex workflows.",
    skills: ["Figma", "Visual Design", "Interaction Design", "Prototyping"], category: "Design"
  },
  {
    id: 11, title: "Backend Developer (Golang)", company: "Uber", type: "Full-time", mode: "Hybrid", location: "Bangalore",
    experience: "3-6 Years", salary: "30-55 LPA",
    description: "Optimize the dispatch engine that powers millions of rides daily.",
    skills: ["Go", "Microservices", "Kafka", "Distributed Systems"], category: "Engineering"
  },
  {
    id: 12, title: "Growth Marketing Manager", company: "Canva", type: "Full-time", mode: "Remote", location: "Sydney/Remote",
    experience: "5+ Years", salary: "AU$120k-160k",
    description: "Lead user acquisition strategies for Canva Pro in the APAC region.",
    skills: ["SEO", "User Acquisition", "A/B Testing", "Google Analytics"], category: "Marketing"
  },
  {
    id: 13, title: "DevOps Engineer", company: "Coinbase", type: "Full-time", mode: "Remote", location: "Remote",
    experience: "4+ Years", salary: "$160k-220k",
    description: "Build and maintain the infrastructure for a secure crypto exchange.",
    skills: ["Terraform", "AWS", "Security", "Kubernetes"], category: "Engineering"
  },
  {
    id: 14, title: "Machine Learning Engineer", company: "Hugging Face", type: "Full-time", mode: "Remote", location: "Remote",
    experience: "2+ Years", salary: "$150k-200k",
    description: "Contribute to open-source transformers library and optimize model inference.",
    skills: ["PyTorch", "Transformers", "Open Source", "Python"], category: "Data"
  },
  {
    id: 15, title: "Engineering Manager", company: "Stripe", type: "Full-time", mode: "Hybrid", location: "Dublin",
    experience: "8+ Years", salary: "€110k-150k",
    description: "Lead a team of engineers building Stripe's global payments network.",
    skills: ["Leadership", "FinTech", "API Design", "Mentorship"], category: "Engineering"
  },
  // --- INTERNSHIPS ---
  {
    id: 16, title: "Software Engineering Intern", company: "Google", type: "Internship", mode: "WFO", location: "Bangalore",
    experience: "0 Years", salary: "₹1L/month",
    description: "Work on real projects with the Google Cloud team. mentorship included.",
    skills: ["Java", "Python", "Data Structures", "Algorithms"], category: "Engineering"
  },
  {
    id: 17, title: "Product Design Intern", company: "Airbnb", type: "Internship", mode: "Remote", location: "Remote",
    experience: "0 Years", salary: "$8k/month",
    description: "Design experiences for hosts and guests. Learn from world-class designers.",
    skills: ["Figma", "Design Thinking", "UI/UX", "Portfolio"], category: "Design"
  },
  {
    id: 18, title: "Data Science Intern", company: "Microsoft", type: "Internship", mode: "Hybrid", location: "Hyderabad",
    experience: "0 Years", salary: "₹80k/month",
    description: "Analyze usage patterns for Office 365. Build predictive models.",
    skills: ["SQL", "Python", "Machine Learning", "Statistics"], category: "Data"
  },
  // --- MORE ROLES TO REACH 100 (Simplified generation for brevity but ensuring uniqueness) ---
  ...Array.from({ length: 82 }).map((_, i) => ({
    id: 19 + i,
    title: [
      "Full Stack Developer", "QA Automation Engineer", "System Administrator", "Cloud Architect",
      "Technical Writer", "HR Business Partner", "Recruiter", "Legal Counsel",
      "Financial Analyst", "Operations Manager", "Customer Success Manager", "Sales Development Rep",
      "UX Researcher", "Game Developer", "Unity Engineer", "Blockchain Developer",
      "Security Analyst", "Network Engineer", "Database Administrator", "Site Reliability Engineer"
    ][i % 20],
    company: [
      "Oracle", "IBM", "Intel", "AMD", "Nvidia", "Samsung", "LG", "Sony", "Nintendo",
      "Shopify", "Atlassian", "Twilio", "Okta", "Snowflake", "Databricks", "Palantir",
      "SpaceX", "Tesla", "Rivian", "Lucid Motors", "Flipkart", "Swiggy", "Zomato"
    ][i % 23],
    type: i % 5 === 0 ? "Internship" : (i % 7 === 0 ? "Contract" : "Full-time") as any,
    mode: i % 3 === 0 ? "Remote" : (i % 2 === 0 ? "Hybrid" : "WFO") as any,
    location: ["Bangalore", "Pune", "Gurugram", "Remote", "London", "Berlin", "Singapore", "New York", "San Francisco"][i % 9],
    experience: `${(i % 10) + 1}+ Years`,
    salary: i % 5 === 0 ? "Stipend" : `₹${(i % 30) + 8}-${(i % 30) + 20} LPA`,
    description: "This is a unique opportunity to work with a leading team. You will be responsible for end-to-end delivery and innovation.",
    skills: ["Communication", "Problem Solving", "Teamwork", "Agile"], // Simplified skills
    category: ["Engineering", "Product", "Design", "Data", "Marketing", "Sales", "HR", "Finance", "Legal"][i % 9],
    postedDays: i % 30
  }))
];

export const jobs: Job[] = uniqueJobsList;

export const jobTypes = ["All Types", "Full-time", "Internship", "Contract"];
export const experienceLevels = ["All Levels", "Early Career", "Mid Level", "Senior", "Executive"];
export const jobLocations = ["All Locations", "Bangalore", "Pune", "Gurugram", "Remote", "International"];
