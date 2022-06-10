import { FaReact, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiTypescript} from "react-icons/si"

const WebsiteInfo = () => {
    return(
        <div className="background-main">
            <br/>
            <br/>
            <div className="py-5 sm:py-4 px-10 sm:px-2 sm:absolute sm:right-5 max-w-[70%] mx-auto bg-white rounded-sm shadow-lg">
                    <p className="font-bold text-xl py-2">This website was built with...</p>
                    <div className="mx-1 py-4 bg-gray-800 rounded-xl grid grid-cols-4 sm:grid-cols-2 sm:px-2 origin-bottom">
                        <div className="mx-auto text-white"><FaReact className="mx-auto" size="40"/><p>React</p></div>
                        <div className="mx-auto text-white"><SiTailwindcss className="mx-auto" size="40"/><p>TailwindCSS</p></div>
                        <div className="mx-auto text-white"><FaNodeJs className="mx-auto" size="40"/><p>Node JS</p></div>
                        <div className="mx-auto text-white"><SiTypescript className="mx-auto" size="40"/><p>Typescript</p></div>
                    </div>
            </div>       
        </div>
    )
}

export default WebsiteInfo
