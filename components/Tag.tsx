// components/Tag.tsx
export default function Tag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded-full bg-sky-500 text-black font-medium">
      {label}
    </span>
  )
}
