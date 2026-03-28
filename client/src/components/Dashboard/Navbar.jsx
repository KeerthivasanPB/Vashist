import React, { useState, useRef, useEffect } from "react";
import CreateJoinMenu from "./CreateJoinMenu";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar">

            <h2 className="logo">Classroom</h2>

            <div className="nav-actions" ref={menuRef}>
                <button className="join-btn" onClick={() => setOpen(!open)}>
                    +
                </button>

                {open && <CreateJoinMenu />}
            </div>

        </div>
    );
};

export default Navbar;