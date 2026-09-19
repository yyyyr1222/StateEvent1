import Image from "next/image";
export default function HomePage() {
  const siteName = "Student Course Hub";
  const description =
    "แหล่งรวบรวมข้อมูลรายวิชา หน่วยกิต และสถานะการเปิดลงทะเบียนไว้ในที่เดียว เเละ อื่นๆ";

  return (
    <main className="page">
      <h1>{siteName}</h1>
      <p>{description}</p>

      <section>
        <h2>เว็ปเเนะนำ(ทำตามรายงาน)</h2>
        <p>
          สร้างโดย: นายนัฐภัทร การดี 6840101355 
        </p>
      </section>
    </main>
  );
}