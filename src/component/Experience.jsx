import { VerticalTimeline, VerticalTimelineElement } from 
"react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experiences } from '../Constant';
import { SectionWrapper } from '../Hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#010313', color: '#fff'}}
        contentArrowStyle={{ borderRight: '7px solid #fff'}}
        date={experience.date}
        iconStyle={{ background: experience.iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img src={experience.icon} alt={experience.company_name }className="w-[60%] h-[60%] object-contain"/>
            </div>
        }>
            <div >
                <h3 className="text-white text-[24px] font-bold">   {experience.title}
                </h3>
                <p className="text-secondary text-[16px] font-bold">
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2 ">
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                    className="text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
    return (
        <>
            <motion.div
            variants={textVariant()}>
                <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]">
                    My Experience
                </p>
                <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                    <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                    <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                    </div>
                    <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                    </div>
                </div>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline contentStyle>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'work');