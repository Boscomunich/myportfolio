import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import ProjectDetail from './component/ProjectDetail'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:title' element={<ProjectDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
