const ContactMe = () => {
    return(
    <div className="background-main">
    <br/>
    <br/>
    <div className="py-5 px-10 sm:px-3 max-w-[70%] sm:max-w-[95%] sm:h-[fit-content]  mx-auto bg-white rounded-sm drop-shadow-xl">
            <p className="py-2 text-xl font-bold">Contact Me</p>
            <div className="py-4 mx-1 bg-gray-800 rounded-xl origin-bottom">
                <form>
                    <input type="email" placeholder="Email" className="p-1 peer w-[50%] sm:w-[80%]"/>
                    <br/>
                    <br/>
                    <input type="email" placeholder="Name" className="p-1 peer w-[50%] sm:w-[80%]"/>
                    <br/>
                    <br/>
                    <textarea className="p-3 border-2 drop-shadow-xl w-[50%] sm:w-[80%]"/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ContactMe
