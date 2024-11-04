import Experience  from './Experience'
import Hero  from './Hero'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import Faq from './Faq'
import Work from './Work'

const Home = () => {
    return (
    <div
    className='bg-primary relative'>
        <Hero />
        <Services />
        <Work/>
        <Experience/>
        <About/>
        <Faq/>
        <Contact/>
        <hr className='border border-secondary'></hr>
    </div>
    );
};

export default Home;