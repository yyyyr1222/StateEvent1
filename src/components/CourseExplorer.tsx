"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "@/components/BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [onlyFavorite, setOnlyFavorite] = useState(false);
  
  // เพิ่ม state สำหรับเก็บจำนวนไลค์ของแต่ละวง โดยใช้ key เป็น band.id และ value เป็นจำนวนไลค์
  const [likesMap, setLikesMap] = useState<{ [key: number]: number }>({});

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  // ปรับจาก toggleFavorite เป็น toggle ติดตาม (Follow/Favorite)
  function handleToggleFavorite(id: number) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favId) => favId !== id)
        : [...prevIds, id]
    );
  }

  // เพิ่มฟังก์ชันสำหรับกด Like วงดนตรี
  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  function handleToggleOnlyFavorite() {
    setOnlyFavorite((prev) => !prev);
  }

  function handleReset() {
    setKeyword("");
    setOnlyFavorite(false);
  }

  const searchText = keyword.trim().toLowerCase();

  // กรองข้อมูลวงดนตรีตามชื่อวง (ตามโจทย์ Favorite Bands)
  const visibleBands = bands.filter((band) => {
    const matchKeyword = band.name.toLowerCase().includes(searchText);
    const matchFavorite = !onlyFavorite || favoriteIds.includes(band.id);
    return matchKeyword && matchFavorite;
  });

  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          aria-label="ค้นหาวงดนตรี"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี"
        />

        <button
          type="button"
          aria-pressed={onlyFavorite}
          onClick={handleToggleOnlyFavorite}
        >
          {onlyFavorite ? "แสดงวงทั้งหมด" : "แสดงเฉพาะวงที่ติดตาม"}
        </button>

        <button type="button" onClick={handleReset}>
          ล้างเงื่อนไข
        </button>
      </div>

      <p className="counter">
        พบ {visibleBands.length} วงดนตรี · กำลังติดตาม {favoriteIds.length} วง
      </p>

      {visibleBands.length === 0 ? (
        <p className="empty-state">ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="band-grid">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFavorite={favoriteIds.includes(band.id)}
              onToggleFavorite={handleToggleFavorite}
              likes={likesMap[band.id] || 0}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </>
  );
}