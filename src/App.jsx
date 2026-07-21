import React, { useState } from 'react';
import initialNotifications from './notifications';
import Notification from './Notification';
import './App.css';

function App() {
  // 1. Initialize state
  const [notifications, setNotifications] = useState(initialNotifications);

  // 2. Clear individual notification by filtering out its ID
  const handleClearIndividual = (id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. Clear all notifications at once
  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="app-container">
      {/* Header section with text and Clear All button grouped together */}
      <div className="header">
        <div>
          <h1>Notifications</h1>
          <p className="notification-count">
            You have {notifications.length} notification
            {notifications.length === 1 ? '' : 's'}
          </p>
        </div>

        {/* Clear All button */}
        {notifications.length > 0 && (
          <button type="button" className="clear-all-btn" onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>

      {/* Render notifications list */}
      <div>
        {notifications.length === 0 ? (
          <p className="empty-state">No notifications to display.</p>
        ) : (
          notifications.map((item) => (
            <Notification
              key={item.id}
              onClear={() => handleClearIndividual(item.id)}
            >
              {/* Passed directly as props.children */}
              <h3>{item.name}</h3>
              <p>{item.message}</p>
            </Notification>
          ))
        )}
      </div>
    </div>
  );
}

export default App;