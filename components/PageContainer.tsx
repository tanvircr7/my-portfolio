// components/PageContainer.tsx
export default function PageContainer({
  children,
  className = '',
}: { children: React.ReactNode; className?: string }) {
  return (
    <main className={`max-w-6xl mx-auto px-6 pt-28 pb-20 ${className}`}>
      {children}
    </main>
  )
}
