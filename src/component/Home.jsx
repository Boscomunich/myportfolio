import Experience  from './Experience'
import Hero  from './Hero'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import Faq from './Faq'
import Tech from './Techs'

const Home = () => {
    return (
    <div className='bg-primary'>
        <Hero/>
        <Services/>
        <Experience/>
        <About/>
        <Faq/>
        <Tech/>
        <Contact/>
    </div>
    );
};

export default Home;