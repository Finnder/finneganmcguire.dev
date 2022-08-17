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
                I am a developer who is currently attending school & looking for an internship! On this website you will find different tabs on the navbar. These tabs will include my&nbsp;
                <span className="font-bold text-green-200 hover:text-green-100 cursor-pointer"><a>Resume</a></span>,&nbsp;
                <span className="font-bold text-purple-200 hover:text-purple-100 cursor-pointer">Education</span>,&nbsp;
                <span className="font-bold text-orange-200 hover:text-orange-100 cursor-pointer">Work Experience</span>, and some&nbsp;
                <span className="font-bold text-red-200 hover:text-red-100 cursor-pointer">Website Info</span>.<br/>
            </p>
        </div>

        <div className="footer">
            <br/>
            <br/>
            <br/>
            <div className="icons mx-auto w-[fit-content] flex gap-4">
                <a href="https://github.com/Finnder"><BsGithub className="text-white hover:text-black transition-all" size={50}/></a>
                <a href="https://www.linkedin.com/in/finnegan-mcguire"><BsLinkedin className="text-white hover:text-black transition-all" size={50}/></a>
            </div>
        </div>
    </div>
    )
}

export default AboutMe
