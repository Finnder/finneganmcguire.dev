import AppLogo from "../Images/app-state-block-a-logo-600px.png"
import FinnPhoto from "../Images/finnpic.png"

const Education = () => {
    return(
    <div className="background-main">
        <br/>    
        <div className="bg-yellow-400 max-w-5xl sm:max-w-[97%] mx-auto py-4 rounded-lg">
            <h1 className="text-black text-5xl sm:text-2xl text-bold font-serif">Appalachian State University</h1>
            <br/>
            <div className="bg-white grid grid-cols-2 p-5">
                <div className="bg-gray-400 rounded-xl p-5"><img src={AppLogo}/></div>           
                <div className="bg-gray-700 rounded-xl p-4 text-white"><img className="border border-white" src={FinnPhoto}/></div>           
            </div>
            <p className="text-3xl py-3 sm:text-lg">Currently Attending Appalachian State University</p>
            <p className="text-xl py-1 sm:text-md">Currently a <strong>Jr</strong>.</p>
        </div>
    </div>
    )
}

export default Education
