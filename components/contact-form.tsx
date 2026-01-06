"use client";

import Link from "next/link";
import { useId } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { ChevronRight } from "lucide-react";
import { submitContactForm, type FormState } from "@/app/(marketing)/contact/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const initialState: FormState = {
  status: "idle",
  message: "",
  errors: {}
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-500">{message}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="self-start" disabled={pending}>
      {pending ? "Sending..." : "Send inquiry"}
      <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const projectTypeId = useId();
  const websiteId = useId();
  const budgetId = useId();
  const timelineId = useId();

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "success" && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-200">
          {state.message}
        </div>
      )}
      {state.status === "error" && state.message && (
        <div className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-200">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
          <Input id="name" name="name" placeholder="Your name" autoComplete="name" required />
          <FieldError message={state.errors?.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={websiteId}>Current website (optional)</Label>
        <Input id={websiteId} name="website" placeholder="https://example.com" inputMode="url" />
        <FieldError message={state.errors?.website} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={projectTypeId}>Project Type <span className="text-red-500">*</span></Label>
          <select
            id={projectTypeId}
            name="projectType"
            defaultValue=""
            required
            className={cn(
              "h-11 w-full rounded-xl border border-surface-muted bg-surface px-4 text-sm text-ink placeholder:text-ink-subtle/70",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            )}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="smb-website">SMB Website Build or Redesign</option>
            <option value="hoa-website">HOA / Community Website</option>
            <option value="marketing-seo">Marketing & SEO Engagement</option>
            <option value="ai-integration">AI / Automation Project</option>
            <option value="other">Other (Tell me more)</option>
          </select>
          <FieldError message={state.errors?.projectType} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={budgetId}>Budget Guidance</Label>
          <select
            id={budgetId}
            name="budget"
            defaultValue=""
            className={cn(
              "h-11 w-full rounded-xl border border-surface-muted bg-surface px-4 text-sm text-ink placeholder:text-ink-subtle/70",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            )}
          >
            <option value="">Choose a range</option>
            <option value="subscription">Subscription (under $500 upfront)</option>
            <option value="500-3k">$500 - $3,000</option>
            <option value="3k-8k">$3,000 - $8,000</option>
            <option value="8k-plus">$8,000+</option>
          </select>
          <FieldError message={state.errors?.budget} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={timelineId}>Ideal Timeline</Label>
        <select
          id={timelineId}
          name="timeline"
          defaultValue=""
          className={cn(
            "h-11 w-full rounded-xl border border-surface-muted bg-surface px-4 text-sm text-ink placeholder:text-ink-subtle/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          )}
        >
          <option value="">When are you hoping to launch?</option>
          <option value="rush">Rush (0-4 weeks)</option>
          <option value="standard">Standard (1-3 months)</option>
          <option value="flexible">Flexible / exploring</option>
        </select>
        <FieldError message={state.errors?.timeline} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goals">Goals & Context <span className="text-red-500">*</span></Label>
        <Textarea
          id="goals"
          name="goals"
          placeholder="Tell me about your organization, the challenge, and the outcomes that matter most."
          rows={6}
          required
        />
        <FieldError message={state.errors?.goals} />
      </div>

      <div className="hidden" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" autoComplete="off" tabIndex={-1} />
      </div>

      <SubmitButton />
      <p className="text-xs text-ink-subtle">
        By submitting, you agree to the
        {" "}
        <Link href="/legal/privacy" className="underline">
          privacy policy
        </Link>
        {" "}
        and understand emails will come from {siteConfig.email}.
      </p>
    </form>
  );
}
