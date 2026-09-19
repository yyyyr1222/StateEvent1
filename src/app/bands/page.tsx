import { bands } from "@/data/bands";
import BandExplorer from "@/components/BandExplorer"; 
export default function BandsPage() {
  return (
    <main>
      <h1>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
      <p>แสดงข้อมูลวงดนตรีและสมาชิกด้วย Reusable Component</p>
      <BandExplorer bands={bands} />
    </main>
  );
}