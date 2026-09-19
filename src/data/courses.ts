import type { Course } from "@/types/course";
 
export const courses: Course[] = [
  { id: 1, code: "WEB231", title: "การพัฒนาเว็บแอปพลิเคชัน", credits: 3, isOpen: true },
  { id: 2, code: "WEB232", title: "การออกแบบส่วนติดต่อผู้ใช้", credits: 3, isOpen: true },
  { id: 3, code: "WEB233", title: "ฐานข้อมูลสำหรับงานเว็บ", credits: 3, isOpen: false },
  { id: 4, code: "WEB234", title: "ความมั่นคงปลอดภัยของเว็บ", credits: 2, isOpen: false },
];