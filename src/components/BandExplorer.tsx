import Image from "next/image";
import type { Band } from "@/types/band";
import MemberList from "@/components/MemberList";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  likeCount: number;
  onToggleFollow: (id: number) => void;
  onLike: (id: number) => void;
};

export default function BandCard({ 
  band, 
  isFollowed, 
  likeCount, 
  onToggleFollow, 
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
          <button type="button" aria-pressed={isFollowed} onClick={() => onToggleFollow(band.id)}>
            {isFollowed ? "เลิกติดตาม" : "ติดตาม"}
          </button>
          <button type="button" onClick={() => onLike(band.id)}>❤️ {likeCount}</button>
        </div>
        <MemberList members={band.members} />
      </div>
    </article>
  );
}