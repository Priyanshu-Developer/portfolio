export default function HeadSchema() {
  const siteUrl = "https://priyanshu-kumar-singh-portfolio.vercel.app";
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const pageId = `${siteUrl}/#webpage`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Priyanshu Kumar Singh",
        url: `${siteUrl}/`,
        image: `${siteUrl}/og-image.png`,
        jobTitle: "Full Stack Web Developer & Cybersecurity Specialist",
        description:
          "Software engineer focused on secure web development, cybersecurity research, and scalable product engineering.",
        sameAs: [
          "https://linkedin.com/in/priyanshu-infosec",
          "https://github.com/Priyanshu-developer",
          "https://tryhackme.com/p/Priyanshu2002",
          "https://www.credly.com/users/priyanshu-kumar-singh.d86f6983",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Jain University, Bangalore",
        },
        knowsAbout: [
          "Web Development",
          "Full Stack Development",
          "Cybersecurity",
          "Ethical Hacking",
          "Penetration Testing",
          "Web Application Security",
          "Network Security",
          "Malware Analysis",
          "Next.js",
          "TypeScript",
          "Rust",
          "Cloud Security",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: "Priyanshu Kumar Singh Portfolio",
        publisher: {
          "@id": personId,
        },
        inLanguage: "en",
      },
      {
        "@type": "CollectionPage",
        "@id": pageId,
        url: `${siteUrl}/`,
        name: "Web Development and Cybersecurity Portfolio",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": personId,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
        },
      },
    ],
  };

  return (
    <script id="structured-data" type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
