import React from 'react';
import { textVariant } from '../../utils/motion';
import { motion } from 'framer-motion'

const Divider = ({children}) => {
    return (
        <div className='relative'>
            <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px] mt-10 uppercase" >
                {children}
            </p>
            <div className=" absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
        </div>
    );
};

export default Divider;