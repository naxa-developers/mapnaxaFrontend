import React, { Component } from 'react';
import {
    FaShareAlt,
    FaCloudUploadAlt,
    FaCaretDown,
    FaUserAlt,
    FaPlus,
    FaFilter,
    FaSearch,
    FaTimes,
    FaSchool,
    FaHospital,
    FaRoad
  } from "react-icons/fa";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="fluid-wrapper">
                        <div className="logoHolder">
                            <div className="logo">Map</div>
                        </div>
                        <div className="action-buttons">
                            <button className="nbtn nbtn-primary centered mmr-10">
                                <FaShareAlt className="mmr-5" /> <span> Share</span>
                            </button>
                            <button className="nbtn nbtn-primary centered mmr-10">
                                <FaCloudUploadAlt className="mmr-5" /> <span> Upload</span>
                            </button>
                            <div className="avatar-wrapper">
                                <div className="circle">
                                    <div className="iconholder-circle centered user mmr-5">
                                        {" "}
                                        <FaUserAlt />{" "}
                                    </div>

                                    <span className="mmr-5"> Kumar Shrestha</span>
                                    <FaCaretDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;