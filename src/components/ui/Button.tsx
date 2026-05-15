import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent text-base font-sans font-semibold',
    'hover:bg-accent-dark',
    'active:scale-[0.97]',
  ].join(' '),
  secondary: [
    'border-2 border-ink text-ink font-sans font-semibold',
    'hover:bg-ink hover:text-base',
  ].join(' '),
  ghost: [
    'text-ink-muted font-sans font-medium underline underline-offset-4',
    'hover:text-ink hover:decoration-accent',
  ].join(' '),
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2',
        'transition-all duration-[var(--duration-base)] ease-[var(--ease-smooth)]',
        'focus-visible:outline-2 focus-visible:outline-accent',
        'disabled:pointer-events-none disabled:opacity-40',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
