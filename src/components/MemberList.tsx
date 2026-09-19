import type { Member } from "@/types/band";
import MemberCard from "./MemberCard";

type MemberListProps = {
  members: Member[];
  title?: string;
};

export default function MemberList({
  members,
  title = "สมาชิกวง",
}: MemberListProps) {
  if (members.length === 0) {
    return <p className="member-empty">ยังไม่มีข้อมูลสมาชิก</p>;
  }

  return (
    <div className="member-list">
      <h3 className="member-list-title">
        {title} ({members.length} คน)
      </h3>

      <ul className="member-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </ul>
    </div>
  );
}