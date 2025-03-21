import React from 'react';

const NavBar = ({ onClickEvent }) => {
  const handleClick = (eventId) => {
    const element = document.getElementById(eventId);
    if (element) {
      // Scroll to the event section
      element.scrollIntoView({ behavior: 'smooth' });

      // Wait for the scroll to finish before triggering the "Show Details" button
      setTimeout(() => {
        const showDetailsButton = element.querySelector('.show-details-btn');
        if (showDetailsButton) {
          showDetailsButton.click();  // Trigger the "Show Details" button click
        }
      }, 500); // Delay the click by 500ms to give scroll time to complete
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a onClick={() => handleClick('event1')}> (March 1820) </a></li>
        <li><a onClick={() => handleClick('event2')}> (September 1823) </a></li>
        <li><a onClick={() => handleClick('event3')}> (1827–1829) </a></li>
        <li><a onClick={() => handleClick('event4')}> (May 1829) </a></li>
        <li><a onClick={() => handleClick('event5')}> (March 1830) </a></li>
        <li><a onClick={() => handleClick('event6')}> (April 1830) </a></li>
        <li><a onClick={() => handleClick('event7')}> (1830–1831) </a></li>
        <li><a onClick={() => handleClick('event8')}> (February 1831) </a></li>
        <li><a onClick={() => handleClick('event12')}> (August 1835) </a></li>
        <li><a onClick={() => handleClick('event13')}> (February 1835) </a></li>
        <li><a onClick={() => handleClick('event9')}> (January 1836) </a></li>
        <li><a onClick={() => handleClick('event10')}> (March 1836) </a></li>
        <li><a onClick={() => handleClick('event11')}> (April 1836) </a></li>
        <li><a onClick={() => handleClick('event14')}> (1836-1846) </a></li>
        <li><a onClick={() => handleClick('event15')}> (June 1844) </a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
