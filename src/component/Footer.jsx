import { Link } from "react-router-dom";
import { logo } from '../assets'


export default function Footer () {
    return (
        <div className="flex justify-start items-center gap-5 w-full pt-10">
            <div>
                <img src={logo} className='size-24'/>
            </div>
            <h1
            className=" gap-2 text-lg font-[400] text-gray-400">
                &copy; 2024 Boscomunich. All rights reserved.
            </h1>
        </div>
    )
}