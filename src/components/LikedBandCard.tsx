"use client";

import { useRef, useState } from "react";

export interface Band {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  likedAt: string;
  isLiked: boolean;
}

interface LikedBandCardProps {
  band: Band;
  onToggleLike: (id: string) => void;
}

export default function LikedBandCard({ band, onToggleLike }: LikedBandCardProps) {
  const [justChanged, setJustChanged] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleToggle = () => {
    onToggleLike(band.id);
    setJustChanged(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setJustChanged(false), 400);
  };

  const likedDate = new Date(band.likedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className={`liked-band-card ${!band.isLiked ? "liked-band-card--leaving" : ""}`}>
      <div className="liked-band-card__image-wrap">
        <img
          src={band.imageUrl}
          alt={`${band.name} live`}
          className="liked-band-card__image"
          loading="lazy"
        />
        <button
          type="button"
          className={`like-toggle ${band.isLiked ? "like-toggle--active" : ""} ${
            justChanged ? "like-toggle--pulse" : ""
          }`}
          onClick={handleToggle}
          aria-pressed={band.isLiked}
          aria-label={band.isLiked ? `Unlike ${band.name}` : `Like ${band.name}`}
        >
          <svg viewBox="0 0 24 24" className="like-toggle__icon" aria-hidden="true">
            <path d="M12 21s-7.5-4.6-10.2-9.1C.2 9 1 5.6 4 4.2c2.3-1.1 4.8-.3 6.3 1.6.5.6.9 1.2 1.7 1.2s1.2-.6 1.7-1.2c1.5-1.9 4-2.7 6.3-1.6 3 1.4 3.8 4.8 2.2 7.7C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <div className="liked-band-card__body">
        <h3 className="liked-band-card__name">{band.name}</h3>
        <p className="liked-band-card__meta">
          <span className="liked-band-card__genre">{band.genre}</span>
          <span className="liked-band-card__date">Liked {likedDate}</span>
        </p>
      </div>
    </article>
  );
}
