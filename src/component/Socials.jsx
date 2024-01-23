import { socials } from "../Constant";
import { SectionWrapper } from "../Hoc";

const Socials = () => {
    return (
        <div>
            <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px] sm:pt-5" >
                    Let’s Get Social
            </p>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className="flex justify-center w-full">
            <div className="flex max-w-6xl w-[95vw] justify-evenly gap-3 py-10">
                {
                    socials.map((social, index) => (
                        <div key={index} className="h-[14vh] sm:h-[10vh]  w-[18vw] flex justify-center items-center hover:h-[16vh] sm:hover:h-[12vh] duration-500" style={{backgroundColor: social.bg}}>
                            <a href={social.link} target='_blank' rel="noopener noreferrer">
                                <img src={social.icon} className="h-5 w-5"/>
                            </a>
                        </div>
                    ))
                }
            </div>
            </div>
            <p className="text-center font-[400] py-20">Copyright &copy; 2024 Chidera Obuegbe</p>
        </div>
    );
};

export default SectionWrapper(Socials);