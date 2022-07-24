import FinnPicture from "../Images/finnpic.png"
import { Typewriter } from "react-simple-typewriter"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const AboutMe = () => {
    return(
        <div className="py-20 background-main">
        <img className="rounded-full items-center mx-auto w-[250px] mb-4 shadow-md p-[2px] bg-white" src={FinnPicture}/>
        <h1 className="
            text-white text-3xl sm:text-[26px] transition-all 
            duration-100 scale-100 origin-top w-[fit-content]
            mx-auto
            ">
            Hello, my name is <br/><strong><Typewriter
            cursor
            cursorStyle="|"
            words={['Finn McGuire']}
            delaySpeed={3000}
        /></strong></h1>
        <br/>
        <div className="border border-white rounded-md bg-gray-800 text-white max-w-xl sm:w-[90%] p-6 mx-auto h-[fit-content]">
            <p className="p-2">
                I am a front-end developer who is ready for work! On this website you will find different tabs on the navbar. These tabs will include my&nbsp;
                <span className="font-bold text-green-200">Resume</span>,&nbsp;
                <span className="font-bold text-purple-200">Education</span>,&nbsp;
                <span className="font-bold text-orange-200">Work Experience</span>, and some&nbsp;
                <span className="font-bold text-red-200">Website Info</span>.<br/>
            </p>
        </div>

        <div className="footer">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="icons mx-auto w-[fit-content] flex gap-4">
                <a href="https://github.com/Finnder"><BsGithub className="text-white" size={50}/></a>
                <a href="https://www.linkedin.com/in/finnegan-mcguire"><BsLinkedin className="text-white" size={50}/></a>
            </div>
        </div>
    </div>
    )
}

export default AboutMe
