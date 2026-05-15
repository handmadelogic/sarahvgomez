interface CalloutProps {
  children: React.ReactNode
  type?: 'insight' | 'note' | 'outcome'
}

const styles = {
  insight: { bar: '#ffd166', label: 'Insight' },
  note:    { bar: '#06d6a0', label: 'Note' },
  outcome: { bar: '#8338ec', label: 'Outcome' },
}

export function Callout({ children, type = 'insight' }: CalloutProps) {
  const { bar, label } = styles[type]
  return (
    <aside
      className="my-10 flex gap-5 rounded-2xl border border-ink/8 bg-surface p-6"
      style={{ borderLeftColor: bar, borderLeftWidth: '4px' }}
    >
      <div className="flex-1">
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest" style={{ color: bar }}>
          {label}
        </p>
        <div className="font-sans text-base leading-relaxed text-ink-muted">
          {children}
        </div>
      </div>
    </aside>
  )
}
