import { services, stacks } from "../Constant";
import { Element } from "react-scroll";
import Tilt from "./Tilt";
import Divider from "./reusables/Divider.jsx";


const Services = () => {
    return (
        <Element name="Services">
            <div className="bg-primary py-20 relative w-full">
                <Divider>services</Divider>

                <div className=" flex flex-col justify-center items-center relative mt-10">
                    <div className="flex sm:flex-col md:flex-col justify-center item-center w-[80%] gap-5">
                        {services.map(({ id, icon, title, description }) => (
                        <div
                        key={id}
                        className="flex p-1 flex-col items-center w-full lg:w-[50%] card-wrapper"
                        >
                            <div className="card-content flex flex-col justify-center p-10 items-start mx-10">
                                <div className="mb-12 flex items-center justify-center flex-col">
                                    <img
                                    src={icon}
                                    className="size-28 object-contain"
                                    alt={title}
                                    />
                                </div>
                                <h1 className="text-2xl text-secondary font-bold">
                                    {title}
                                </h1>
                                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{description}
                                </p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="relative w-[90%] flex flex-wrap justify-center rounded-xl gap-5">
                        {stacks.map((content) => (
                            <Tilt {...content}/>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Services;