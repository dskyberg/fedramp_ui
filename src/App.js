import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './Layout';

import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import DocumentPage from './pages/DocumentPage'
import PoamsPage from './pages/PoamsPage'
import PoamPage from './pages/PoamPage'
import NoMatch from './pages/NoMatch'

const queryClient = new QueryClient()

/**
 * App handles the routes for the application.  Each page will have its own route that renders within the
 * common Layout.
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="poams" element={<PoamsPage />} />
          <Route path="poams/:date" element={<PoamPage />} />
          <Route path="properties" element={
            <PropertiesPage />
          } />
          <Route path="doc" element={<DocumentPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}