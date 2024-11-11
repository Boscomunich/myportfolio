import React from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../Constant';
import { motion } from 'framer-motion'
import Divider from './reusables/Divider';
import Button from './reusables/Button';
import { github, link } from '../assets'

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
        className='w-[120px] pt-2 text-center h-10 border border-rare shadow-xl rounded-md hover:scale-110 transition-all duration-300'>
            {tech}
        </motion.div>
    )
}


const ProjectDetail = () => {

    const params = useParams()

    const project = works.find(work => work.title === params.title);

    return (
        <div className='min-h-[80vh] mt-20 px-10 sm:px-5 flex flex-col items-center'>
            <div className='flex justify-center items-center sm:flex-col gap-10'>
                <div className='w-[50%] sm:w-full flex flex-col gap-4'>
                    <img src={project.image} className='h-72'/>
                </div>
                <div className='w-[50%] sm:w-full flex flex-col gap-4'>
                    <Divider>Description</Divider>
                    <h1 className='font-[500] text-xl text-center'>
                        {project.detailedDescription}
                    </h1>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='pt-10 flex justify-center gap-4'>
                    <a
                    href={project.github}
                    target='_blank' 
                    rel="noopener noreferrer" >
                        <Button
                        containerClassName="bg-rare">
                            <div className='flex items-center justify-center gap-2 px-10'>
                                <img src={github} className='size-7'/> GitHub
                            </div>
                        </Button>
                    </a>
                    <a 
                    href={project.live}
                    target='_blank' 
                    rel="noopener noreferrer" >
                        <Button
                        containerClassName="bg-rare">
                            <div className='flex items-center justify-center gap-2 px-10'>
                                <img src={link} className='size-7'/> Live demo
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
            <div className='mt-10'>
                <Divider>Tech Stacks</Divider>
                <div className='flex justify-center gap-3 flex-wrap items-center'>
                    {
                        project.technologies.map((technology, index) => (
                            <TechCard tech={technology} index={index} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;