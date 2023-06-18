import React from 'react';
import './Navbar.css'; // Import the CSS file


const Navbar = () => {
    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav>
            <ul>
            <li>
                <button onClick={() => scrollToSection('about-section')}>
                About me
                </button>
            </li>
            <li>
                <button onClick={() => scrollToSection('portfolio-section')}>
                Portfolio
                </button>
            </li>
            <li>
                <button onClick={() => scrollToSection('contact-section')}>
                Contact
                </button>
            </li>
            </ul>
        </nav>
);
};
export default Navbar;