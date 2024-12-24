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
      "streetAddress": "Your Street Address",
      "addressLocality": "Bangkok",
      "addressRegion": "Bangkok",
      "postalCode": "10110",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "url": "https://faieyelashes.com",
    "telephone": "+66XXXXXXXXX",
    "priceRange": "฿฿",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};