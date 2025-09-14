import type { ButtonVariantLike } from "../Button/Button.types";

export type LinkOrSubmit = "link" | "submit" | "button";

export interface NavButtonConfig {
  href?: string;
  label?: string;
  variant?: ButtonVariantLike;
  hidden?: boolean;
  disabled?: boolean;
  type?: LinkOrSubmit; // defaults: back/startAgain → link, next → submit
}

export interface FormNavButtonBarProps {
  back?: NavButtonConfig;
  startAgain?: NavButtonConfig;
  next?: NavButtonConfig;
  flipOrderOnMobile?: boolean; // default true: Next appears first (top) on mobile
  className?: string;
}
