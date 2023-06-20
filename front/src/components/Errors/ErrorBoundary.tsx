import { ReactNode } from 'react'
import { useErrorBoundary } from '@/hooks/errors'

type ErrorBoundaryProps = {
  children: ReactNode
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const error = useErrorBoundary()

  return (
    <div>
      {!error ? (
        <div>{children}</div>
      ) : (
        <>
          {error.status} {error.message}
        </>
      )}
    </div>
  )
}
