// app/layout.tsx
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import HeadSchema from "./HeadSchema";
import Script from "next/script";

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

export const metadata = {
  metadataBase: new URL("https://priyanshu-kumar-singh-portfolio.vercel.app"),
  title: {
    default: "Priyanshu Kumar Singh | Cybersecurity Researcher & Developer",
    template: "%s | Priyanshu Kumar Singh"
  },
  description: "Cybersecurity researcher and software developer specializing in threat management, Rust, and Next.js. MCA student at Jain University.",
  keywords: [
    "Priyanshu Kumar Singh",
    "Cybersecurity Researcher",
    "Rust Developer",
    "Next.js Developer",
    "Security Analyst",
    "Penetration Testing",
    "Network Security",
    "CompTIA Security+",
    "TryHackMe",
    "Malware Analysis",
    "Ethical Hacking"
  ],
  authors: [{ name: "Priyanshu Kumar Singh", url: "https://linkedin.com/in/priyanshu-infosec" }],
  creator: "Priyanshu Kumar Singh",
  
  // ✅ Add robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ✅ Add verification tags
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  
  openGraph: {
    title: "Priyanshu Kumar Singh | Cybersecurity Researcher & Developer",
    description: "Explore my cybersecurity portfolio and software development journey. Discover my work in malware analysis, penetration testing, and secure software design.",
    url: "https://priyanshu-kumar-singh-portfolio.vercel.app",
    siteName: "Priyanshu Kumar Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Kumar Singh - Cybersecurity Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  
  // ✅ Add Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kumar Singh | Cybersecurity Researcher & Developer",
    description: "Cybersecurity researcher specializing in threat management, Rust, and Next.js development.",
    creator: "@your_twitter_handle",
    images: ["/og-image.png"],
  },
  
  // ✅ Add alternate languages if applicable
  alternates: {
    canonical: "https://priyanshu-kumar-singh-portfolio.vercel.app",
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
      className={`${poppins.variable} ${roboto.variable} dark`} // ✅ Always dark
      suppressHydrationWarning
    >
      <head>
        {/* ✅ Canonical link (important for SEO) */}
        <link
          rel="canonical"
          href="https://priyanshu-kumar-singh-portfolio.vercel.app/"
        />

        {/* ✅ Google Analytics scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body className=" bg-black  text-foreground min-h-screen">
        <HeadSchema />
        {children}
      </body>
    </html>
  );
}
