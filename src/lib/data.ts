export const siteConfig = {
  name: "Lenin Goud Athikam",
  title: "AI/ML Engineer & Data Scientist",
  email: "lathikam@mtu.edu",
  phone: "+1 (906) 275-8632",
  location: "Houghton, Michigan, USA",
  github: "https://github.com/leninathikam",
  linkedin: "https://www.linkedin.com/in/athikam-lenin",
  resumeUrl: "/resume.pdf",
  gaId: "G-X73LVN8XHW",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  title: string;
  slug: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI Council — Multi-Agent Collaboration Framework",
    slug: "ai-council",
    category: "LLM Agents",
    summary:
      "Framework where multiple AI models (Gemini, Claude, GPT, Ollama) collaborate through structured discussion modes with specialized roles.",
    problem:
      "Single-model AI responses lack the depth and reliability that comes from multi-perspective analysis, critique, and validation.",
    solution:
      "Built a multi-agent framework with specialized roles (Proposer, Critic, Corrector, Validator) supporting Round Robin, Debate, Deep Analysis, Code Review, and Executive discussion modes. Includes auto-fallback, circuit breaker protection, and token optimization.",
    results:
      "Reduced token usage by 40–70% through optimization. Supports 5 discussion modes across 4+ model providers. Rich CLI with minimal-config setup wizard.",
    stack: ["Python", "Multi-Agent", "Gemini", "Claude", "GPT", "Ollama"],
    github: "https://github.com/leninathikam/ai-council",
    featured: true,
  },
  {
    title: "AI-Powered Agentic Workflow",
    slug: "agentic-workflow",
    category: "LLM Agents",
    summary:
      "7 specialized agents that convert product specs into user stories, features, and engineering tasks.",
    problem:
      "Converting product specifications into structured engineering tasks requires manual decomposition across multiple roles — product managers, architects, and developers.",
    solution:
      "Built 7 reusable Python agent classes (spec analyzer, story writer, feature planner, task generator, reviewer, router, evaluator) that collaborate through a routing and evaluation pipeline. Piloted with an Email Router use case.",
    results:
      "End-to-end pipeline that processes specs into actionable tasks. Reusable agent architecture adaptable to other multi-step workflows. Demonstrated agent routing and evaluation in Email Router pilot.",
    stack: ["Python", "Multi-Agent", "Routing", "Evaluation"],
    github:
      "https://github.com/leninathikam/AI-Powered-Agentic-Workflow-for-Project-Management",
    featured: true,
  },
  {
    title: "UdaPlay — Game Industry Research Agent",
    slug: "udaplay",
    category: "LLM Agents",
    summary:
      "RAG research agent with retrieval, memory, tooling, and evaluation over 15+ game records.",
    problem:
      "Researching game industry data across multiple sources requires repetitive search, filtering, and synthesis that is slow and inconsistent.",
    solution:
      "Built a RAG-based research agent with a 12-module library covering ingestion, chunking, embedding, retrieval, memory, tool use, and response generation. Supports swappable vector DBs and embedding models.",
    results:
      "Full retrieval-augmented pipeline with measurable retrieval quality. Modular architecture allows swapping vector DBs, embedding models, and retrieval strategies independently.",
    stack: ["Python", "RAG", "Vector DB", "LangChain"],
    github:
      "https://github.com/leninathikam/UdaPlay---An-AI-Research-Agent-for-the-Video-Game-Industry",
    featured: true,
  },
  {
    title: "YouTube Comment Sentiment Analysis",
    slug: "youtube-sentiment",
    category: "NLP",
    summary:
      "Chrome extension for real-time YouTube comment sentiment with full ML pipeline.",
    problem:
      "Content creators and marketers need real-time sentiment analysis of YouTube comments without leaving the browser.",
    solution:
      "Built a Chrome extension with a complete ML pipeline: training data collection, text preprocessing, scikit-learn model training, and real-time prediction on live YouTube pages.",
    results:
      "Working Chrome extension that classifies comments as positive/negative/neutral in real-time. End-to-end from model training to browser deployment — demonstrates full-stack ML capability.",
    stack: ["Python", "scikit-learn", "Chrome Extension", "NLP"],
    github:
      "https://github.com/leninathikam/youtube_comment_analysis_chrome_plugin",
    featured: true,
  },
  {
    title: "Beaver's Choice Sales Team",
    slug: "beavers-choice",
    category: "LLM Agents",
    summary:
      "4-agent sales workflow processing 20 quote requests with SQLite-backed inventory.",
    problem:
      "Manual sales quoting is slow and error-prone, especially when handling bulk pricing tiers and inventory tracking across multiple product lines.",
    solution:
      "Designed a 4-agent sales workflow using smolagents: lead qualifier, inventory checker, pricing engine, and quote generator. Backed by SQLite for real-time inventory and transaction tracking.",
    results:
      "Processed 20 quote requests with 5–15% bulk discounts applied automatically. $48.7K in assets tracked. Demonstrated multi-agent coordination with persistent state.",
    stack: ["Python", "smolagents", "SQLite", "Multi-Agent"],
    github:
      "https://github.com/leninathikam/The-Beaver-s-Choice-Paper-Company-Sales-Team-",
    featured: false,
  },
  {
    title: "Spotify Hybrid Recommender",
    slug: "spotify-recommender",
    category: "Machine Learning",
    summary:
      "Hybrid music recommender combining collaborative and content-based filtering with Streamlit UI.",
    problem:
      "Single-approach recommenders miss relevant suggestions because they only capture one dimension of user preference.",
    solution:
      "Built a hybrid recommender combining collaborative filtering and content-based methods. Includes a Streamlit interface, pytest test suite, and deployment-ready artifact packaging.",
    results:
      "Improved recommendation relevance by combining multiple filtering strategies. Production-ready with automated tests, UI, and deployable artifacts.",
    stack: ["Python", "Streamlit", "Hybrid Filtering", "pytest"],
    github:
      "https://github.com/leninathikam/spotify-hybrid-recommender-system",
    featured: false,
  },
  {
    title: "Swiggy Delivery Time Prediction",
    slug: "swiggy-prediction",
    category: "Machine Learning",
    summary:
      "Predicts delivery time with 10+ notebooks, EDA, and tuned ensemble models.",
    problem:
      "Inaccurate delivery time estimates lead to poor customer experience and inefficient driver allocation.",
    solution:
      "Comprehensive ML pipeline with 10+ notebooks covering EDA, feature engineering, and model tuning. Compared LightGBM, Random Forest, and stacking ensembles for optimal prediction accuracy.",
    results:
      "Tuned ensemble models for delivery time prediction in minutes. Thorough EDA and feature engineering across 10+ notebooks demonstrate rigorous ML methodology.",
    stack: ["Python", "LightGBM", "Random Forest", "Stacking"],
    github: "https://github.com/leninathikam/swiggy-delivery-time-prediction",
    featured: false,
  },
  {
    title: "Automated ETL Pipeline",
    slug: "etl-pipeline",
    category: "Data Engineering",
    summary:
      "Automated ETL for repeatable ingestion, cleaning, and reporting workflows.",
    problem:
      "Manual data processing workflows are slow, inconsistent, and create bottlenecks in reporting timelines.",
    solution:
      "Built an automated ETL pipeline handling repeatable data ingestion, cleaning, transformation, and reporting. Designed for reproducibility and minimal manual intervention.",
    results:
      "Automated previously manual reporting workflows. Repeatable pipeline reduced data preparation time and improved consistency across reporting cycles.",
    stack: ["Python", "SQL", "ETL", "Automation"],
    github: "https://github.com/leninathikam/etl-pipeline-automation",
    featured: false,
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "R", "JavaScript"],
  },
  {
    title: "Machine Learning",
    skills: [
      "scikit-learn",
      "LightGBM",
      "XGBoost",
      "Random Forest",
      "Feature Engineering",
    ],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Neural Networks", "CNNs"],
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      "LangChain",
      "OpenAI APIs",
      "RAG Pipelines",
      "smolagents",
      "Vector Databases",
      "Prompt Engineering",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Data Engineering",
    skills: ["Pandas", "NumPy", "ETL Pipelines", "Data Modeling", "Apache Spark"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Linux"],
  },
  {
    title: "Visualization & BI",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Streamlit", "Flask", "pytest", "VS Code"],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "Research Assistant",
    company: "Michigan Technological University",
    period: "Jan 2025 — Apr 2026",
    bullets: [
      "Designed and built multi-agent AI systems with structured collaboration modes (debate, deep analysis, code review) across Gemini, Claude, and GPT models.",
      "Developed RAG pipelines with modular retrieval, embedding, and evaluation components — enabling measurable comparison of retrieval strategies.",
      "Published 5+ open-source AI/ML projects on GitHub covering agentic workflows, NLP, and recommendation systems.",
    ],
    tech: ["Python", "LangChain", "RAG", "Multi-Agent", "Vector DBs"],
  },
  {
    role: "Computational Intelligence Teaching Assistant",
    company: "Michigan Technological University",
    period: "Aug 2025 — Dec 2025",
    bullets: [
      "Assisted instruction for graduate-level Computational Intelligence course covering neural networks, evolutionary algorithms, and fuzzy systems.",
      "Graded assignments and provided detailed feedback to 30+ students on ML model implementations and algorithm analysis.",
      "Held weekly office hours to support students with Python-based ML project development and debugging.",
    ],
    tech: ["Python", "Neural Networks", "Evolutionary Algorithms"],
  },
  {
    role: "Data Scientist",
    company: "YBI Foundation",
    period: "Nov 2022 — Dec 2022",
    bullets: [
      "Built predictive models using Python that improved forecast accuracy by 15%, directly guiding business planning decisions.",
      "Automated reporting pipelines with Pandas and Matplotlib, saving the team 10 hours per week on manual analysis.",
      "Developed an NLP-powered music recommendation system using TF-IDF vectorization and cosine similarity for content-based relevance scoring.",
    ],
    tech: ["Python", "NLP", "scikit-learn", "TF-IDF", "Pandas"],
  },
  {
    role: "Data Analyst",
    company: "Edulyt India",
    period: "Dec 2023 — Mar 2024",
    bullets: [
      "Engineered automated SQL/Python ETL pipelines that replaced manual Excel-based reporting, saving 20+ hours per month on data cleaning workflows.",
      "Designed KPI dashboards adopted by 50+ users for weekly stakeholder reviews, enabling data-driven operational decisions.",
      "Built reusable data transformation modules that standardized ingestion-to-reporting workflows across multiple data sources.",
    ],
    tech: ["Python", "SQL", "ETL", "KPI Dashboards", "Power BI"],
  },
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  coursework?: string[];
}

export const education: Education[] = [
  {
    degree: "Master of Science in Data Science",
    institution: "Michigan Technological University",
    location: "Houghton, Michigan",
    period: "Aug 2024 — Apr 2026",
    details: "",
    coursework: [
      "Big Data Analytics",
      "Computational Intelligence",
      "Regression Analysis",
      "Marketing Data Analytics",
      "Intro to Data Science",
    ],
  },
  {
    degree: "Bachelor of Technology in Artificial Intelligence",
    institution: "Parul University",
    location: "India",
    period: "2020 — 2024",
    details: "GPA: 8.34 / 10",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  courses: string;
}

export const certifications: Certification[] = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    date: "June 2023",
    courses:
      "12-course program covering Python, SQL, ML, data visualization, and statistical analysis with capstone projects.",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google via Coursera",
    date: "2023",
    courses:
      "8-course program in data cleaning, Tableau/R visualization, SQL, and stakeholder-ready analytics.",
  },
  {
    title: "DataCamp Associate Data Scientist",
    issuer: "DataCamp",
    date: "2023",
    courses:
      "Certification covering Python programming, data manipulation, statistical analysis, and machine learning fundamentals.",
  },
];
