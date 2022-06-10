const ContactMe = () => {
    return(
    <div className="background-main">
    <br/>
    <br/>
    <div className="py-5 px-10 max-w-[70%] mx-auto bg-white rounded-sm drop-shadow-xl">
            <p className="font-bold text-xl py-2">Contact Me</p>
            <div className="mx-1 py-4 bg-gray-800 rounded-xl origin-bottom">
                <form>
                    <input type="email" placeholder="Email" className="p-1 peer ..."/>
                        <br/>
                        <br/>
                    <input type="email" placeholder="Name" className="p-1 peer ..."/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ContactMe
