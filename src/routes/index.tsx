import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchHours from '../page/searchHours'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchHours />} />
      </Routes>
    </BrowserRouter>
   
  )
}