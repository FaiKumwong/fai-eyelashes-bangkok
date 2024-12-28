import React from 'react';
import { Helmet } from 'react-helmet';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
}

export const Metadata: React.FC<MetadataProps> = ({ 
  title, 
  description, 
  image = '/og-image.png'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Fai Eyelashes",
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sukhumvit Soi 50, On Nut",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok",
      "postalCode": "10260",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.707137",
      "longitude": "100.593760"
    },
    "url": "https://faieyelashes.com",
    "telephone": "+66-627-766-926",
    "priceRange": " ฿ 799 - ฿ 999",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={window.location.href} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
