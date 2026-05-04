import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  chapter: z.number(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  readingTime: z.string(),
  topics: z.array(z.string()),
});

const sreSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  chapter: z.number(),
  level: z.enum(["beginner", "intermediate", "advanced", "mastery"]),
  readingTime: z.string(),
  topics: z.array(z.string()),
});

const make = (slug: string, schema = baseSchema) =>
  defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: `./src/content/${slug}` }),
    schema,
  });

export const collections = {
  // existing
  chapters: make("chapters"),
  dsa: make("dsa"),
  networking: make("networking"),
  "db-internals": make("db-internals"),
  devops: make("devops"),
  "api-design": make("api-design"),
  frontend: make("frontend"),
  golang: make("golang"),
  sre: make("sre", sreSchema),

  // path: foundations
  "linux-vps": make("linux-vps"),
  "web-server": make("web-server"),
  "tls-certs": make("tls-certs"),

  // path: APIs
  graphql: make("graphql"),
  grpc: make("grpc"),
  websockets: make("websockets"),
  webhooks: make("webhooks"),

  // path: data + auth
  "data-modeling": make("data-modeling"),
  "auth-security": make("auth-security"),
  "api-gateway": make("api-gateway"),

  // path: caching, jobs, messaging
  caching: make("caching"),
  "background-jobs": make("background-jobs"),
  messaging: make("messaging"),
  "event-driven": make("event-driven"),

  // path: storage + search
  storage: make("storage"),
  search: make("search"),

  // path: scaling
  "load-balancing": make("load-balancing"),
  "horizontal-scaling": make("horizontal-scaling"),
  "replication-sharding": make("replication-sharding"),

  // path: ops
  observability: make("observability"),
  containers: make("containers"),
  orchestration: make("orchestration"),
  iac: make("iac"),

  // path: quality + reliability
  testing: make("testing"),
  performance: make("performance"),
  "disaster-recovery": make("disaster-recovery"),
  "capacity-cost": make("capacity-cost"),
  microservices: make("microservices"),
  "chaos-resilience": make("chaos-resilience"),
};
