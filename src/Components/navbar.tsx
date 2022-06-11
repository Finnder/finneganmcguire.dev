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
        this.state = {
            page:"aboutme" // Stores current page data
        }
    }

    render(){
        return(
            <div>
                <div className="sidebar-main">
                    <button onClick={() => {this.setState({page: "aboutme"})}}><SideBarIcon icon={<HiUserCircle size="50" />} text="About Me"/> </button>
                    <button onClick={() => {this.setState({page: "education"})}}><SideBarIcon icon={<HiAcademicCap size="50" />} text="My Education"/></button>
                    <button onClick={() => {this.setState({page: "resume"})}}><SideBarIcon icon={<HiOutlineClipboardList size="50" />} text="Resume"/></button>
                    <button onClick={() => {this.setState({page: "experience"})}}><SideBarIcon icon={<HiOutlineBriefcase size="50" />} text="Experience"/></button>
                    <button onClick={() => {this.setState({page: "contact"})}}><SideBarIcon icon={<HiChatAlt size="50" />} text="Contact Me!"/></button>
                    <button onClick={() => {this.setState({page: "websiteinfo"})}}><SideBarIcon icon={<HiInformationCircle size="50" />} text="Website Info"/></button>
                </div>
            <NavPage page={this.state.page}/>
        </div>
        )
    }
}

class NavPage extends React.Component<any, any> {

    render(){
        let page;

        switch(this.props.page){
        case "aboutme":
            page = <AboutMe/>;
            break;
        case "websiteinfo":
            page = <WebsiteInfo/>;
            break;
        case "education":
            page = <Education/>;
            break;
        case "resume":
            page = <Resume/>;
            break;
        case "experience":
            page = <Experience/>;
            break;
        case "contact":
            page = <ContactMe/>
            break;
        case "info":
            break;
    }

        return(
        <div className="navpage group">
            {page}
        </div>
        )
    }
}

const TopNavBar = () => {
    return(
    <div>
        
    </div>
    )
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
