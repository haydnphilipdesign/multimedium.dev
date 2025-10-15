import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, Ref } from "react";
import { cn } from "@/lib/utils";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  ref?: string | Ref<HTMLAnchorElement>;
};

function MDXLink({ href = "#", ...props }: AnchorProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const { ref: _ref, className, ...rest } = props;
  void _ref;

  if (isInternal) {
    return (
      <Link
        href={href}
        className={cn("font-medium text-brand underline-offset-4 hover:underline", className)}
        {...rest}
      />
    );
  }

  return (
    <a
      href={href}
      className={cn("font-medium text-brand underline-offset-4 hover:underline", className)}
      {...rest}
    />
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="scroll-m-20 font-display text-3xl font-bold tracking-tight" {...props} />,
  h2: (props) => <h2 className="mt-12 scroll-m-20 font-display text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-8 scroll-m-20 font-display text-xl font-semibold" {...props} />,
  p: (props) => <p className="mt-6 leading-relaxed text-ink text-base" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-2 pl-6 text-base text-ink" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-2 pl-6 text-base text-ink" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-4 border-brand/50 pl-6 italic text-ink" {...props} />
  ),
  a: MDXLink,
  code: ({ className, ...props }) => (
    <code className={cn("rounded bg-surface-muted px-1.5 py-0.5 text-sm text-ink", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-2xl border border-surface-muted bg-surface px-4 py-3 text-sm shadow-inner",
        className
      )}
      {...props}
    />
  )
};
