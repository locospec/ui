import type { MetadataRoute } from "next";

import { categories } from "@/config/components";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://ui.locospec.com",
  };
  const search = {
    url: "https://ui.locospec.com/search",
  };
  const easings = {
    url: "https://ui.locospec.com/easings",
  };
  const categoryPages = categories.map(category => ({
    url: `https://ui.locospec.com/${category.slug}`,
  }));

  return [home, ...categoryPages, search, easings];
}
