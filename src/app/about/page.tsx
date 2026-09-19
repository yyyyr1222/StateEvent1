export default function AboutPage() {
  return (
    <main
      className="page"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}
    >
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>เกี่ยวกับเว็บไซต์</h1>
        <p style={{ color: "#6b7280" }}>
          Student Course Hub เว็บไซต์รวบรวมข้อมูลรายวิชาและวงดนตรีที่ชื่นชอบ
        </p>
      </header>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>วัตถุประสงค์</h2>
        <p>
          เว็บไซต์นี้จัดทำขึ้นเพื่อฝึกฝนการพัฒนาเว็บแอปพลิเคชันด้วย Next.js
          และ React โดยรวบรวมข้อมูลรายวิชา (Course) และวงดนตรีที่ชื่นชอบ
          (Bands) พร้อมฟีเจอร์ค้นหา ติดตาม และกดใจ
        </p>
      </section>

      <section>
        <h2>ผู้จัดทำ</h2>
        <p>นายนัฐภัทร การดี 6840101355</p>
      </section>
    </main>
  );
}
