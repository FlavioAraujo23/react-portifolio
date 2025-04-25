import { createClient } from "smtpexpress";

export const smtpexpressClient = createClient({
  projectId: import.meta.env.SMTP_EXPRESS_PROJECT_ID,
  projectSecret: import.meta.env.SMTP_EXPRESS_PROJECT_SECRET,
});
