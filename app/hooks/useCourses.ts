"use client"

import { useMemo, useState } from "react"
import type { Course, CourseSortOption } from "../types/course"
import { match } from "assert";

export const categories = [
    "All",
    "Design",
    "Engineering",
    "Data Science",
    "Creative",
    "Business",
    "Photography",
];

export function useCourses(courseList: Course[]) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] =
    useState<CourseSortOption>("Most Popular");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return courseList.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      const matchesSearch = [
        course.title,
        course.description,
        course.category,
        course.creatorName,
        course.level,
      ].some((value) =>
        value.toLowerCase().includes(query)
      );

      return matchesCategory && matchesSearch;
    });
  }, [courseList, selectedCategory, searchQuery]);

  const sortedCourses = useMemo(() => {
    return [...filteredCourses].sort((a, b) => {
      switch (sortBy) {
        case "Highest Rated":
          return b.rating - a.rating;

        case "Price: Low to High":
          return a.price - b.price;

        case "Price: High to Low":
          return b.price - a.price;

        case "Newest":
          return (
            new Date(b.createdAt ?? 0).getTime() -
            new Date(a.createdAt ?? 0).getTime()
          );

        case "Most Popular":
        default:
          return Number(b.trending) - Number(a.trending);
      }
    });
  }, [filteredCourses, sortBy]);

  return {
    categories, 
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredCourses,
    sortedCourses,
  };
}