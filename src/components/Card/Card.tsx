type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className=" w-full bg-white rounded shadow-sm p-4 border">
      {children}
    </div>
  );
}
