import React, {Component} from "react";
import {  HiChatAlt, HiAcademicCap, HiOutlineClipboardList, HiUserCircle, HiOutlineBriefcase, HiInformationCircle} from "react-icons/hi";
import AboutMe from "./aboutme";
import ContactMe from "./contactme";
import Education from "./education";
import Experience from "./experience";
import Resume from "./resume";
import WebsiteInfo from "./websiteinfo";

class Navbar extends React.Component<{}, {page: string}> {

    constructor(props: any){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="sidebar-main">
                    <a href="/"><SideBarIcon icon={<HiUserCircle size="50" />} text="About Me"/> </a>
                    <a href="/education"><SideBarIcon icon={<HiAcademicCap size="50" />} text="My Education"/></a>
                    <a href="/resume"><SideBarIcon icon={<HiOutlineClipboardList size="50" />} text="Resume"/></a>
                    <a href="/workexperience"><SideBarIcon icon={<HiOutlineBriefcase size="50" />} text="Experience"/></a>
                    <a href="/contactme"><SideBarIcon icon={<HiChatAlt size="50" />} text="Contact Me!"/></a>
                    <a href="/aboutwebsite"><SideBarIcon icon={<HiInformationCircle size="50" />} text="Website Info"/></a>
                </div>
        </div>
        )
    }
}
  
const SideBarIcon = ({ icon, text }:any) => {
    return(
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default Navbar
