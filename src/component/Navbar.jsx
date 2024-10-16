import { useEffect, useState } from 'react';
import { MotionConfig, motion, useScroll, useMotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { links } from '../Constant';
import {Link as ScrollLink} from 'react-scroll'
import { ME, logo } from '../assets'
import { slideIn } from '../utils/motion';
import clsx from 'clsx';

const VARIANTS = {
    top: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
        rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
        rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
        },
        closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
        },
    },
    foldNav: {
        visible:{y: 0},
        folded: {y: "-100%"}
    },
};


const AnimatedHamburgerButton = ({active, setActive}) => {
    return (
        <MotionConfig
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
        >
        <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            onClick={() => setActive((pv) => !pv)}
            className="relative lg:hidden h-16 w-16 rounded-full bg-white/0 transition-colors"
        >
            <motion.span
            variants={VARIANTS.top}
            className="absolute h-1 w-10 bg-white"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
            variants={VARIANTS.middle}
            className="absolute h-1 w-10 bg-white"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-1 w-5 bg-white"
            style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
            }}
            />
        </motion.button>
        </MotionConfig>
    );
};

const Navbar = () => {
    const[active, setActive] = useState('')
    const[isMobile, setIsMobile] = useState(false)
    const[hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        console.log(screenWidth);
        if (screenWidth <= 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prevValue = scrollY.getPrevious();
        if (latest > prevValue && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <>
            <motion.section 
            variants={VARIANTS.foldNav}
            animate={hidden ? "folded" : 'visible'}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className='fixed top-0 z-50 bg-primary w-full'>
                <div className={clsx ('h-20 flex items-center justify-center px-5', active && 'hidden')}>
                    <div className='w-[50%] flex justify-center items-center gap-2'>
                        <img src={logo} className='size-16'/>
                        <h1 className='text-2xl font-bold uppercase'>Boscomunich</h1>
                    </div>
                    <div className='w-[50%] flex justify-center gap-10 items-center font-medium text-[14px] sm:hidden md:hidden'>
                        {
                            links.map((link) => (
                                <ScrollLink 
                                key={link.id} 
                                to={link.title}
                                spy
                                activeClass='active'
                                className="relative cursor-pointer uppercase transition-all duration-500 hover:text-secondary after:content-[''] after:absolute after:h-0.5 after:-left-[10%] after:w-0 hover:after:w-[120%] after:bottom-0 after:bg-secondary after:transition-all after:duration-500">
                                    {link.title}
                                </ScrollLink>
                            ))
                        }
                    </div>
                    <div className='w-[50%] flex justify-end lg:hidden'>
                        <AnimatedHamburgerButton active={active} setActive={setActive}/>
                    </div>
                </div>
            </motion.section>
            {active &&
            <div className={clsx('fixed z-50 bg-primary h-0 w-0 lg:hidden flex flex-row-reverse sm:flex-col justify-center items-center', active && 'h-screen w-full')}>
                <AnimatePresence>
                <motion.div 
                key={1}
                variants={isMobile ?  slideIn('right') : slideIn( 'down') }
                initial='hidden'
                animate='show'
                exit='exit'
                className='relative h-[50%] w-full md:h-full sm:flex sm:justify-center md:w-[50%]'>
                    <img src={ME} className='sm:w-[280px] sm:h-[300px] md:object-contain md:pt-20'/>
                    <div className={clsx('absolute right-5 top-3', !active && 'hidden')}>
                        <AnimatedHamburgerButton active={active} setActive={setActive}/>
                    </div>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                <motion.div
                key={2}
                variants={isMobile ?  slideIn('left') : slideIn( 'up') }
                initial='hidden'
                animate='show'
                exit='exit'
                className='h-[50%] w-full md:h-full md:w-[50%] flex flex-col items-center md:justify-center gap-4 text-2xl font-bold'>
                    {
                        links.map((link) => (
                            <ScrollLink 
                            onClick={() => setActive(false)}
                            key={link.id} 
                            to={link.title}
                            spy
                            activeClass='active'
                            className="relative cursor-pointer uppercase transition-all duration-500 hover:text-secondary after:content-[''] after:absolute after:h-0.5 after:-left-[10%] after:w-0 hover:after:w-[120%] after:bottom-0 after:bg-secondary after:transition-all after:duration-500">
                                {link.title}
                            </ScrollLink>
                        ))
                    }
                </motion.div>
                </AnimatePresence>
            </div>}
        </>
    )
};

export default Navbar;