import Image from "next/image";
import type { Member } from "@/types/band";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <li className="member-card">
      <Image
        src={member.imageUrl}
        alt={"รูปของ " + member.name}
        width={120}
        height={120}
        className="member-photo"
      />
      <div className="member-info">
        <p className="member-name">{member.name}</p>
        <p className="member-role">{member.role}</p>
      </div>
    </li>
  );
}