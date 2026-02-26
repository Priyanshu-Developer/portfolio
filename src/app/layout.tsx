// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Script from "next/script";
import HeadSchema from "./HeadSchema";

const SITE_URL = "https://priyanshu-kumar-singh-portfolio.vercel.app";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // include what you need
  variable: "--font-poppins", // optional for CSS variable usage
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Priyanshu Kumar Singh | Full Stack Web Developer & Cybersecurity Specialist",
    template: "%s | Priyanshu Kumar Singh",
  },
  description:
    "Portfolio of Priyanshu Kumar Singh, a full stack web developer and cybersecurity specialist building secure, high-performance web applications with Next.js, TypeScript, and modern cloud tooling.",
  keywords: [
    "Priyanshu Kumar Singh",
    "best web developer",
    "best cybersecurity specialist",
    "full stack web developer portfolio",
    "cybersecurity portfolio",
    "secure web application developer",
    "Next.js developer portfolio",
    "TypeScript developer",
    "Rust developer",
    "penetration testing",
    "ethical hacking",
    "Malware Analysis",
    "network security engineer",
    "web application security",
    "security analyst",
    "freelance web developer",
    "software engineer portfolio",
    "Jain University MCA",
    "CompTIA Security+",
    "TryHackMe",
  ],
  authors: [
    {
      name: "Priyanshu Kumar Singh",
      url: "https://linkedin.com/in/priyanshu-infosec",
    },
  ],
  creator: "Priyanshu Kumar Singh",
  publisher: "Priyanshu Kumar Singh",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    title:
      "Priyanshu Kumar Singh | Full Stack Web Developer & Cybersecurity Specialist",
    description:
      "Explore projects in full stack development, secure software engineering, malware analysis, and penetration testing.",
    url: SITE_URL,
    siteName: "Priyanshu Kumar Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Kumar Singh - Web Developer and Cybersecurity Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kumar Singh | Web Developer & Cybersecurity Specialist",
    description:
      "Full stack web development and cybersecurity portfolio with production projects and security-focused engineering.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-5ZRN5MFS3B"
              async
            />
            <Script id="ga" >
              {`
             window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5ZRN5MFS3B');
          `}
            </Script>
          </>
        ) : null}
        
      </head>
      <body className="bg-black text-foreground min-h-screen">
        <HeadSchema />
        {children}
      </body>
    </html>
  );
}
