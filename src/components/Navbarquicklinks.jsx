import React from 'react';
import './Navbarquicklinks.css';

export const EventLinks = () => {
  const events = [
    "House Party",
    "Birthday Party",
    "Corporate Event",
    "Kitty Party",
    "Anniversary",
    "Wedding Events",
    "Sports/School Events",
    "Bhandara/Langar"
  ];

  return (
    <div className="grid-container">
      {events.map((event, index) => (
        <div className="grid-item" key={index}>
          {event}
        </div>
      ))}
    </div>
  );
}
