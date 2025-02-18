export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm border rounded-full bg-white py-1 px-2 w-fit">
      {children}
    </div>
  );
}
