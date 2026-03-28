import React from "react";

const UserDropdown = () => {
    return (
        <div className="dropdown-menu">

            <div className="dropdown-item">👤 Profile</div>

            <div className="dropdown-item">⚙️ Settings</div>

            <div className="dropdown-divider"></div>

            <div className="dropdown-item logout">🚪 Log out</div>

        </div>
    );
};

export default UserDropdown;