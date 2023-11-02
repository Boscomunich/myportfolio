import { styles } from '../styles'
import { socials } from '../Constant'
import {ComputerCanvas} from '../canvas'


const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto sm:h-[150vh]'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex justify-between items-center sm:flex-col sm:items-center sm:w-[100vw]` }>
                <div className=' flex flex-col text-4xl font-bold tracking-wide w-[50vw] h-[80%] sm:w-[80vw]'>
                    <h1><span className='text-secondary '>CHIDERA</span>  OBUEGBE</h1>
                    <h2 className='text-2xl font-medium'>Full Stack Web Developer</h2>
                    <div className='flex gap-3 text-3xl font-light items-center my-10 sm:text-[18px]'>
                    {
                        socials.map((social, index) => (
                            <div key={index} className='flex w-[40px] overflow-hidden duration-1000 transition-all hover:w-[200px] sm:hover:w-[140px]'><img src={social.icon} width={40}/>{social.name}</div>
                        ))
                    }
                    </div>
                        <button className='my-10 text-[20px] font-extralight z-[1] bg-none border-2 border border-secondary w-[50%] text-center relative before:overflow-hidden before:w-[0%] before:h-[100%] before:content-[""] before:z-[-1] before:bg-secondary before:absolute before:left-0  ease-in before:duration-500 hover:before:w-[100%]'> View My Work</button>
                </div>
                <ComputerCanvas/>
            </div>
        </section>
    );
};

export default Hero;