import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Features from '../Features/Features'
import Reviews from '../Reviews/Reviews'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'))
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'))

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path='/catalog/:camperId' element={<CamperPage />}>
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
