import { styles } from '../styles'
import { socials } from '../Constant'
import { HashLink } from 'react-router-hash-link';
import { illustration } from '../assets';


const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto sm:h-[150vh]' id="Portfolio">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] sm:top-[80px] max-w-7xl mx-auto flex justify-between items-center sm:flex-col sm:items-center sm:w-[100vw]` }>
                <div className=' flex flex-col text-4xl font-bold tracking-wide w-[50vw]  sm:w-[80vw]'>
                    <h1 className='sm:text-2xl'><span className='text-secondary '>CHIDERA</span>  OBUEGBE</h1>
                    <h2 className='text-2xl sm:text-xl font-medium'>Full Stack Software Engineer</h2>
                    <a className='flex gap-3 text-3xl font-medium items-center my-10 sm:text-[14px]'>
                    {
                        socials.map((social, index) => (
                            <a href={social.link} target='_blank' rel="noopener noreferrer" key={index} className='flex w-[40px] sm:w-[35px] overflow-hidden duration-1000 transition-all hover:w-[200px] sm:hover:w-[120px]'>
                                <img src={social.icon} width={40}/>{social.name}
                            </a>
                        ))
                    }
                    </a>
                        <HashLink to='#project'>
                            <button className='my-10 sm:my-0 text-[16px] sm:text-[12px] font-extralight z-[1] bg-none border-2 border border-secondary w-[50%] text-center relative before:overflow-hidden before:w-[0%] before:h-[100%] before:content-[""] before:z-[-1] before:bg-secondary before:absolute before:left-0  ease-in before:duration-500 hover:before:w-[100%]'> 
                                View My Work
                            </button>
                        </HashLink>
                </div>
                    <img src={illustration} alt="image" className='w-full h-full sm:w-screen'/>
            </div>
        </section>
    );
};

export default Hero;