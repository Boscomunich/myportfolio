import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../Hoc'
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef()
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [ loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.send('service_fnrqr8s', 'template_v6xiy8g',{
            from_name: form.name,
            to_name: 'solomon',
            from_email: form.email,
            to_email: 'solomon4chidera@gmail.com',
            message: form.message
        },
        '3PC3g4_ExfxJyL2Zi'
        )
        .then(() => {
            setLoading(false)
            alert('I will get back to you in less than 6hrs')
            setForm({
                name:'',
                email:'',
                messge:''
            })
        }, (error) => {
            setLoading(false)
            console.log(error)
            alert('something went wrong')
        }
    )

    }

    return (
        <section id="Contact">
            <p className="text-center text-[24px] font-bold sm:font-medium sm:text-[16px]" >
                    Get In Touch
            </p>
            <div className="absolute flex justify-center w-[20%] sm:w-[40%] h-[20px] left-[40%] sm:left-[30%] items-center ">
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary "></div>
                <div className="h-[20px] border-secondary border-[2px] w-[30%] bg-secondary">
                </div>
                <div className="h-[10px] border-secondary border-[2px] w-[35%] bg-secondary ">
                </div>
            </div>
            <div className='mt-10   flex-col-reverse flex gap-10 sm:gap-20 overflow-hidden  lg:p-10 sm:p-0'>
                <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                initial='hidden'
                whileInView="show"
                viewport={{once:true}}
                className="flex-[0.75] bg-[#010313] p-8 sm:p-4">
                    <h3 className='font-semibold text-center text-2xl'>
                        Contact
                    </h3>
                    <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-0 flex flex-col gap-2">
                        <label className="flex flex-col">
                            <span className="text-white font-[400] mb-4">
                                Your Name
                            </span>
                            <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="what's your name"
                            className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white outline-none border-none font-[400]"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-[400] mb-4">
                                Your Email
                            </span>
                            <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="what's your email"
                            className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white outline-none border-none font-[400]"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-[400] mb-4">
                                Your Message
                            </span>
                            <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="enter your message"
                            className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white outline-none border-none font-[400]"
                            />
                        </label>
                        <button type='submit'
                        className="bg-tertiary py-3 px-8 w-fit ou1tline-none font-[400] shadow-md shadow-primary">
                            {loading? 'sending' : "send"}
                        </button>
                    </form>
                </motion.div>
                <motion.h1
                variants={slideIn('left', 'tween', 0.2, 1)}
                initial='hidden'
                whileInView="show"
                viewport={{once:true}}
                className=" lg:h-auto sm:h-[100px]  text-center">
                    If you want to get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to solomon4chidera@gmail.com and lets talk.
                </motion.h1>
            </div>
        </section>
    );
};

export default SectionWrapper(Contact); 