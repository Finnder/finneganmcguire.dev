import FinnResume from "../Images/resume.png"
import {GrDocumentDownload} from "react-icons/gr"

const Resume = () => {
    return(
        <div className="background-main">
            <div className="text-center py-20">
                <img className="mx-auto drop-shadow-2xl rounded-lg border border-gray-500 border-2" src={FinnResume}/> 

                <div className="grid grid-cols-3 gap-3 mx-auto w-[30%] p-2">
                    <button className="rounded bg-blue-700 text-white p-2 hover:bg-blue-800 active:bg-blue-600"><GrDocumentDownload className="mx-auto" size="30"/></button>
                    <button className="rounded bg-blue-700 text-white p-2 hover:bg-blue-800 active:bg-blue-600"></button>
                    <button className="rounded bg-blue-700 text-white p-2 hover:bg-blue-800 active:bg-blue-600"></button>
                </div>
                <p className="text-white">Currently Not Live-Updating</p>
            </div>
        </div>
    )   
}

export default Resume
