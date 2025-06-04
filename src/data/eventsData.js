// This file contains the events data for the IndabaX Equatorial Guinea 2025 event.

const eventsData = [
  {
    id: 1,
    // icon: <Cpu className="text-green-600" />,
    title: "Tech Conference 2025",
    description:
      "Join the biggest annual gathering of developers, designers, and tech leaders. Keynotes from industry pioneers, hands-on coding sessions, and future-shaping panels await.",
    date: "June 15, 2025",
    time: "09:00 AM - 05:00 PM",
    location: "Johannesburg Convention Centre",
    organizer: "TechSA Foundation",
    barColor: "bg-green-500",
    image: "/hero2.jpg",
    speakers: [
      {
        name: "Dr. María Esono",
        title: "AI Researcher",
        img: "/speaker1placeholder.jpg",
        talkTitle: "Harnessing AI for Health in Africa",
        description:
          "Exploring how AI-driven diagnostics can transform healthcare access.",
      },
      {
        name: "Carlos Mba",
        title: "ML Engineer",
        img: "/speaker2placeholder.jpg",
        talkTitle: "Building Scalable ML Systems",
        description: "A deep dive into deploying machine learning at scale.",
      },
      {
        name: "Lucía Nguema",
        title: "Data Scientist",
        img: "/speaker3placeholder.jpg",
        talkTitle: "Data for Development",
        description:
          "How data science can support sustainable development goals.",
      },
      {
        name: "Miguel T.",
        title: "Graduate Student",
        img: "/speaker8placeholder.jpg",
        talkTitle: "Research in NLP",
        description:
          "Advancing African languages in natural language processing.",
      },
    ],
    schedule: [
      { time: "09:00 AM", activity: "Opening Ceremony" },
      {
        time: "09:30 AM",
        activity: "Keynote: Harnessing AI for Health - Dr. María Esono",
      },
      {
        time: "11:00 AM",
        activity: "Panel: Building Scalable ML Systems - Carlos Mba",
      },
      { time: "01:00 PM", activity: "Lunch Break" },
      {
        time: "02:00 PM",
        activity: "Workshop: Data for Development - Lucía Nguema",
      },
      { time: "04:00 PM", activity: "Talk: Research in NLP - Miguel T." },
    ],
  },
  {
    id: 2,
    // icon: <BrainCircuit className="text-green-600" />,
    title: "AI & ML Summit",
    description:
      "Dive deep into neural networks, generative models, and ethical AI. Engage with experts and researchers building the next generation of intelligent systems.",
    date: "July 20, 2025",
    time: "10:00 AM - 04:00 PM",
    location: "Cape Town Innovation Hub",
    organizer: "Africa AI Collective",
    barColor: "bg-blue-500",
    image: "/aichip.jpg",
    speakers: [
      {
        name: "Dr. María Esono",
        title: "AI Researcher",
        img: "/speaker1placeholder.jpg",
        talkTitle: "Harnessing AI for Health in Africa",
        description:
          "Exploring how AI-driven diagnostics can transform healthcare access.",
      },
      {
        name: "Carlos Mba",
        title: "ML Engineer",
        img: "/speaker2placeholder.jpg",
        talkTitle: "Building Scalable ML Systems",
        description: "A deep dive into deploying machine learning at scale.",
      },
      {
        name: "Daniela C.",
        title: "AI Policy Analyst",
        img: "/speaker5placeholder.jpg",
        talkTitle: "Ethics and AI Governance",
        description: "Navigating ethical AI deployment in African contexts.",
      },
      {
        name: "Francisco E.",
        title: "ML Intern",
        img: "/speaker6placeholder.jpg",
        talkTitle: "Getting Started with AI",
        description:
          "Lessons from an early-career journey into machine learning.",
      },
    ],
    schedule: [
      { time: "10:00 AM", activity: "Welcome and Introduction" },
      {
        time: "10:30 AM",
        activity: "Talk: Ethics and AI Governance - Daniela C.",
      },
      {
        time: "11:30 AM",
        activity: "Workshop: Building Scalable ML Systems - Carlos Mba",
      },
      { time: "01:00 PM", activity: "Lunch Break" },
      {
        time: "02:00 PM",
        activity: "Session: Getting Started with AI - Francisco E.",
      },
      {
        time: "03:00 PM",
        activity: "Keynote: Harnessing AI for Health - Dr. María Esono",
      },
    ],
  },
  {
    id: 3,
    // icon: <Laptop className="text-green-600" />,
    title: "Web Dev Workshop",
    description:
      "A one-day hands-on workshop covering React, performance optimization, and modern web design trends. Ideal for beginners and mid-level developers.",
    date: "August 10, 2025",
    time: "08:30 AM - 03:30 PM",
    location: "Durban Tech Campus",
    organizer: "Code4Africa",
    barColor: "bg-purple-500",
    image: "/hero11.jpg",
    speakers: [
      {
        name: "Alicia B.",
        title: "Software Engineer",
        img: "/speaker7placeholder.jpg",
        talkTitle: "AI in Everyday Apps",
        description: "Integrating AI features into consumer tech products.",
      },
      {
        name: "Francisco E.",
        title: "ML Intern",
        img: "/speaker6placeholder.jpg",
        talkTitle: "Getting Started with AI",
        description:
          "Lessons from an early-career journey into machine learning.",
      },
    ],
    schedule: [
      { time: "08:30 AM", activity: "Registration & Welcome" },
      { time: "09:00 AM", activity: "Workshop: React Essentials - Alicia B." },
      {
        time: "11:00 AM",
        activity: "Workshop: Getting Started with AI - Francisco E.",
      },
      { time: "12:30 PM", activity: "Lunch & Networking" },
      { time: "01:30 PM", activity: "Lab: AI in Everyday Apps - Alicia B." },
    ],
  },
  {
    id: 4,
    // icon: <Rocket className="text-green-600" />,
    title: "Startup Pitch Night",
    description:
      "Pitch your groundbreaking idea to investors, accelerators, and tech influencers. Network with other founders and receive expert feedback.",
    date: "September 5, 2025",
    time: "06:00 PM - 09:00 PM",
    location: "Pretoria Launch Lab",
    organizer: "StartupSA",
    barColor: "bg-orange-500",
    image: "/hero3.jpg",
    speakers: [
      {
        name: "Daniela C.",
        title: "AI Policy Analyst",
        img: "/speaker5placeholder.jpg",
        talkTitle: "Ethics and AI Governance",
        description: "Navigating ethical AI deployment in African contexts.",
      },
      {
        name: "Judith N.",
        title: "Research Assistant",
        img: "/speaker9placeholder.jpg",
        talkTitle: "Youth in AI Research",
        description: "The role of young minds in shaping Africa’s AI future.",
      },
    ],
    schedule: [
      { time: "06:00 PM", activity: "Welcome & Introduction" },
      {
        time: "06:15 PM",
        activity: "Keynote: Youth in AI Research - Judith N.",
      },
      {
        time: "06:45 PM",
        activity: "Talk: Ethics and AI Governance - Daniela C.",
      },
      { time: "07:15 PM", activity: "Startup Pitches Begin" },
      { time: "08:45 PM", activity: "Closing Remarks & Awards" },
    ],
  },
  {
    id: 5,
    // icon: <Cloud className="text-green-600" />,
    title: "Cloud Expo",
    description:
      "A full-day expo on cloud infrastructure, DevOps, and SaaS platforms. Workshops led by AWS, Azure, and Google Cloud architects.",
    date: "October 12, 2025",
    time: "09:00 AM - 05:00 PM",
    location: "Sandton Cloud Hall",
    organizer: "Cloud Builders Group",
    barColor: "bg-cyan-500",
    image: "/hero10.jpg",
    speakers: [
      {
        name: "Carlos Mba",
        title: "ML Engineer",
        img: "/speaker2placeholder.jpg",
        talkTitle: "Building Scalable ML Systems",
        description: "A deep dive into deploying machine learning at scale.",
      },
      {
        name: "Alicia B.",
        title: "Software Engineer",
        img: "/speaker7placeholder.jpg",
        talkTitle: "AI in Everyday Apps",
        description: "Integrating AI features into consumer tech products.",
      },
    ],
    schedule: [
      { time: "09:00 AM", activity: "Expo Opening" },
      { time: "09:30 AM", activity: "Cloud Systems at Scale - Carlos Mba" },
      {
        time: "11:00 AM",
        activity: "Hands-on: AI in SaaS Products - Alicia B.",
      },
      { time: "01:00 PM", activity: "Lunch Break & Demos" },
      { time: "02:00 PM", activity: "DevOps Panel Discussion" },
      { time: "04:00 PM", activity: "Networking & Closing" },
    ],
  },
  {
    id: 6,
    // icon: <Gamepad2 className="text-green-600" />,
    title: "GameDev Meetup",
    description:
      "Meet other indie developers, showcase your games, and attend workshops on Unity, Unreal Engine, and monetization strategies.",
    date: "November 2, 2025",
    time: "10:00 AM - 04:00 PM",
    location: "GeekZone, Port Elizabeth",
    organizer: "Game Africa",
    barColor: "bg-red-400",
    image: "/gamingai.jpg",
    speakers: [
      {
        name: "Pedro Abeso",
        title: "Robotics Expert",
        img: "/speaker4placeholder.jpg",
        talkTitle: "Robotics in Agriculture",
        description:
          "Bringing automation to small-scale farms in Equatorial Guinea.",
      },
      {
        name: "Judith N.",
        title: "Research Assistant",
        img: "/speaker9placeholder.jpg",
        talkTitle: "Youth in AI Research",
        description: "The role of young minds in shaping Africa’s AI future.",
      },
    ],
    schedule: [
      { time: "10:00 AM", activity: "Meet & Greet" },
      {
        time: "10:30 AM",
        activity: "Talk: Robotics in Agriculture - Pedro Abeso",
      },
      { time: "11:30 AM", activity: "Demo Hour: Indie Game Showcases" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM", activity: "Talk: Youth in AI Research - Judith N." },
      { time: "03:00 PM", activity: "Workshop: Unity Game Dev Basics" },
    ],
  },
];
export default eventsData;
