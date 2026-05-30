// URL for the "more projects" CTA below the curated list. Points to the
// GitHub repositories tab — change here to repoint or hide (set to null).
export const MORE_PROJECTS_URL = "https://github.com/samratalamshanto?tab=repositories";

// `index` (P-01, P-02, …) is computed from array position at render time so
// adding / reordering projects doesn't need manual renumbering.
const RAW_PROJECTS = [
  {
    title: "Event-Driven E-Commerce Platform",
    summary:
      "Order, payment, and inventory services coordinated through a SAGA so a failure at any step compensates instead of leaving money or stock in limbo. Services talk over Kafka rather than direct calls, an API Gateway fronts routing, and Resilience4j circuit breakers contain downstream failures — modelled on the resilience a payment system actually needs.",
    tags: ["Spring Boot", "Kafka", "Docker", "Resilience4j", "Micrometer"],
    image: "/assets/project-ecommerce.svg",
    link: "https://github.com/samratalamshanto/e-commerce-website-microservice-docker",
  },
  {
    title: "Banking System",
    summary:
      "Monolithic and microservices implementations of a banking core — transaction isolation, distributed consistency, authentication, and event-driven workflows. A study in moving from one shape to the other safely.",
    tags: ["Spring Boot", "Kafka", "Spring Security"],
    image: "/assets/project-banking.svg",
    link: "https://github.com/samratalamshanto?tab=repositories&q=Banking-Mangment-System&type=source",
  },
  {
    title: "REST API in Go",
    summary:
      "A clean-architecture REST API for student, teacher, and course management with a layered service design. Written to feel idiomatic in Go, not transliterated from Java.",
    tags: ["Go", "Gin", "PostgreSQL", "Docker"],
    image: "/assets/project-goapi.svg",
    link: "https://github.com/samratalamshanto/go_student_management_rest",
  },
];

export const PROJECTS = RAW_PROJECTS.map((p, i) => ({
  ...p,
  index: `P-${String(i + 1).padStart(2, "0")}`,
}));
