"use server";

import { z } from "zod";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  projectType: z.string().min(2, "Select a project type."),
  website: z.preprocess(
    (value) => (typeof value === "string" && value.trim().length === 0 ? undefined : value),
    z.string().url("Enter a valid URL (include https://).").optional()
  ),
  budget: z.preprocess(
    (value) => (typeof value === "string" && value.trim().length === 0 ? undefined : value),
    z.string().optional()
  ),
  timeline: z.preprocess(
    (value) => (typeof value === "string" && value.trim().length === 0 ? undefined : value),
    z.string().optional()
  ),
  goals: z.string().min(10, "Share a bit more about your goals."),
  company: z.string().optional()
});

export async function submitContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData);
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0]?.toString() ?? "form";
      errors[field] = issue.message;
    });
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors
    };
  }

  if (parsed.data.company) {
    return {
      status: "success",
      message: "Thanks! Haydn will reach out within one business day.",
      errors: {}
    };
  }

  try {
    const { company: _company, ...payload } = parsed.data;
    void _company;

    // TODO: integrate with Resend/Nodemailer
    console.log("New inquiry received:", payload);

    return {
      status: "success",
      message: "Thanks! Haydn will reach out within one business day.",
      errors: {}
    };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      status: "error",
      message: "We couldn't send your message. Please try again or call/text 570-994-6186."
    };
  }
}
