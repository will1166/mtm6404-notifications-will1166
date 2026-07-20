import React from "react";

function Notification ({ children, onClear }) {
    return (
        <div>
            <div>
                {children}
            </div>

            <button type="button" onClick={onClear}>
                Clear
            </button>
        </div>
    )
}

export default Notification;