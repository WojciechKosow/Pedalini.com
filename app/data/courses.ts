import type { Course } from "../types/course";

export const courses: Course[] = [
    {
    slug: "react-typescript",
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
    lessons: 5,

    curriculum: [
    {
      title: "Introduction to React",
      duration: "10:20",
      preview: true,
    },
    {
      title: "Smart Animate Deep Dive",
      duration: "32:10",
      preview: false,
    },
    {
      title: "Interactive Components",
      duration: "28:45",
      preview: false,
    },
    {
      title: "Building a React Application",
      duration: "55:30",
      preview: false,
    },
    {
      title: "Final Project",
      duration: "16:00",
      preview: false,
    },
  ], 
  },

  {
    slug: "machine-learning",
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
    lessons: 10,
    curriculum: [
  {
    title: "Introduction to Machine Learning",
    duration: "12:30",
    preview: true,
  },
  {
    title: "Python for Machine Learning",
    duration: "24:45",
    preview: false,
  },
  {
    title: "NumPy and Pandas Fundamentals",
    duration: "32:15",
    preview: false,
  },
  {
    title: "Data Preprocessing",
    duration: "28:40",
    preview: false,
  },
  {
    title: "Supervised Learning",
    duration: "35:20",
    preview: false,
  },
  {
    title: "Linear Regression",
    duration: "26:10",
    preview: false,
  },
  {
    title: "Classification Algorithms",
    duration: "31:45",
    preview: false,
  },
  {
    title: "Decision Trees and Random Forests",
    duration: "29:30",
    preview: false,
  },
  {
    title: "Model Evaluation",
    duration: "22:15",
    preview: false,
  },
  {
    title: "Final Machine Learning Project",
    duration: "37:30",
    preview: false,
  },],
  },
];