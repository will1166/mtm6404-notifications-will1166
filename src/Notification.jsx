import React from "react";

function Notification ({ children, onClear }) {
    return (
        <div className="notification-card">
            <div>
                {children}
            </div>

            <button type="button" className="clear-btn" onClick={onClear}>
                Clear
            </button>
        </div>
    );
}

export default Notification;