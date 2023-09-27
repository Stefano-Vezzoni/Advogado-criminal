import { useEffect, useState } from 'react';
import './Sidebar.modules.css';

export function Sidebar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const home = document.getElementById("home");
            const experience = document.getElementById("experience");
            const myWork = document.getElementById("my-work");
            const contact = document.getElementById("contact");

            if (
                home &&
                experience &&
                myWork &&
                scrollY >= home.offsetTop &&
                scrollY < experience.offsetTop
            ) {
                setActiveSection("home");
            } else if (
                experience &&
                myWork &&
                scrollY >= experience.offsetTop &&
                scrollY < myWork.offsetTop
            ) {
                setActiveSection("experience");
            } else if (
                myWork &&
                contact &&
                scrollY >= myWork.offsetTop &&
                scrollY < contact.offsetTop
            ) {
                setActiveSection("my-work");
            } else if (contact && scrollY >= contact.offsetTop) {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="line"></div>
            <span className={`dot ${activeSection === "home" ? "sectionActive" : ""}`}></span>
            <span className={`dot ${activeSection === "experience" ? "sectionActive" : ""}`}></span>
            <span className={`dot ${activeSection === "my-work" ? "sectionActive" : ""}`}></span>
            <span className={`dot ${activeSection === "contact" ? "sectionActive" : ""}`}></span>
            <div className="line-after-circles"></div>
        </div>
    );
}