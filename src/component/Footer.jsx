import { Link } from "react-router-dom";
import Tech from './Techs'

export default function Footer () {
    return (
        <div className="stcky bottom-0 z-[-100] flex justify-between w-full pt-10">
            <div className=" lg:w-[60%] w-full ">
                Footer
            </div>
            <div className="lg:w-[40%] w-full">
                <Tech/>
            </div>
        </div>
    )
}