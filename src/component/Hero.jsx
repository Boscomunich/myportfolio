import { styles } from '../styles'
import { socials } from '../Constant'
import { Link } from 'react-router-dom';
import Button from './reusables/Button';
import Photo from './Photo';


const Hero = () => {
    return (
        <section className='w-full h-screen sm:h-auto mx-auto' id="Home">
            <div className={`${styles.paddingX} inset-0 pt-[100px] sm:pt-[100px] flex justify-center items-center sm:flex-col sm:w-[100%]` }>
                <div className=' flex flex-col w-[50%] h-full sm:w-[90%] mt-5'>
                    <p className='font-sans mb-2 '>
                        Fullstack Software Engineer
                    </p>
                    <h1 className='lg:text-4xl text-3xl font-bold'>
                        Hello I’M
                    </h1>
                    <h1 className='lg:text-4xl text-3xl text-secondary font-bold'>
                        Solomon Obuegbe
                    </h1>
                    <h2 className='text-[16px] font-[400]'>
                        I craft seamless digital experiences, from backend to frontend, ensuring every line of code contributes to a cohesive and intuitive user journey. With a passion for both the technical and creative aspects of development, I transform complex requirements into elegant and functional solutions.
                    </h2>
                    <div className='flex gap-3 text-xl font-[400] items-center my-10 sm:text-[16px]'>
                    {
                        socials.map((social, index) => (
                            <a href={social.link} 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            key={index} 
                            className='flex items-center gap-2 w-[30px] overflow-hidden duration-1000 transition-all hover:w-[150px] sm:hover:w-[120px]'>
                                <div className='text-3xl text-secondary'>
                                    {social.icon}
                                </div>
                                {social.name}
                            </a>
                        ))
                    }
                    </div>
                        <Link to='#project'>
                            <Button containerClassName='bg-rare'> 
                                View My Work
                            </Button>
                        </Link>
                </div>
                <div className='w-[50%] h-full md:w-50% sm:mt-10'>
                    <Photo/>
                </div>
            </div>
        </section>
    );
};

export default Hero;