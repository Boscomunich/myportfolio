import { motion } from 'framer-motion';
import { ME } from '../assets';

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
            className='flex justify-center items-center'
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay:1, duration: 0.5, ease: "easeIn"}
            }}>
                <motion.div 
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay:1, duration: 0.5, ease: "easeIn"}
                }}
                className='w-[298px] h-[298px] sm:w-[100%] sm:h-[100%]'>
                    <img src={ ME } className='object-contain'/>
                </motion.div>
                <motion.svg 
                className=" w-[130%] h-[130%] sm:w-[150%] sm:h-[150%] absolute top-0"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/200/svg">
                    <motion.circle
                    cx="253"
                    cy="253"x
                    r="250"
                    stroke="#ecb34a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;