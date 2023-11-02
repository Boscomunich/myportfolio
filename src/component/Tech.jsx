import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../Hoc';
import { technologies } from '../Constant';


const Tech = () => {
    return (
        <>
        <h1 className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]">
                My Tech Stack
                </h1>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
            {technologies.map((technology) => (
                <div key={technology.name}className='w-28 h-28 '>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
        </>
    );
};

export default SectionWrapper (Tech);