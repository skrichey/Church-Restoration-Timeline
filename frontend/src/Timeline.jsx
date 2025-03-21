// src/Timeline.jsx
import React, { useState } from 'react';
import EventCard from './EventCard'; // Import the EventCard component

const timelineData = [
  {
    date: '1820',
    event: 'The First Vision',
    location: 'Palmyra, New York',
    description: 'Joseph Smith, as a 14-year-old boy, was seeking guidance on which church to join. He prayed in a grove near his home in the woods. In response, he saw a vision where God the Father and Jesus Christ appeared to him. This vision revealed the nature of God and the divine personages, debunking the traditional Christian concept of the Trinity and setting the stage for the Restoration of the gospel.',
    image: 'FirstVision.jpg',
    significance: 'This event marked the beginning of the Restoration of the gospel of Jesus Christ. It revealed that God and Jesus Christ are distinct beings, unlike the traditional Christian belief in the Trinity, and confirmed the need for the Restoration.',
    id: 'event1'
  },
  {
    date: '1823',
    event: "The Angel Moroni's Visit",
    location: 'Palmyra, New York',
    description: 'In the fall of 1823, Joseph Smith was visited by the angel Moroni three times. Moroni told him about a set of ancient gold plates, which were buried in a nearby hill, and their importance in restoring the gospel. The angel instructed Joseph to return to the hill after four years to retrieve the plates.',
    image: 'angel-moroni.jpg',
    significance: 'This event initiated the process that would lead to the translation of the Book of Mormon, one of the foundational texts of the Restoration. It marked the beginning of Joseph’s calling as a prophet and translator.',
    id: 'event2'
  },
  {
    date: '1827–1829',
    event: 'The Translation of the Book of Mormon',
    location: 'Harmony, Pennsylvania',
    description: 'Using the golden plates and the Urim and Thummim (a seer stone), Joseph Smith translated the Book of Mormon with the help of his scribe, Oliver Cowdery. The translation process took place in Harmony, where Joseph and Emma Smith lived, and involved intense work over a couple of years.',
    image: 'book-of-mormon-translation.jpg',
    significance: 'The translation of the Book of Mormon was a pivotal moment in the Restoration, as it brought forth the writings of ancient prophets and provided the doctrine and teachings needed to establish the restored church.',
    id: 'event3'
  },
  {
    date: '1829',
    event: 'The Restoration of the Priesthood',
    location: 'Near Harmony, Pennsylvania',
    description: 'After Joseph Smith and Oliver Cowdery had translated the Book of Mormon, they were visited by John the Baptist, who conferred upon them the Aaronic Priesthood, giving them authority to baptize. Later, Peter, James, and John appeared and restored the Melchizedek Priesthood, granting them the authority to administer higher ordinances.',
    image: 'restoration-priesthood.jpg',
    significance: 'The restoration of the priesthood provided Joseph Smith and his associates the divine authority needed to establish ordinances, such as baptism and the laying on of hands, essential for the Church’s function and the salvation of its members.',
    id: 'event4'
  },
  {
    date: '1830',
    event: 'The Organization of the Church',
    location: 'Fayette, New York',
    description: 'On April 6, 1830, the Church of Christ was formally organized. This marked the official establishment of the restored Church with Joseph Smith as its prophet and leader. The organization followed the pattern found in the New Testament, with officers such as apostles, prophets, teachers, and deacons.',
    image: 'organization-church.jpg',
    significance: 'This event marked the formal beginning of the Restoration, establishing the Church that would eventually spread worldwide. It was a critical step in the Lord\'s plan to restore all things in preparation for the Second Coming.',
    id: 'event5'
  },
  {
    date: '1830',
    event: 'The Publication of the Book of Mormon',
    location: 'Palmyra, New York',
    description: 'The Book of Mormon was published in English by E.B. Grandin, a printer in Palmyra, in 1830. It became a key text of the Church, which spread its teachings and doctrines to both members and prospective converts.',
    image: 'book-of-mormon-publication.jpg',
    significance: 'The publication of the Book of Mormon provided a foundational text for the Church of Jesus Christ of Latter-day Saints and was used to guide the doctrines, teachings, and missionary efforts of the early saints.',
    id: 'event6'
  },
  {
    date: '1830–1831',
    event: 'The First Missionary Journey',
    location: 'New York, Ohio, and surrounding areas',
    description: 'Early leaders of the Church, including Samuel Smith and Parley P. Pratt, took the Book of Mormon to new areas, preaching the gospel and gaining converts, including Sidney Rigdon, a prominent preacher in Ohio.',
    image: 'first-missionary-journey.jpg',
    significance: 'These early missionary efforts helped spread the gospel and laid the groundwork for the worldwide missionary system that the Church would eventually develop.',
    id: 'event7'
  },
  {
    date: '1831',
    event: 'The Law of Consecration',
    location: 'Kirtland, Ohio',
    description: 'Joseph Smith received a revelation outlining the Law of Consecration, which called for the Saints to dedicate their time, talents, and possessions to the building up of Zion. Members were asked to live a communal lifestyle, with resources shared for the benefit of the Church and its mission.',
    image: 'law-of-consecration.jpg',
    significance: 'The Law of Consecration was a precursor to later temple doctrines and practices. It also shaped the early economic and social practices of the Church, which focused on living the gospel through communal efforts.',
    id: 'event8'
  },
  {
    date: '1832',
    event: 'The Vision of the Celestial Kingdom',
    location: 'Hiram, Ohio',
    description: 'Joseph Smith and Sidney Rigdon had a vision in which they saw the three degrees of glory—the Celestial, Terrestrial, and Telestial kingdoms. This vision provided clarification on the afterlife and the nature of salvation, teaching that not all who are saved go to the same place, but rather, they are assigned to kingdoms based on their deeds and beliefs.',
    image: 'celestial-kingdom-vision.jpg',
    significance: 'The vision deepened Latter-day Saint doctrine regarding the afterlife, offering a more inclusive view of salvation and clarifying the distinctions between different degrees of glory.',
    id: 'event9'
  },
  {
    date: '1836',
    event: 'The Kirtland Temple Dedication',
    location: 'Kirtland, Ohio',
    description: 'On March 27, 1836, the Kirtland Temple was dedicated, marking the first temple built by Latter-day Saints. During the dedication, Joseph Smith and others witnessed heavenly manifestations, including the appearance of Jesus Christ.',
    image: 'kirtland-temple.jpg',
    significance: 'The Kirtland Temple was significant as the first of many temples that would be constructed by the Saints. It also marked the restoration of temple ordinances, which would become a vital part of Latter-day Saint worship.',
    id: 'event10'
  },
  {
    date: '1836',
    event: 'The Coming of Elijah',
    location: 'Kirtland, Ohio (Kirtland Temple)',
    description: 'On April 3, 1836, Elijah the prophet appeared in the Kirtland Temple and restored the sealing power, which allows for families to be sealed together for eternity.',
    image: 'coming-of-elijah.jpg',
    significance: 'Elijah’s visit marked the restoration of a key priesthood authority necessary for eternal family relationships, which is central to Latter-day Saint teachings on eternal families.',
    id: 'event11'
  },
  {
    date: '1835',
    event: 'The Book of Doctrine and Covenants',
    location: 'Kirtland, Ohio',
    description: 'The first edition of the Doctrine and Covenants was published in 1835, containing many of the revelations received by Joseph Smith, particularly those guiding the organizational structure and practices of the Church.',
    image: 'doctrine-and-covenants.jpg',
    significance: 'This book became one of the standard works of the Church, alongside the Bible, the Book of Mormon, and the Pearl of Great Price. It provided essential teachings and guidelines for the Church\'s organization and doctrine.',
    id: 'event12'
  },
  {
    date: '1835',
    event: 'The First Presidency and the Twelve Apostles',
    location: 'Kirtland, Ohio',
    description: 'Joseph Smith called the Twelve Apostles, a group of leaders tasked with spreading the gospel and organizing the Church’s missionary efforts.',
    image: 'first-presidency.jpg',
    significance: 'The calling of the Twelve Apostles established the leadership structure for the Church and contributed to its expansion into new areas.',
    id: 'event13'
  },
  {
    date: '1836',
    event: 'The Nauvoo Era Begins',
    location: 'Nauvoo, Illinois',
    description: 'After being driven out of Missouri, the Saints settled in Nauvoo, Illinois. During this period, Joseph Smith organized the Church and its leaders, expanding its influence. It was here that many of the Church’s most sacred teachings, including the endowment, were introduced.',
    image: 'nauvoo-era.jpg',
    significance: 'Nauvoo became a central focus for the Church, with the construction of the Nauvoo Temple and the rapid growth of the Church both numerically and doctrinally. It marked a period of significant development for the Saints.',
    id: 'event14'
  },
  {
    date: '1844',
    event: 'Joseph Smith\'s Martyrdom',
    location: 'Carthage, Illinois',
    description: 'On June 27, 1844, Joseph Smith and his brother Hyrum were martyred by a mob while in jail in Carthage, Illinois. This marked the tragic and pivotal end of Joseph\'s life and ministry.',
    image: 'martyrdom.jpg',
    significance: 'Joseph Smith’s martyrdom solidified his role as a prophet and martyr in Latter-day Saint theology. It also led to a period of leadership transition, with Brigham Young assuming leadership and guiding the Saints westward.',
    id: 'event15'
  }
  // Add additional events following this pattern if needed...
];

const Timeline = () => {
    const [openEvent, setOpenEvent] = useState(null); // Track the open event
  
    const handleToggle = (eventId) => {
      // If the clicked event is already open, close it; otherwise, open it
      setOpenEvent(openEvent === eventId ? null : eventId);
    };
  
    return (
      <div className="timeline">
        <div className="timeline-events">
          {timelineData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isOpen={openEvent === event.id}
              onToggle={() => handleToggle(event.id)}  // Pass toggle handler
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;
