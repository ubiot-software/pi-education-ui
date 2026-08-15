import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20 dark:bg-blue-500 dark:hover:bg-blue-600',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-sm dark:bg-red-500 dark:hover:bg-red-600',
        outline:
          'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400',
        secondary:
          'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-blue-300 dark:hover:bg-slate-700',
        ghost:
          'text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400',
        link: 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-6 text-base font-semibold',
        icon: 'h-9 w-9 p-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const combinedClassName = cn(buttonVariants({ variant, size, className }))
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(combinedClassName, (children.props as { className?: string }).className),
        ...props
      })
    }
    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
