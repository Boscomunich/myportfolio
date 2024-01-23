import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { logo } from '../assets';
import { links } from '../Constant'
import { motion } from 'framer-motion';
import profile from '../assets/profile.png'
import { slideIn } from '../utils/motion';


const Navbar = () => {
    const[Active, setActive] = useState('')
    const[toggle, setToggle] = useState(false)

    return (
        <nav
        className={`w-[100vw] items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-[100%] flex justify-between items-center max-w-7xl z-10 px-5'>
                <HashLink to='/'
                className='flex items-center gap-2'
                onClick={() => {setActive('');
                window.scrollTo(0,0)}}>
                    <img src={logo} alt='logo' className='sm:w-10 sm:h-10 w-16 h-16 object-contain stroke-1' />
                    <p className='text-2xl cursor-pointer sm:text-xl'>Boscomunich</p>
                </HashLink>
                <ul className='list-none flex gap-10 sm:hidden z-40'>
                    {links.map((link) => (
                        <HashLink key={link.id}
                        to={`#${link.title}`}
                        onClick={() => setActive(link.title)}
                        className={`${Active === link.title ? 'text-white' : 'text-rare'} px-3 group text-rare transition `}>
                            <a className='relative after:-left-5 after:content-[""] after:absolute after:h-[3px] after:bg-secondary after:w-[0%] after:-bottom-[0px] hover:after:w-[170%] after:transition-all after:duration-500'>{link.title}</a>
                        </HashLink>
                    ))
                    }
                </ul>
                <div onClick={()=>setToggle(!toggle)} className={`${toggle ?` w-6 h-[3px] rounded  top-0 mt-1 transition-all relative -translate-x-15 before:content-[""] before:bg-white before:w-6 before:h-[3px] before:rounded  before:absolute before:translate-y-0 before:rotate-45 before:duration-500 after:content-[""] after:bg-white after:w-6 after:h-[3px] after:rounded after:absolute after:translate-y-0 after:-rotate-45 after:duration-500 bg-transparent cursor-pointer lg:hidden` : `bg-white w-6 h-[3px] rounded  top-0 mt-1 transition-all relative -translate-x-15 before:content-[""] before:bg-white before:w-6 before:h-[3px] before:rounded  before:absolute before:-translate-y-2 before:duration-500 after:content-[""] after:bg-white after:w-6 after:h-[3px] after:rounded after:absolute after:translate-y-2 after:duration-500 cursor-pointer lg:hidden`} ` }>
                </div>
            </div>
            <div className={`${toggle ? 'block' : 'hidden'} lg:hidden`}>
                <div className='flex flex-col items-center justify-center'>
                    <motion.div
                    className='w-full h-[40vh] flex flex-col items-center justify-center bg-tertiary'
                    variants={slideIn('left', 'tween', 0, 0.5)}
                    initial='hidden'
                    animate={ toggle ? 'show' : 'hidden'}>
                        <img src={profile} className='h-[20vh] w-[20vh] rounded-full'/>
                    </motion.div>
                    <motion.div
                    className='w-full h-[60vh] flex flex-col gap-7 items-center pt-5'
                    variants={slideIn('right', 'tween', 0, 0.5)}
                    initial='hidden'
                    animate={ toggle ? 'show' : 'hidden'}>
                        {links.map((link) => (
                                <HashLink key={link.id}
                                onClick={()=>setToggle(!toggle)}
                                to={`#${link.title}`}
                                className={`list-none px-3 group text-rare transition w-50 `}>
                                    <a className='relative after:-left-5 after:content-[""] after:absolute after:h-[3px] after:bg-secondary after:w-[0%] after:-bottom-[0px] hover:after:w-[170%] after:transition-all after:duration-500' >{link.title}</a>
                                </HashLink>
                            ))
                            }
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;