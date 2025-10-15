"use client";

import { useFormState } from "react-dom";
import { subscribeToNewsletter, type NewsletterState } from "@/app/(marketing)/blog/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const initialState: NewsletterState = {
  status: "idle",
  message: ""
};

export function NewsletterSignup({ tag }: { tag?: string }) {
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="newsletter-email">Email address</Label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {tag ? <input type="hidden" name="tag" value={tag} /> : null}
      <Button type="submit" className="w-full" size="lg">
        Join the newsletter
      </Button>
      {state.message ? (
        <p
          className={state.status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
