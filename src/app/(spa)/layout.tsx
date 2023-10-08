export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-lg">========== Nested Layout / Chat ============ </h1>
      <section>{children}</section>
    </div>
  );
}
