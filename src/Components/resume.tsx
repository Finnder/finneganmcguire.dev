import FinnResume from "../Images/resume.png"
import {GrDocumentDownload} from "react-icons/gr"

const Resume = () => {
    return(
        <div className="background-main">
            <br/>
            <div className="py-10 text-center">
                <img className="mx-auto drop-shadow-5xl max-w-[95%] rounded-lg border-gray-500 border-2" src={FinnResume}/> 
                <br/>
                <div className="p-2 mx-auto">
                    <button className="rounded bg-green-200 group w-[200px] text-white p-2 hover:bg-green-300 active:bg-green-400 sm:hidden">
                        <GrDocumentDownload className="mx-auto" size="30"/>
                    </button>
                </div>
            </div>
        </div>
    )   
}

export default Resume
