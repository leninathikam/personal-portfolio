export const siteConfig = {
  name: "Lenin Goud Athikam",
  title: "AI/ML Engineer & Data Scientist",
  email: "leningoudzzz@gmail.com",
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
  { label: "GitHub", href: "#github" },
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
  architecture: string[];
  metrics: string[];
  role: string;
  stack: string[];
  github: string;
  demo?: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Digital Twin",
    slug: "ai-digital-twin",
    category: "LLM Agents",
    summary:
      "A personal AI digital twin that answers questions about my background using RAG and notifies me when someone wants to connect.",
    problem:
      "Recruiters and collaborators visiting a portfolio can't get instant, conversational answers about a candidate's background, skills, and projects.",
    solution:
      "Built a production-ready conversational digital twin by integrating LLMs, contextual memory, and RAG pipelines with ChromaDB vector search and optimized chunking strategies. Deployed on Hugging Face Spaces with real-time inference and API integration.",
    results:
      "Live conversational AI with scalable interaction workflows deployed to production. End-to-end system covering prompt engineering, tokenization, API cost management, and real-time inference.",
    architecture: [
      "Ingest resume, background & project content",
      "Chunk and embed into ChromaDB vector store",
      "Retrieve relevant context per visitor question (RAG)",
      "LLM generates a conversational, memory-aware answer",
      "Tool call sends a notification when a visitor wants to connect",
      "Served via API on Hugging Face Spaces",
    ],
    metrics: ["Live in production", "Real-time inference", "RAG + tool calling"],
    role: "Solo project",
    stack: ["Python", "LangChain", "ChromaDB", "Hugging Face", "RAG", "Tool Calling"],
    github: "https://github.com/leninathikam",
    demo: "https://huggingface.co/spaces/Leningoud/digital-twin",
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
      "Designed autonomous agent collaboration and task orchestration using CrewAI and LangChain. Built specialized AI agents for requirement analysis, task planning, progress tracking, and report generation with memory-aware communication and tool calling.",
    results:
      "End-to-end multi-agent workflow that reduces manual coordination effort. Autonomous agents handle requirement analysis through report generation with memory-aware communication.",
    architecture: [
      "Product brief goes to an Action Planning Agent that breaks it into steps",
      "A Routing Agent (embedding-similarity based) dispatches each step",
      "Specialist agents (Product Manager, Program Manager, Dev Engineer) execute their step",
      "Each specialist is wrapped in an evaluator-optimizer loop for format/content correction",
      "Outputs are assembled into user stories, features, and engineering tasks",
    ],
    metrics: ["7 specialized agents", "Evaluator-optimizer QA loop", "Fully autonomous pipeline"],
    role: "Solo project",
    stack: ["Python", "CrewAI", "LangChain", "OpenAI API"],
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
    architecture: [
      "Game catalog (15+ records) is chunked and embedded into a vector store",
      "User query is embedded and matched against the catalog (retrieval)",
      "An LLM-as-judge evaluates whether retrieval was good enough to answer",
      "On weak retrieval, the agent falls back to live web search",
      "Response generation module composes the final grounded answer",
      "Served through a Streamlit chat demo",
    ],
    metrics: ["15+ game records indexed", "12-module RAG library", "Swappable vector DB / embeddings"],
    role: "Solo project",
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
      "NLP sentiment classification achieving 87% accuracy across 10K+ YouTube comments. Real-time Chrome extension integrated with Flask backend for automated comment analysis.",
    architecture: [
      "Collect and label training comments",
      "Preprocess text (cleaning, tokenization, vectorization)",
      "Train and evaluate a scikit-learn classification model",
      "Serve predictions through a Flask backend API",
      "Chrome extension calls the API and overlays sentiment on live YouTube pages",
    ],
    metrics: ["87% accuracy", "10K+ comments analyzed", "Real-time in-browser predictions"],
    role: "Solo project",
    stack: ["Python", "scikit-learn", "Chrome Extension", "NLP"],
    github:
      "https://github.com/leninathikam/youtube_comment_analysis_chrome_plugin",
    featured: true,
  },
  {
    title: "Multi-Agent Inventory & Quotation System",
    slug: "multi-agent-inventory",
    category: "LLM Agents",
    summary:
      "Multi-agent sales and inventory management system for inquiry handling, quote generation, and order fulfillment.",
    problem:
      "Manual sales quoting is slow and error-prone, especially when handling pricing tiers, inventory validation, and supplier estimation across multiple product lines.",
    solution:
      "Built an orchestrator agent coordinating specialized agents for pricing, inventory validation, and supplier estimation. SQLite-based tools enable real-time fulfillment updates across the pipeline.",
    results:
      "Improved operational efficiency through automated customer inquiry handling, quote generation, and order fulfillment with real-time inventory tracking.",
    architecture: [
      "Free-text customer order comes in to an Orchestrator agent",
      "Inventory Agent checks stock against a SQLite catalog",
      "Quoting Agent prices the order with bulk-discount rules",
      "Sales Agent finalizes the sale and updates inventory/financials",
      "Orchestrator returns the final quote/confirmation to the customer",
    ],
    metrics: ["3-agent orchestration", "Real-time inventory tracking", "Automated quote-to-fulfillment"],
    role: "Solo project",
    stack: ["Python", "Agentic AI", "SQLite", "Multi-Agent Systems"],
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
      "Improved playlist recommendation precision by 22% through hybrid filtering with similarity-based ranking. Production-ready with automated tests, interactive Streamlit UI, and deployable artifacts.",
    architecture: [
      "Clean raw track/listening data",
      "Content-based branch: TF-IDF tags + audio features -> cosine similarity",
      "Collaborative branch: sparse track-user play-count matrix -> cosine similarity",
      "Hybrid layer blends both similarity scores with a tunable weight",
      "Streamlit UI serves ranked recommendations with a diversity slider",
    ],
    metrics: ["+22% recommendation precision", "pytest test suite", "Deployable Streamlit app"],
    role: "Solo project",
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
      "Reduced prediction RMSE by 15% with tuned Gradient Boosting and XGBoost models. Optimized pipeline reduced inference latency by 25%.",
    architecture: [
      "DVC pipeline stage: clean raw delivery data",
      "Split into train/test sets",
      "Preprocess and engineer features",
      "Train Random Forest + LightGBM, stack with a Linear Regression meta-model",
      "Evaluate and register the best model (MLflow/DagsHub tracked)",
      "Serve predictions through a FastAPI endpoint",
    ],
    metrics: ["-15% prediction RMSE", "-25% inference latency", "MLflow-tracked experiments"],
    role: "Solo project",
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
    architecture: [
      "Extract data from source systems on a schedule",
      "Clean and transform records into a consistent schema",
      "Load into the target store",
      "Generate reports with minimal manual intervention",
    ],
    metrics: ["Fully automated pipeline", "Reduced reporting turnaround", "Reproducible by design"],
    role: "Solo project",
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
    skills: ["Python", "SQL", "R"],
  },
  {
    title: "AI Product Development",
    skills: [
      "RAG System Design",
      "Prompt Engineering",
      "Context Engineering",
      "Tool Calling",
      "AI Agents",
      "Multi-Agent Systems",
      "MCP",
      "A2A",
    ],
  },
  {
    title: "Generative AI & LLM Frameworks",
    skills: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "OpenAI API",
      "Hugging Face Transformers",
      "NLP",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "scikit-learn",
      "XGBoost",
      "PyTorch",
      "TensorFlow",
      "Feature Engineering",
      "Model Evaluation",
      "Predictive Modeling",
    ],
  },
  {
    title: "Vector Databases & Retrieval",
    skills: ["ChromaDB", "FAISS", "Semantic Retrieval", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "LLM Evaluation & MLOps",
    skills: ["LangSmith", "Ragas", "Prompt Evaluation", "LLM Tracing", "Model Deployment"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["AWS (EC2, Lambda, SageMaker)", "Hugging Face Spaces", "Docker", "CI/CD", "REST APIs"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["FastAPI", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Power BI", "Git/GitHub"],
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
    period: "Jan 2026 — Apr 2026",
    bullets: [
      "Strengthened RAG system security by researching Secure RAG architectures and designing defensive validation mechanisms against prompt injection and jailbreak attacks.",
      "Investigated adversarial attack vectors — including prompt injection, retrieval poisoning, and unauthorized information disclosure — to inform safer LLM deployment practices.",
    ],
    tech: ["Python", "RAG", "LLM Security", "Adversarial ML", "LangChain"],
  },
  {
    role: "Computational Intelligence Teaching Assistant",
    company: "Michigan Technological University",
    period: "Aug 2025 — Dec 2025",
    bullets: [
      "Guided 70+ students through machine learning, neural network, transformer, and large language model concepts, strengthening their applied AI development skills.",
      "Delivered technical mentorship on model implementation and evaluation methodologies, supporting coursework, grading, and consistent learning outcomes.",
    ],
    tech: ["Python", "Neural Networks", "Transformers", "LLMs"],
  },
  {
    role: "Data Scientist Intern",
    company: "YBI Foundation",
    period: "Dec 2023 — Mar 2024",
    bullets: [
      "Improved forecasting accuracy by 15% over baseline approaches by building and optimizing predictive machine learning models.",
      "Reduced manual reporting effort by 10+ hours per week by automating data analysis and reporting pipelines with Pandas and Matplotlib.",
      "Developed visual dashboards and reports communicating analytical insights to both technical and non-technical stakeholders.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Predictive Modeling"],
  },
  {
    role: "Data Analyst Intern",
    company: "Edulyt India (Airkrit India)",
    period: "Aug 2023 — Sep 2023",
    bullets: [
      "Analyzed 100K+ student engagement records using SQL and Excel, improving reporting accuracy and operational analytics.",
      "Built interactive Power BI dashboards for KPI tracking, trend analysis, and stakeholder reporting, enabling faster data-driven decisions.",
      "Contributed to a 12% improvement in student retention by identifying key behavioral engagement patterns.",
    ],
    tech: ["SQL", "Excel", "Power BI", "Data Analysis"],
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
    degree: "Bachelor of Technology in Computer Science (AI Specialization)",
    institution: "Parul University",
    location: "India",
    period: "2020 — May 2024",
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
