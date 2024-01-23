import profile from '../assets/profile.png'

const About = () => {
    return (
        <div className='bg-tertiary py-20' id="About">
            <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px] mt-10" >
                    About Chidera
            </p>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className='flex justify-center py-8 gap-10 items-center'>
                <div className='w-[48vw] sm:w-[80vw] mt-10'>
                    <p>
                        I’m a full stack software engineer based in Nigeria
                        <br/>
                        <br/>
                        I am passionate about creating real elegant looking website. Always keeping it clean and simple with added functionality of user interaction you would like to see.<br/><br/>
                        <ul className="ul">
                            <li>Front End Web Development</li>
                            <li>Back End Web Development</li>
                            <li>Web Design</li>
                            <li>Mobile App Develooment</li>
                            <li>Maintenace and Redesign of website</li>
                        </ul>
                    </p>
                </div>
                <div className='sm:hidden'>
                    <div className='h-80 w-80 rounded-full bg-white flex justify-center items-center'>
                        <img src={profile} className='w-60 h-60 rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;