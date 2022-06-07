import FinnPicture from "../Images/finnpic.png"


const AboutMe = () => {
    return(
    <div className="navpage text-center">
        
        <img className=
            "rounded-full items-center mx-auto mt-4 w-60 mb-4 shadow-md p-[2px] bg-white" 

            src={FinnPicture}/>
        
        <h1 className="
            text-white text-3xl transition-all 
            duration-100 scale-100 origin-top
            ">
        Hello, my name is Finnegan McGuire</h1>
        <br/>
        <div className="bg-gray-900 text-white mx-auto w-[50%]">
            <p>
                Short description about me will go here
            </p>
        </div>
    </div>
    )
}

export default AboutMe
