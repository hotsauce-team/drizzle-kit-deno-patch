
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle-pull",
  dialect: "sqlite",
  dbCredentials: {
    url: "file:./data-push.db",
  },
});
