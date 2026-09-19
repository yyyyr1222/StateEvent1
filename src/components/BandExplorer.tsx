"use client";
 
import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "@/components/BandCard";
 
type BandExplorerProps = {
  bands: Band[];
};
 
export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  const [onlyFollowed, setOnlyFollowed] = useState(false);
  const [likes, setLikes] = useState<Record<number, number>>({});
 
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }
 
  function handleToggleFollow(id: number) {
    setFollowedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((followedId) => followedId !== id)
        : [...prevIds, id]
    );
  }
 
  function handleLike(id: number) {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] ?? 0) + 1,
    }));
  }
 
  function handleReset() {
    setKeyword("");
    setOnlyFollowed(false);
  }
 
  const searchText = keyword.trim().toLowerCase();
 
  const visibleBands = bands.filter((band) => {
    const matchKeyword =
      band.name.toLowerCase().includes(searchText) ||
      band.genre.toLowerCase().includes(searchText)
      
    const matchFollowed = !onlyFollowed || followedIds.includes(band.id);
    return matchKeyword && matchFollowed;
  });
 
  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          aria-label="ค้นหาวงดนตรี"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงหรือแนวเพลง"
        />
 
        <button
          type="button"
          aria-pressed={onlyFollowed}
          onClick={() => setOnlyFollowed((prev) => !prev)}
        >
          {onlyFollowed ? "แสดงทั้งหมด" : "แสดงเฉพาะวงที่ติดตาม"}
        </button>
 
        <button type="button" onClick={handleReset}>
          ล้างเงื่อนไข
        </button>
      </div>
 
      <p className="counter">
        พบ {visibleBands.length} วง · ติดตามอยู่ {followedIds.length} วง
      </p>
 
      {visibleBands.length === 0 ? (
        <p className="empty-state">ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="band-grid">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedIds.includes(band.id)}
              likeCount={likes[band.id] ?? 0}
              onToggleFollow={handleToggleFollow}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </>
  );
}