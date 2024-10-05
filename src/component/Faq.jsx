import clsx from 'clsx';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { textVariant } from '../utils/motion';
import Divider from './reusables/Divider';

const faq = [
    {
        id: 1,
        question: 'What technologies do you specialize in?',
        ans: 'I specaial in using React and it Frameworks to build frontend interface and using library like Expressjs, Nestjs, Flask, And FastApi and databases MongoDB and postgres for backend. I also use solution like firebase, appwrite, supabase for databases and authentication.'
    },
    {
        id: 2,
        question: 'What is your development process?',
        ans: 'My development process is structured yet flexible, starting with an initial consultation to understand the client’s needs and goals. I then create a project plan with timelines and deliverables, followed by designing wireframes and prototypes for feedback. During development, I use the latest technologies and best practices, ensuring quality through rigorous testing. After deployment, I provide ongoing support and maintenance, along with training and documentation. I value client feedback for continuous improvements, ensuring the final product exceeds expectations.'
    },
    {
        id: 3,
        question: 'How do you ensure the quality of your work?',
        ans: 'I ensure the quality of my work through a meticulous and structured approach. This begins with thorough planning and clear communication with clients to understand their requirements and expectations. During development, I adhere to best practices and industry standards, writing clean, maintainable code. I conduct rigorous testing, including unit, integration, and user acceptance tests, to identify and resolve any issues. Additionally, I perform code reviews and use automated tools to maintain high standards. Post-deployment, I provide ongoing support and updates to ensure the solution remains robust and effective. Continuous feedback from clients is also crucial, allowing me to make necessary improvements and ensure the final product exceeds expectations.'
    },
    {
        id: 4,
        question: 'How can I hire you?',
        ans: 'Simply send me an email at boscomunich@gmail.com or fill our contact form to reach out to us'
    }
]

const FAQItem = ({ question, ans }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={clsx ("sm:w-full border-rare border shadow-xl rounded-xl px-7 w-[40%] cursor-pointer", isOpen && 'bg-rare')}>
            <div className='flex items-center justify-between h-20 px-7'
            onClick={() => setIsOpen(!isOpen)}>
                <div
                    className={clsx ("text-xl font-medium w-[80%]", isOpen && 'text-secondary transition-colors duration-300')}
                >
                    {question}
                </div>
                <div className={clsx(' faq-icon relative flex items-center justify-center rounded-full size-12 hover:shadow-inner', isOpen && 'after:rotate-0')}>
                    <div className='g-4 size-11/12 rounded-full shadow-lg hover:bg-rare'/>
                </div>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden px-7 pb-7"
            >
                <p className="mt-2">{ans}</p>
            </motion.div>
        </div>
    );
};

const Faq = () => {

    return (
        <section id='Faq'>
        <Divider>FAQ</Divider>
            <div className='flex flex-wrap w-full sm:flex-col justify-center px-5 items-start gap-4 mt-20'>
                {
                    faq.map((item) => (
                        <FAQItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Faq;