import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
    icon,
    children,
    href,
    containerClassName,
    onClick,
    }) => {
    const Inner = () => (
        <>
        <span className="relative flex items-center min-h-[40px] px-4 rounded-2xl hover:border-transparent group-hover:before:opacity-100 overflow-hidden">
            <span className="absolute -left-[1px]">
            <Marker />
            </span>

            <span className="relative base-bold uppercase">
            {children}
            </span>
        </span>

        <span className="glow-before glow-after" />
        </>
    );
    return (
        <button
        className={clsx(
            "relative p-0.5 g5 rounded-2xl shadow-500 group",
            containerClassName,
        )}
        onClick={onClick}
        >
        <Inner />
        </button>
    );
};
export default Button;