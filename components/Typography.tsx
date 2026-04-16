import React from "react";

const variants = {
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  h5: "type-h5",
  h6: "type-h6",
  p: "type-p",
} as const;

export type Variant = keyof typeof variants;

const tags: Record<Variant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
};

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export default function Typography({ variant, children, className }: TypographyProps) {
  const Tag = tags[variant];
  const classes = [variants[variant], className].filter(Boolean).join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
