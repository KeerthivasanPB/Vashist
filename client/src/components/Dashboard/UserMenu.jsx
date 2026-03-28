import React, { useState, useRef, useEffect } from "react";
import UserDropdown from "./UserDropdown";
import "./UserMenu.css";

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
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
        <div className="user-menu" ref={menuRef}>

            {/* Clickable Profile Row */}
            <div onClick={() => setOpen(!open)} style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                <div className="avatar">R</div>

                <div>
                    <p className="user-name">Rohit</p>
                    <span className="user-sub">Student</span>
                </div>

            </div>

            {/* Dropdown */}
            {open && <UserDropdown />}

        </div>
    );
};

export default UserMenu;