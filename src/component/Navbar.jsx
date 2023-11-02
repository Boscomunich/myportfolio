import { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, cancel } from '../assets';
import { links } from '../Constant'
import { motion } from 'framer-motion';
import profile from '../assets/profile.png'
import { fadeIn, slideIn } from '../utils/motion';
import SectionWrapper from '../Hoc/SectionWrapper';

const MobileNav = ({toggled}) => {
    const[Active, setActive] = useState('')
    return(
        <div className='h-screen w-screen block'>
            <img src={cancel} 
            className='h-[18px] w-[18px] ml-[83vw] mt-[4vh] cursor-pointer'
            onClick={() => toggled(false)}/>
            <motion.div
            variants={slideIn('left', 'spring', 0, 1)}
            initial='hidden'
            animate='show'
            className='h-[50%] w-[100%] flex flex-col items-center justify-center'>
                <img src={profile} className='h-[100px] w-[100px] rounded-full'/>
                <br/>
                <p className='text-secondary'>Chidera Obuegbe</p>
            </motion.div>
            <motion.div
            variants={slideIn('right', 'spring', 0, 1)}
            initial='hidden'
            animate='show'>
                <ul className='list-non flex flex-col gap-10 justify-center items-center'>
                    {links.map((link) => (
                        <li 
                        key={link.id}
                        onClick={() => setActive(link.title)
                        }
                        className={`${Active === link.title ? 'text-white' : 'text-rare'} px-3 group text-rare transition duration-300`}>
                            <a href={`#${link.title}`}>{link.title}</a>
                            <span className="block rounded-xl max-w-0 group-hover:max-w-full transition-all duration-300 h-[3px] bg-secondary text-white"></span>
                        </li>
                    ))
                    }
                </ul>
            </motion.div>
        </div>
    )
}

const Navbar = () => {
    const[Active, setActive] = useState('')
    const[toggle, setToggle] = useState(false)

    const toggled = (toggled) => {
        toggled ?
        setToggle(true)
        :setToggle(false)
    }
    return (
        <nav
        className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}>
            { !toggle ?
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <NavLink to='/'
                className='flex items-center gap-2'
                onClick={() => {setActive('');
                window.scrollTo(0,0)}}>
                    <img src={logo} alt='logo' className='w-16 h-16 object-contain stroke-1' />
                    <p className='text-2xl cursor-pointer'>Boscomunich</p>
                </NavLink>
                <ul className='list-non flex gap-10 sm:hidden'>
                    {links.map((link) => (
                        <li key={link.id}
                        onClick={() => setActive(link.title)}
                        className={`${Active === link.title ? 'text-white' : 'text-rare'} px-3 group text-rare transition duration-300`}>
                            <a href={`#${link.title}`}>{link.title}</a>
                            <span className="block rounded-xl max-w-0 group-hover:max-w-full transition-all duration-300 h-[3px] bg-secondary text-white"></span>
                        </li>
                    ))
                    }
                </ul>
                <div className='relative lg:hidden sm:flex'>
                    <div className='lg:hidden sm:block'>
                        <img src={ menu } 
                        height='24' width='24'
                        className='cursor-pointer'
                        onClick={() => toggled(true)}/>
                    </div>
                </div>
            </div>
            : <MobileNav toggled={toggled}/>}
        </nav>
    );
};

export default Navbar;