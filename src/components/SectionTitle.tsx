type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h1>{title}</h1>;
}

// type SectionTitleProps = {
//   text: string;
//   subtitle?: string;
// };
 
// export default function SectionTitle({ text, subtitle }: SectionTitleProps) {
//   return (
//     <header className="section-title">
//       <h1>{text}</h1>
//       {subtitle && <p className="section-subtitle">{subtitle}</p>}
//     </header>
//   );
// }