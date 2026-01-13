import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://your-portfolio.com", // Replace with actual domain
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
