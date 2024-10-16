import { motion } from 'framer-motion';

const Divider = ({children}) => {
    return (
        <div className='relative overflow-hidden text-center h-[40px]'>
            <motion.div
            initial='initial'
            whileHover='hovered'
            className='uppercase text-[24px] font-semibold'>
                <div>
                    {
                        children.split("").map((l, i) => {
                            return (
                            <motion.span key={i}
                            variants={{
                                initial: {
                                    y: 0
                                },
                                hovered: {
                                    y: "-100%"
                                }
                            }}
                            transition={{
                                delay: 0.02 * i,
                                ease: 'easeInOut'
                            }}
                            className='inline-block'>
                                {l}
                            </motion.span>
                            )
                        })
                    }
                </div>
                <div className='absolute inset-0 text-secondary'>
                    {
                        children.split("").map((l, i) => {
                            return (
                            <motion.span key={i}
                            variants={{
                                initial: {
                                    y: '100%'
                                },
                                hovered: {
                                    y: 0
                                }
                            }}
                            transition={{
                                delay: 0.02 * i,
                                ease: 'easeInOut'
                            }}
                            className='inline-block'>
                                {l}
                            </motion.span>
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    );
};

export default Divider;