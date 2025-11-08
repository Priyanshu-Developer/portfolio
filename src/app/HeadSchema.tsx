"use client";
import Script from "next/script";

export default function HeadSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Priyanshu Kumar Singh",
    jobTitle: "Cybersecurity Researcher & Software Developer",
    url: "https://priyanshu-kumar-singh-portfolio.vercel.app/",
    image: "https://priyanshu-kumar-singh-portfolio.vercel.app/profile.jpg",
    sameAs: [
      "https://linkedin.com/in/priyanshu-infosec",
      "https://tryhackme.com/p/Priyanshu2002",
      "https://www.credly.com/users/priyanshu-kumar-singh.d86f6983",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Jain University, Bangalore",
    },
    knowsAbout: [
      "Cybersecurity",
      "Network Security",
      "Rust",
      "Next.js",
      "Penetration Testing",
      "Malware Analysis",
      "Full Stack Development",
      "Web Application Security",
      "CompTIA Security+",
      "Ethical Hacking",
      "Information Security",
      
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
