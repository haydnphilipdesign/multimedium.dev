"use server";

import { z } from "zod";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
};

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  tag: z.string().optional(),
  honeypot: z.string().optional()
});

export async function subscribeToNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
    tag: formData.get("tag"),
    honeypot: formData.get("company")
  });

  if (!parsed.success || parsed.data.honeypot) {
    return {
      status: "error",
      message: parsed.error?.issues?.[0]?.message ?? "Please use a valid email."
    };
  }

  try {
    const { email, tag } = parsed.data;
    console.log("Newsletter opt-in:", email, tag);

    return {
      status: "success",
      message: "Thanks! Check your inbox for a confirmation email."
    };
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return {
      status: "error",
      message: "We couldn't add you right now. Try again or email haydn@multimedium.dev."
    };
  }
}
