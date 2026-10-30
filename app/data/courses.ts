import type { Course } from "../types/course";

export const courses: Course[] = [
    {
    title: "React 19 & TypeScript: Build Production-Grade Apps",
    description:
      "Learn modern React development with TypeScript and industry best practices.",
    category: "Engineering",
    level: "Intermediate",
    price: 119,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    trending: true,
    creatorName: "Marcus Chen",
    creatorAvatar: "https://i.pravatar.cc/100?img=12",
    createdAt: "2026-09-15",
    duration: 8,
  },

  {
    title: "Machine Learning Fundamentals with Python",
    description:
      "Learn to build machine learning models with practical Python examples.",
    category: "Data science",
    level: "Beginner",
    price: 99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    trending: true,
    creatorName: "Priya Nair",
    creatorAvatar: "https://i.pravatar.cc/100?img=47",
    createdAt: "2026-09-15",
    duration: 12,
  },
];