import Image from "next/image";
import type { Band } from "@/types/band";
import MemberList from "@/components/MemberList";

type BandCardProps = {
  band: Band;
  isFavorite: boolean; // เปลี่ยนจาก isFollowed เป็น isFavorite
  likes: number;       // เปลี่ยนจาก likeCount เป็น likes
  onToggleFavorite: (id: number) => void; // เปลี่ยนชื่อฟังก์ชันให้ตรงกัน
  onLike: (id: number) => void;
};

export default function BandCard({ 
  band, 
  isFavorite, 
  likes, 
  onToggleFavorite, 
  onLike 
}: BandCardProps) {
  return (
    <article className="band-card">
      <Image src={band.imageUrl} alt={band.name} width={400} height={260} className="band-image" />
      <div className="band-body">
        <h2 className="band-name">{band.name}</h2>
        <p className="band-meta">{band.genre} · ก่อตั้งปี {band.formedYear}</p>
        {band.description && <p className="band-desc">{band.description}</p>}
        <div className="toolbar">
          <button type="button" aria-pressed={isFavorite} onClick={() => onToggleFavorite(band.id)}>
            {isFavorite ? "เลิกติดตาม" : "ติดตาม"}
          </button>
          <button type="button" onClick={() => onLike(band.id)}>❤️ {likes}</button>
        </div>
        <MemberList members={band.members} />
      </div>
    </article>
  );
}