import { FaReact, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiTypescript, SiNeovim, SiNetlify} from "react-icons/si"

const WebsiteInfo = () => {
    return(
        <div className="background-main">
            <br/>
             <div className="py-5 sm:py-3 px-10 sm:px-2 max-w-[60%] sm:max-w-[95%] sm:h-[30%] mx-auto bg-white rounded-sm shadow-lg">
                    <p className="py-2 text-xl font-bold">This website was built with...</p>
                    <div className="mx-1 py-4 sm:py-5 bg-gray-800 rounded-xl grid grid-cols-4 sm:h-[80%] sm:grid-cols-2 sm:px-2 origin-bottom">
                        <div className="mx-auto text-white"><FaReact className="mx-auto" size="40"/><p>React JS</p></div>
                        <div className="mx-auto text-white"><SiTailwindcss className="mx-auto" size="40"/><p>TailwindCSS</p></div>
                        <div className="mx-auto text-white"><FaNodeJs className="mx-auto" size="40"/><p>Node JS</p></div>
                        <div className="mx-auto text-white"><SiTypescript className="mx-auto" size="40"/><p>Typescript</p></div>
                    </div>
                </div>      
            <br/>
            <div className="py-5 sm:py-1 px-10 sm:px-2 max-w-[60%] sm:max-w-[95%] sm:h-[20%] mx-auto bg-white rounded-sm shadow-lg">
                    <p className="py-2 text-xl font-bold">Text Editor Used</p>
                    <div className="mx-1 py-4 bg-gray-800 rounded-xl sm:h-[70%] sm:px-2 origin-bottom">
                        <div className="mx-auto text-white"><SiNeovim className="mx-auto" size="60"/><p>Neovim</p></div>
                    </div>
            </div>  
            <br/>
            <div className="py-5 sm:py-1 px-10 sm:px-2 max-w-[60%] sm:max-w-[95%] sm:h-[20%] mx-auto bg-white rounded-sm shadow-lg">
                    <p className="py-2 text-xl font-bold">Hosted By</p>
                    <div className="mx-1 py-4 bg-gray-800 rounded-xl sm:h-[70%] sm:px-2 origin-bottom">
                        <div className="mx-auto text-white"><SiNetlify className="mx-auto" size="60"/><p>Netlify</p></div>
                    </div>
            </div>  
            <br/>
        </div>
    )
}

export default WebsiteInfo
