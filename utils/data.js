export const personalData = {
  name: "Shaksham Singh",
  profile: "/profile.svg",
  designation: "DevOps Engineer | Cloud Enthusiast | Automation Learner",
  description: "I'm a passionate DevOps engineer with expertise in building scalable, automated systems. I specialize in Kubernetes, Docker, Jenkins, Terraform, and cloud technologies. Currently exploring the latest in DevOps practices and cloud infrastructure.",
  email: "shakshamsingh1432@gmail.com",
  phone: "+91 7007459728",
  address: "Lucknow, Uttar Pradesh, India",
  github: "https://github.com/your-username",
  facebook: "https://www.facebook.com/your-profile",
  linkedIn: "https://www.linkedin.com/in/shaksham-singh-61b564341/",
  twitter: "https://twitter.com/your-handle",
  stackOverflow: "https://stackoverflow.com/users/your-profile",
  leetcode: "https://leetcode.com/your-profile",
  devUsername: "your-dev-username",
  resume: "https://drive.google.com/file/d/your-resume-link/view",
};

export const skills = [
  "Linux (RHEL/Rocky)",
  "Shell Scripting", 
  "Git & GitHub",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Nagios",
  "AWS",
  "GCP",
  "Python",
  "Bash"
];

export const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Tech Company",
    icon: "/company-icon.png",
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Administrator",
    company_name: "IT Services",
    icon: "/company-icon.png",
    iconBg: "#E6DEDD",
    date: "June 2023 - December 2023",
    points: [
      "Managed and maintained Linux servers and infrastructure.",
      "Implemented monitoring solutions using Prometheus and Grafana.",
      "Automated deployment processes using CI/CD pipelines.",
      "Provided technical support and troubleshooting for various systems.",
    ],
  },
  {
    title: "Virtual Internship",
    company_name: "Deloitte",
    icon: "/deloitte-icon.png",
    iconBg: "#86BC25",
    date: "December 2023 - January 2024",
    points: [
      "Participated in Deloitte's virtual internship program focusing on technology consulting and digital transformation.",
      "Gained hands-on experience with enterprise-level DevOps practices and cloud infrastructure.",
      "Collaborated with global teams on real-world projects and case studies.",
      "Developed understanding of consulting methodologies and client engagement strategies.",
    ],
  },
];

export const projects = [
  {
    name: "Restaurant Web Application",
    description:
      "Developed a full-stack restaurant management app with menu management, order tracking, and authentication. Containerized with Docker and deployed on a Kubernetes cluster using Jenkins for CI/CD. Implemented auto-scaling, load balancing, and blue-green deployments.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "kubernetes",
        color: "orange-text-gradient",
      },
      {
        name: "jenkins",
        color: "blue-text-gradient",
      },
    ],
    image: "/project1.png",
    source_code_link: "https://github.com/your-username/restaurant-app",
  },
  {
    name: "Automated CI/CD Pipeline for Django Apps",
    description:
      "Built a fully automated pipeline for Django applications using Jenkins. Pipeline handles build → test → Docker image creation → push to registry → Kubernetes deployment. Reduced deployment time by 70% with automated rollback on failures.",
    tags: [
      {
        name: "jenkins",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: "/project2.png",
    source_code_link: "https://github.com/your-username/django-cicd",
  },
  {
    name: "Infrastructure as Code (IaC) with Terraform & Ansible",
    description:
      "Automated provisioning of EC2 instances, security groups, and S3 buckets using Terraform. Configured servers using Ansible playbooks for consistent environment setup. Achieved reproducible and version-controlled infrastructure deployments.",
    tags: [
      {
        name: "terraform",
        color: "blue-text-gradient",
      },
      {
        name: "ansible",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: "/project3.png",
    source_code_link: "https://github.com/your-username/terraform-ansible",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Integral Innovative Sustainable Educational College, Lucknow",
    date: "Aug 2022 - July 2025",
    description: "Studied computer science fundamentals, programming, and software development.",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    description: "AWS Certified Cloud Practitioner - Foundational cloud computing knowledge",
    image: "/aws-cloud-practitioner.png",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    name: "Google Cloud Associate",
    description: "Google Cloud Associate Cloud Engineer - Cloud infrastructure and services",
    image: "/google-cloud-associate.png",
    link: "https://cloud.google.com/certification/cloud-engineer",
  },
  {
    name: "RHCE (EX294)",
    description: "Red Hat Certified Engineer — Ansible Automation",
    image: "/rhce.png",
    link: "https://www.redhat.com/en/services/certification/rhce",
  },
  {
    name: "Jenkins by Udemy",
    description: "Jenkins CI/CD Pipeline Masterclass - Complete CI/CD Pipeline",
    image: "/jenkins-udemy.png",
    link: "#",
  },
];
