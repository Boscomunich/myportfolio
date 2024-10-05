import profile from '../assets/profile.png'
import { motion } from 'framer-motion'
import { contentVariant, textVariant } from '../utils/motion';
import Divider from './reusables/Divider'

const About = () => {
    return (
        <div className='py-20' id="About">
            <Divider>ABOUT</Divider>
            <motion.div 
            variants={contentVariant}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col justify-center py-8 gap-5 items-center'>
                <div className='flex sm:flex-col md:flex-col w-full h-auto py-5 justify-center items-center gap-5'>
                    <div className='flex flex-col items-start justify-center gap-4 p-4 w-[40%] sm:w-[80%] md:w-[60%]'>
                        <h1 className='text-xl font-medium text-secondary'>
                            About Me
                        </h1>
                        <p>
                            I’m Solomon Obuegbe, a passionate Full Stack Software Engineer with a diverse background in both technology and healthcare. I graduated from the ALX Software Engineering program, where I specialized in backend development, and I also hold a degree in Physiotherapy from Nnamdi Azikiwe University Nigeria. My journey from healthcare to tech has equipped me with a unique perspective on problem-solving and user-centric design.
                        </p>
                    </div>
                    <div className='w-[40%] flex justify-center sm:hidden md:hidden'>
                        <img src={profile} className='size-48'/>
                    </div>
                </div>
                <div className='flex sm:flex-col md:flex-col w-full h-auto py-5 justify-center items-start sm:items-center md:items-center gap-5'>
                    <div className='flex flex-col items-start justify-center gap-4 p-4 w-[40%] sm:w-[80%] md:w-[60%]'>
                        <h1 className='text-xl font-medium text-secondary'>
                            My Journey
                        </h1>
                        <p>
                            My career began in the healthcare sector, where I developed a deep understanding of patient care and the importance of seamless, user-friendly experiences. This foundation has greatly influenced my approach to software development. I transitioned into tech through the rigorous ALX SE program, where I honed my skills in both frontend and backend development.
                        </p>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-4 p-4 w-[40%] sm:w-[80%] md:w-[60%]'>
                        <h1 className='text-xl font-medium text-secondary'>
                            Let’s Connect
                        </h1>
                        <p>
                            I’m excited about the opportunity to collaborate on projects that make a difference. Whether you’re looking for a developer to bring your vision to life or a team player to contribute to your next big idea, let’s connect and create something amazing together!
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;