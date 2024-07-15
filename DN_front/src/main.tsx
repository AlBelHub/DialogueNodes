import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactFlow, { ReactFlowProvider } from 'reactflow'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactFlowProvider>
      <RouterProvider router={router} />
    </ReactFlowProvider>
  </React.StrictMode>,
)
