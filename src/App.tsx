import './App.css'
import { Route, Routes } from "react-router"
import SearchAppBar from './component/Heeader'
// import { KnowledgePage } from './component/Page'
import { SliderRow } from './component/Slider.'
import { LoginPage } from './component/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SearchAppBar />} />
        <Route path='/login' element={<LoginPage />} />
        {/* <Route path='/' element={<KnowledgePage />} /> */}
        <Route path='/slider' element={<SliderRow />} />
        <Route />
      </Routes>
    </>
  )
}

export default App
