import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList">
        <li>
          <Link className="navLink" href="/">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/course">
            รายวิชา
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/bands">
            วงดนตรี
          </Link>
        </li>
        {/* เพิ่มเมนูหน้าประวัติการกดใจตรงนี้ */}
        <li>
          <Link className="navLink" href="/likes">
            ❤️ ประวัติการกดใจ
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/about">
            เกี่ยวกับ
          </Link>
        </li>
      </ul>
    </nav>
  );
}