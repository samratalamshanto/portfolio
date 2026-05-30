export const EXPERIENCE = [
  {
    company: "Brain Station 23",
    location: "Dhaka, Bangladesh",
    period: "Jan 2026 — Present",
    title: "Senior Software Engineer",
    logo: "/assets/logo-bs23.svg",
    summary:
      "Building Banglalink's payment service provider (PSP) middleware and Zoober Pay's wallet platform. Day-to-day is Spring Boot, Kafka outbox, Redis idempotency, and a lot of integration contracts.",
    bullets: [
      "Contributed to Banglalink's PSP middleware integrating **Huawei Mobile Money 2.0** for P2M, P2P, bill payment, and mobile recharge flows.",
      "Developed event-driven payment services on **APISIX, Kafka outbox, Redis idempotency, and PostgreSQL** for reliable asynchronous transaction processing.",
      "Built backend services for **Zoober Pay** — eKYC onboarding, wallet management, card top-up, and AML screening integrations with Nuvei and ComplyAdvantage.",
    ],
    tags: ["Spring Boot", "Kafka", "APISIX", "Redis", "PostgreSQL", "Huawei MM 2.0"],
  },
  {
    company: "Red.Digital Limited",
    location: "Dhaka, Bangladesh",
    period: "May 2022 — Dec 2025",
    title: "Senior Software Engineer",
    logo: "/assets/logo-reddigital.svg",
    summary:
      "Telecom-scale backend work for Robi's Nextgen Loyalty platform and Smart Axiata's eCRM. Spring Boot, Kafka, RabbitMQ — built for throughput, fault tolerance, and operational sanity.",
    bullets: [
      "Contributed to **Robi's Nextgen Loyalty Platform** serving **60M+ subscribers** at a sustained peak of **1,200 TPS**.",
      "Developed Spring Boot microservices with **Kafka and RabbitMQ** for telecom order, notification, and workflow automation — cutting manual ops handling by ~40%.",
      "Built resilient services and fault-tolerant batch workflows for **Smart Axiata's eCRM** platform.",
      "Recognised with the **Spotlight Award (Q2 & Q3 2023)** and **Employee of the Month (Feb 2023)**.",
    ],
    tags: ["Spring Boot", "Kafka", "RabbitMQ", "PostgreSQL", "Telecom"],
  },
];
