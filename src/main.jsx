import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
