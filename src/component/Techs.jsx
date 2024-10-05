import Divider from './reusables/Divider';
import { technologies } from '../Constant';
import { motion } from 'framer-motion'

const fadeIn = {
    initial: {opacity: 0, y: 100},
    animate: (index) => ({
        opacity: 1, y: 0,
        transition: {
            delay: 0.05 * index,
            ease: "easeIn"
        }
    })
}

const TechCard = ({tech, index}) => {
    return (
        <motion.div 
        variants={fadeIn}
        initial='initial'
        whileInView='animate'
        viewport={{once: true}}
        custom={index}
        className='px-3 py-2 h-10 border border-rare shadow-xl rounded-md hover:scale-110 transition-all duration-300'>
            {tech.name}
        </motion.div>
    )
}

const Tech = () => {
    return (
        <div className="pb-10">
            <Divider>My tech Stacks</Divider>
            <div className='flex flex-wrap justify-center gap-3 mt-20 lg:px-[20%] md:px-[10%] px-5'>
                {
                    technologies.map((tech, index) => (
                        <TechCard key={index} tech={tech} index={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Tech;