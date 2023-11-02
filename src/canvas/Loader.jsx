import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <p className="text-[20px] text-secondaty font-medium">
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default Loader;