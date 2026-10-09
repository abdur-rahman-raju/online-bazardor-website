import { createAuthClient } from "better-auth/react";

// baseURL না দিলে একই ডোমেইন ব্যবহার হয় (localhost ও Vercel দুটোতেই কাজ করবে)
export const authClient = createAuthClient();
