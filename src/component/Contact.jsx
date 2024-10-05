import { motion } from "framer-motion";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { useState } from "react";
import Divider from "./reusables/Divider";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./reusables/Button";

const slidInBottom = {
        hidden: { y: 100, opacity: 0},
        show: {y: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}
const slidInLeft = {
        hidden: { x: -100, opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}
const slidInRight = {
        hidden: { x: 100, opacity: 0},
        show: {x: 0, opacity: 100,
        transition:{
            type: 'tween',
            delay: 0.5,
            duration: 1,
        }
    },
}

const Contact = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async () => {
        try {
        } catch (error) {
            warning(error)
        }
    }

    return (
        <div className="" id="contact">
            <Divider>Contact</Divider>
            <div className="md:flex-col-reverse sm:flex-col-reverse justify-center mx-4 my-10 gap-5 flex">
                <motion.div 
                variants={slidInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="w-[98%] lg:w-[30%] flex flex-col gap-7 p-10 rounded-md">
                    <div>
                        <div className="text-xl font-semibold">
                            Email Address
                        </div>
                        <p className="text-lg font-medium text-gray-400">
                            boscomunich@gmail.com
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Phone Number
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            +2349030683225
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Office
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            Lagos, Nigeria
                        </p>
                    </div>
                    <div>
                        <div className="text-xl font-semibold">
                            Skype Email
                        </div>
                        <p className="text-lg font-medium text-gray-400">            
                            boscomunich@gmail.com
                        </p>
                    </div>
                    <hr/>
                    <div className="text-xl font-semibold">
                        Let’s Get Social
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <TiSocialLinkedin className="h-12 w-12 hover:bg-primary hover:text-white rounded-full"/>
                        <FaXTwitter className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                        <TiSocialInstagram className="h-10 w-10 hover:bg-primary hover:text-white rounded-full"/>
                    </div>
                </motion.div>
                <motion.div 
                variants={slidInRight}
                initial="hidden"
                whileInView="show"
                viewport={{once:true}}
                className="w-[98%] lg:w-[65%] flex flex-col gap-7 p-10 rounded-md">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-wrap gap-5 justify-start sm:justify-center">
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:w-full">
                                <label htmlFor="name" className="text-lg font-medium">
                                    Full name
                                </label>
                                <input
                                type='text'
                                name='name'
                                placeholder="David Wonder"
                                className="border bg-rare border-rare py-4 px-4 focus:border-secondary outline-none rounded-md"
                                onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:w-full">
                                <label htmlFor="email" className="text-lg font-medium">
                                    Email Address
                                </label>
                                <input
                                type='email'
                                name='email'
                                placeholder="DavidWonder@gmail.com"
                                className="border border-rare py-4 px-4 focus:border-secondary bg-rare outline-none rounded-md"
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:w-full">
                                <label htmlFor="number" className="text-lg font-medium">
                                    Phone Number <span className="font-light text-sm text-gray-400">(optional)</span>
                                </label>
                                <input
                                type='number'
                                name='number'
                                placeholder="+1 63535464"
                                className="border border-rare py-4 px-4 focus:border-secondary outline-none rounded-md bg-rare"
                                onChange={(e) => setPhoneNo(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[47%]  min-w-[280px] sm:w-full">
                                <label htmlFor="subject" className="text-lg font-medium">
                                    Subject
                                </label>
                                <input
                                type='text'
                                name='subject'
                                placeholder="Type your subject"
                                className="border border-rare bg-rare py-4 px-4 focus:border-secondary outline-none rounded-md"
                                onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2 w-[97%] sm:w-full">
                                <label htmlFor="message" className="text-lg font-medium">
                                    Message
                                </label>
                                <textarea
                                type='text'
                                name='message'
                                rows="6"
                                placeholder="Enter Your Message"
                                className="border border-rare py-4 px-4 focus:border-secondary outline-none rounded-md bg-rare"
                                onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                        </div>
                        <Button 
                        containerClassName="bg-rare">
                            Send Email
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;