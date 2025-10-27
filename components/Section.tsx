export default function Section({
  id,
  children,
  className = '',
  muted = false,
  divider = false,
  fullWidth = false,
}: {
  id?: string
  children: React.ReactNode
  className?: string
  muted?: boolean
  divider?: boolean
  fullWidth?: boolean
}) {
  return (
    <section
      id={id}
      className={[
        fullWidth ? '' : 'mx-auto max-w-6xl', // disable max width when fullWidth
        'relative px-6 py-20',
        muted ? 'bg-muted' : 'bg-background',
        divider ? 'border-b border-border' : '',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  )
}
