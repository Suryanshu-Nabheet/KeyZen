import type { MetadataRoute } from "next"

type StaticRoute = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const staticRoutes: StaticRoute[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/landing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return staticRoutes.map((route) => ({
    url: route.path,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
