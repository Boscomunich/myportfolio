import { BrowserRouter } from 'react-router-dom'
import Experience  from './component/Experience'
import Navbar  from './component/Navbar'
import Hero  from './component/Hero'
import Services from './component/Services'
import Tech from './component/Tech'
import Work from './component/Work'
import Contact from './component/Contact'
import { StarCanvas } from './canvas'
import Socials from './component/Socials'
import About from './component/About'

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
        <About/>
        <Tech/>
        <div className='relative z-0'>
          <Contact/>
          <StarCanvas/>
        </div>
        <Socials/>
      </div>
    </BrowserRouter>
  )
}

export default App
