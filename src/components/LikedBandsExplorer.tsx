"use client";

import { useMemo, useRef, useState } from "react";
import LikedBandCard, { type Band } from "./LikedBandCard";

type LikedBandsExplorerProps = {
  initialBands?: Band[];
};

type SortOption = "recent" | "az" | "genre";

export default function LikedBandsExplorer({ initialBands = [] }: LikedBandsExplorerProps) {
  const [bands, setBands] = useState<Band[]>(initialBands);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("recent");
  const removalTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const handleToggleLike = (id: string) => {
    const target = bands.find((band) => band.id === id);
    const willBeLiked = target ? !target.isLiked : true;

    setBands((prev) =>
      prev.map((band) => (band.id === id ? { ...band, isLiked: !band.isLiked } : band))
    );

    const existingTimer = removalTimers.current.get(id);
    if (existingTimer) {
      clearTimeout(existingTimer);
      removalTimers.current.delete(id);
    }

    if (!willBeLiked) {
      const timer = setTimeout(() => {
        setBands((prev) => prev.filter((band) => band.id !== id));
        removalTimers.current.delete(id);
      }, 380);
      removalTimers.current.set(id, timer);
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? bands.filter(
          (band) =>
            band.name.toLowerCase().includes(q) || band.genre.toLowerCase().includes(q)
        )
      : bands;

    return [...list].sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      if (sort === "genre") return a.genre.localeCompare(b.genre);
      return new Date(b.likedAt).getTime() - new Date(a.likedAt).getTime();
    });
  }, [bands, query, sort]);

  const genreCount = useMemo(() => new Set(bands.map((b) => b.genre)).size, [bands]);
  const sinceDate = useMemo(() => {
    if (bands.length === 0) return null;
    const earliest = bands.reduce(
      (min, b) => (b.likedAt < min ? b.likedAt : min),
      bands[0].likedAt
    );
    return new Date(earliest).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }, [bands]);

  return (
    <div className="likes-page">
      <header className="likes-header">
        <div className="likes-header__main">
          <h1 className="likes-header__title">Bands you&apos;ve liked</h1>
          <p className="likes-header__subtitle">
            Every artist you&apos;ve tapped the heart for, gathered in one place.
          </p>
        </div>

        <div className="likes-header__perforation" aria-hidden="true" />

        <dl className="likes-header__stats">
          <div className="likes-stat">
            <dt className="likes-stat__label">Bands liked</dt>
            <dd className="likes-stat__value">{bands.length}</dd>
          </div>
          <div className="likes-stat">
            <dt className="likes-stat__label">Genres explored</dt>
            <dd className="likes-stat__value">{genreCount}</dd>
          </div>
          <div className="likes-stat">
            <dt className="likes-stat__label">Liking since</dt>
            <dd className="likes-stat__value">{sinceDate ?? "—"}</dd>
          </div>
        </dl>
      </header>

      <div className="likes-toolbar">
        <div className="likes-toolbar__search">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="likes-toolbar__search-icon">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your liked bands"
            aria-label="Search your liked bands"
          />
        </div>

        <label className="likes-toolbar__sort">
          Sort by
          <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)}>
            <option value="recent">Recently liked</option>
            <option value="az">Name (A to Z)</option>
            <option value="genre">Genre</option>
          </select>
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="likes-grid">
          {filtered.map((band) => (
            <LikedBandCard key={band.id} band={band} onToggleLike={handleToggleLike} />
          ))}
        </div>
      ) : bands.length === 0 ? (
        <div className="likes-empty">
          <p className="likes-empty__title">No liked bands yet</p>
          <p className="likes-empty__body">
            Tap the heart on any artist&apos;s page to start building your list.
          </p>
        </div>
      ) : (
        <div className="likes-empty">
          <p className="likes-empty__title">No matches for &ldquo;{query}&rdquo;</p>
          <p className="likes-empty__body">Try a different name or genre.</p>
        </div>
      )}
    </div>
  );
}