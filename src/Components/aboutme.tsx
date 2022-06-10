import FinnPicture from "../Images/finnpic.png"


const AboutMe = () => {
    return(
        <div className="text-center background-main ">
        <br/> 
        <img className="rounded-full items-center mx-auto w-[250px] mb-4 shadow-md p-[2px] bg-white" src={FinnPicture}/>
        <h1 className="
            text-white text-3xl sm:text-lg transition-all 
            duration-100 scale-100 origin-top
            ">
            Hello, my name is <br/><div className="font-bold">Finn McGuire</div></h1>
        <br/>
        <div className="bg-gray-800 text-white max-w-lg sm:w-[90%] mx-auto">
            <p>
                Short description about me will go here
            </p>
        </div>
    </div>
    )
}

export default AboutMe
