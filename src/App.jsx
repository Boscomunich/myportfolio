import { BrowserRouter } from 'react-router-dom'
import Experience  from './component/Experience'
import Navbar  from './component/Navbar'
import Hero  from './component/Hero'
import Services from './component/Services'
import Tech from './component/Tech'
import Work from './component/Work'
import Contact from './component/Contact'

function App() {

  return (
    <BrowserRouter >
      <div className='relative z-0 bg-primary'>
        <div className='bg-primary '>
          <Navbar/>
          <Hero/>
        </div>
        <Services/>
        <Work/>
        <Experience/>
        <Tech/>
        <div className='relative z-0'>
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
