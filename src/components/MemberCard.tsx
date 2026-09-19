import Image from "next/image";
// สมมติว่ารับ props member มาใช้งาน
type MemberCardProps = {
  member: {
    name: string;
    imageUrl?: string;
    role?: string;
  };
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="member-card">
      <Image 
        src={member.imageUrl || "/images/default-avatar.png"} 
        alt={member.name} 
        width={100} 
        height={100} 
      />
      <p>{member.name}</p>
    </div>
  );
}