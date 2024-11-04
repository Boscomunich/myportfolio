import clsx from 'clsx';
import { motion } from 'framer-motion'
import { about } from '../assets'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import Divider from './reusables/Divider';
import { works } from '../Constant/index'
import { FaBackward, FaForward } from 'react-icons/fa';



const Card = ({image, title, description, github, live}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div className='relative h-96 w-[450px] border border-rare shadow-xl p-4 shrink-0' 
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}>
            <div className={clsx('absolute inset-0 z-[200] transition-all duration-300 ease-in-out', hovered && 'right-[50%] left-0 top-[50%] bottom-0')}>
                <img src={image} className='h-full w-full'/>
            </div>
            <div className='absolute left-0 top-0 right-0 bottom-[50%] z-[100] bg-rare text-center text-lg font-medium pt-5'>
                <h1>
                    {title}
                </h1>
                <p className='text-secondary font-[400] text-lg capitalize'>
                    {description}
                </p>
            </div>
            <Link to={`/${title}`} className='absolute left-[50%] top-[50%] right-0 bottom-0 z-[100] bg-white text-secondary flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2'>
                <div className='text-[16px] font-medium'>
                    MORE
                </div>
                <FaArrowRightFromBracket />
            </div>
            </Link>
        </div>
    )
}

const Work = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    };

    const handlePrev = () => {
        if (currentIndex == 0 ) {
            return
        }
        setCurrentIndex((prevIndex) => (prevIndex - 1) % works.length);
    };

    return (
        <section className='border relative h-screen border-rare m-5 pt-20 flex justify-center items-center' id='Work'>
            <div className='w-full absolute top-5'>
                <Divider>
                    work
                </Divider>
            </div>
            <button 
            className='absolute z-[100] left-2 top-2 w-auto px-3 py-2'
            onClick={handlePrev}>
                <FaBackward />
            </button>
            <div className='relative w-full overflow-auto no-scrollbar'>
            <motion.div 
            className='flex relative justify-start gap-5 px-7 py-5 w-auto'
            animate={{ x: -currentIndex * 470 }}
            transition={{ duration: 0.5 }}>
                {works.map((work, index) => (
                    <Card {...work} key={index} />
                ))}
            </motion.div>
            </div>
            <button 
            className='absolute z-[100] top-2 right-2 w-auto px-3 py-2'
            onClick={handleNext}>
                <FaForward />
            </button>
        </section>
    );
};

export default Work;