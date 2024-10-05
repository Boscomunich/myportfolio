import Footer from './Footer'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout () {

    return (
        <div className='bg-primary overflow-hidden w-full'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>      
    )
}