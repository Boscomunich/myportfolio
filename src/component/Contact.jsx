import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef()
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [ loading, setLoading] = useState(false);

    const handleChange = (e) => {}
    const handleSubmit = (e) => {}


    return (
        <>
            <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]">
                    Get In Touch
            </p>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className='lg:mt-20  lg:flex-row flex-col-reverse flex gap-5 overflow-hidden mt-10'>
                <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                initial='hidden'
                animate='show'
                className="flex-[0.75] bg-[#010313] p-8 rounded-2xl">
                    <h3 className={styles.sectionHeadText}>
                        Contact
                    </h3>
                    <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Name
                            </span>
                            <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="what's your name"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Email
                            </span>
                            <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="what's your email"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">
                                Your Message
                            </span>
                            <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="enter your message"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <button type='submit'
                        className="bg-tertiary py-3 px-8 w-fit ou1tline-none font-bold shadow-md shadow-primary rounded-xl">
                            {loading? 'sending' : "send"}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                initial='hidden'
                animate='show'
                className="lg:flex-1 lg:h-auto sm:h-[350px] ">
                    <EarthCanvas/>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Contact); 