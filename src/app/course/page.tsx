"use client";  
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="container">
      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            isFavorite={false} /* กำหนดค่าเริ่มต้นเป็น false ไว้ก่อน */
            onToggleFavorite={() => {
              console.log("Toggle favorite for course:", course.id);
            }} /* ใส่ฟังก์ชันรองรับการคลิก */
          />
        ))}

        <button type="button" onClick={() => console.log("clicked")}> 
         ปุ่มทดลอง 
        </button> 
      </section>
    </main>
  );
}