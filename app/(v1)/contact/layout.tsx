import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the ValueTrustAI team. Tell us about your goals and we'll get back to you within one business day.",
  openGraph: {
    title: "Contact | ValueTrustAI",
    description: "Get in touch with the ValueTrustAI team. Tell us about your goals and we'll get back to you within one business day.",
    url: "https://valuetrustai.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
