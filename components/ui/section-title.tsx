interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}
