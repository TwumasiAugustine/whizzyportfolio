import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo)
    
    // Optional: Send error to logging service (e.g., Sentry)
    if (import.meta.env.PROD) {
      // Example: logErrorToService(error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
          role="alert"
        >
          <h2 style={{ color: 'var(--text)', margin: 0 }}>Something went wrong</h2>
          <p style={{ color: 'var(--muted)', margin: 0 }}>
            We're sorry for the inconvenience. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
            style={{ marginTop: '1rem' }}
          >
            Refresh Page
          </button>
          {import.meta.env.DEV && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left', width: '100%', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', color: 'var(--accent)' }}>
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'var(--surface)',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                }}
              >
                {this.state.error.toString()}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}
