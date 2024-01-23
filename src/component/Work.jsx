import { project } from "../Constant";
import { github as Github, link as Link } from "../assets";
import { motion } from 'framer-motion'

const slideInLeft = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5 * index,
            type: 'tween',
            duration:0.5
        }
    })
}

const ProjectCard = ({name, github, link, description, icon, index}) => {
    return (
        <motion.div
        variants={slideInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
        className="h-[550px] w-[47%] sm:w-[90vw] border-secondary border flex flex-col items-center gap-5">
            <div className="w-[90%] m-5">
                <img src={icon} alt={name} className="w-full h-[300px]"/>
            </div>
            <p className="m-5">{description}</p>
            <div className="flex justify-center items-center w-full text-sm">
                <a href={github} className="w-[47%] h-10 flex items-center justify-center rounded-md gap-2 p-5 hover:bg-blue-700 hover:scale-110 duration-300 cursor-pointer">
                    <img src={Github} alt="github" className="h-5 w-5"/>
                    <p>Visit Github</p>
                </a>
                <a href={link} className="w-[47%] h-10 flex items-center justify-center rounded-md gap-2 p-5 hover:bg-blue-700 hover:scale-110 duration-300 cursor-pointer">
                    <img src={Link} alt="github" className="h-5 w-5"/>
                    <p>Visit Website</p>
                </a>
            </div>
        </motion.div>
    )
}

const Work = () => {
    return (
        <div id="Project" className="m-20">
            <h1 className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]">
                    My Works
                </h1>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className="w-full flex justify-around mt-[60px] mx-[px] sm:flex-col sm:justify-center sm:items-center gap-none"></div>
            <div className="flex justify-center items-center gap-10 sm:flex-col">
                {
                    project.map((project, index) => (
                            <ProjectCard {...project} index={index} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Work;