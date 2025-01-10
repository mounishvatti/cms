"use client"
import { useSearchParams } from 'next/navigation';

const courseItems = {
  ai: {
    title: "Artificial Intelligence",
    description: "Explore the birth of groundbreaking ideas and inventions.",
  },
  devops: {
    title: "DevOps",
    description: "Dive into the transformative power of technology.",
  },
  fullstack: {
    title: "Fullstack Development",
    description: "Discover the beauty of thoughtful and functional design.",
  },
  dsa: {
    title: "Data Structures and Algorithms (Level - Beginner to Advanced)",
    description: "Understand the impact of effective communication in our lives.",
  },
  dbms: {
    title: "Database Management",
    description: "Join the quest for understanding and enlightenment.",
  },
  genai: {
    title: "Generative AI",
    description: "Experience the thrill of bringing ideas to life.",
  },
  oops: {
    title: "Object-oriented Programming Concepts",
    description: "Embark on exciting journeys and thrilling discoveries.",
  },
};

const CoursePage = () => {
  const searchParams = useSearchParams();
  const domain = searchParams?.get('domain');
  
  const content = courseItems[domain as keyof typeof courseItems];

  if (!content) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default CoursePage;
