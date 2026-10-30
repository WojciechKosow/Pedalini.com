export type Course = {
    title: string;
    description: string;
    category: string;
    level: string;
    price: number;
    rating: number;
    image: string;
    trending: boolean;
    creatorName: string;
    creatorAvatar: string;
    createdAt:string;
    duration: number;
};

export type CourseSortOption =
  | "Most Popular"
  | "Highest Rated"
  | "Newest"
  | "Price: Low to High"
  | "Price: High to Low";