
import React from 'react';

const EventCard = ({ event, onToggle, isOpen }) => {
  return (
    <div className="timeline-section" id={event.id}>
      <div className="event-image">
        <img src={`/${event.image}`} alt={event.event} />
      </div>

      <div className="event-text">
        <h2>{event.date}: {event.event}</h2>
        <p>Location: {event.location}</p>

        <button className="show-details-btn" onClick={onToggle}>
          {isOpen ? 'Hide Details' : 'Show Details'}
        </button>

        {isOpen && (
          <div className="event-details">
            <p>{event.description}</p>
            <p><strong>Significance:</strong> {event.significance}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
