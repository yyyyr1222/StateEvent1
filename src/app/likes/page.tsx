import type { Metadata } from "next";
import LikedBandsExplorer from "@/components/LikedBandsExplorer";

export const metadata: Metadata = {
  title: "Liked bands",
  description: "Every band you've liked, all in one place.",
};

export default function LikesPage() {
  return <LikedBandsExplorer />;
}
