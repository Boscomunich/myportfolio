import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,        
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Tilt = ({name, id, list}) => {

    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;

    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="flex w-auto justify-ceneter flex-wrap px-4 py-12">
        <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            transformStyle: "preserve-3d",
            transform,
        }}
        className="relative h-60 w-48 sm:h-52 sm:w-40 rounded-xl bg-secondary"
        >
        <div
            style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-rare shadow-lg"
        >
            <div
            style={{
                transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold"
            >
                <h1 className="py-5 text-secondary">
                    {name}
                </h1>
                <div className="flex flex-col justify-center items-center text-xl font-medium">
                    {
                        list.map((item, index) => (
                            <div key={index} className="flex justify-start gap-2 items-center">
                                {item.icon}
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </motion.div>
    </div>
    );
};

export default Tilt;