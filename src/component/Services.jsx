import { services } from "../Constant";
import SectionWrapper from "../Hoc/SectionWrapper";


const Services = () => {
    return (
        <div className="bg-primary py-20 relative w-full">
            <h1 className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]">
                    WHAT I DO
                </h1>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className="w-full flex justify-around mt-[60px] mx-[px] sm:flex-col sm:justify-center sm:items-center gap-none">
                {
                    services.map((service, index) => (
                        <div key={index} className="relative flex flex-col border-[1px] border-secondary w-[33%] sm:w-[80%] sm:my-[2px] items-center justify-center top-0 left-0 right-0 buttom-0 before:content-[''] before:absolute before:h-[8px] before:bg-primary before:w-[100%] before:-top-1 before:m-auto before:left-0 before:right-0 after:content-[''] after:absolute after:h-[8px] after:bg-primary after:w-[100%] after:-bottom-2 hover:before:w-[0%] before:transition-all before:duration-1000 hover:after:w-[0%] after:transition-all after:duration-1000">
                            <img src={service.icon} alt="web services" height="150" width="150"/>
                            <h1 className="text-center text-[20px] font-medium">{service.title}</h1>
                            <br/>
                            <p className="text-center p-[10px] sm:hid">{service.description}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Services;