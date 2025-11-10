export function StructuredData() {
  const baseUrl = "https://muhammadatifsocial.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Atif Keerio",
    alternateName: "AADI",
    givenName: "Muhammad Atif",
    familyName: "Keerio",
    url: baseUrl,
    image: `${baseUrl}/avatar.jpg`,
    jobTitle: ["Fullstack Developer", "AI Engineer"],
    knowsAbout: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Software Engineering",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
    ],
    sameAs: [
      "https://open.spotify.com/user/317kzghvn4lp6qzvcuy5y3kpib6u",
      "https://github.com/muhammad-atif-keerio",
      "https://discord.gg/wdQf5cXa",
      "https://instagram.com/atifjan536",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Galexy",
    },
    description: "Fullstack Developer and AI Engineer passionate about building innovative solutions at the intersection of code and artificial intelligence.",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Atif Keerio",
      alternateName: "AADI",
    },
    url: baseUrl,
    description: "Social presence page for Muhammad Atif Keerio - Fullstack Developer & AI Engineer",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Atif Keerio - Social Presence",
    url: baseUrl,
    description: "Personal social presence page for Muhammad Atif Keerio (.AADI.) - Fullstack Developer & AI Engineer",
    author: {
      "@type": "Person",
      name: "Muhammad Atif Keerio",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Muhammad Atif Keerio - Development Services",
    provider: {
      "@type": "Person",
      name: "Muhammad Atif Keerio",
      jobTitle: ["Fullstack Developer", "AI Engineer"],
    },
    areaServed: "Worldwide",
    serviceType: ["Web Development", "AI/ML Solutions", "Full Stack Development"],
    description: "Professional development services specializing in fullstack web development and AI engineering solutions",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}

