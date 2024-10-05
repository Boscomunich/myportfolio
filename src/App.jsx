import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
            </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
