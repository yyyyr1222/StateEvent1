"use client";  
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="container">
      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        <button type="button" onClick={() => console.log("clicked")}> 
         ปุ่มทดลอง 
        </button> 
      </section>
    </main>
  );
}