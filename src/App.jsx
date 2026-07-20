import React, { useState } from 'react';
import initialNotifications from './notifications';
import Notification from './Notification';

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
    <div>
      <h1>Notifications</h1>

      {/* Total count of notifications */}
      <h2>
        You have {notifications.length} notification
        {/* Remove "s" if it's only one notification */}
        {notifications.length === 1 ? '' : 's'}
      </h2>

      {/* Clear All button */}
      {notifications.length > 0 && (
        <button type="button" onClick={handleClearAll}>
          Clear All
        </button>
      )}

      {/* Render notifications list */}
      <div>
        {notifications.length === 0 ? (
          <p>No notifications to display.</p>
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