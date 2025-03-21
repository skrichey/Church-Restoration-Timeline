// src/Timeline.jsx
import React, { useState } from 'react';
import EventCard from './EventCard'; // Import the EventCard component

const timelineData = [
  {
    date: 'March 26, 1820',
    event: 'The First Vision',
    location: 'Palmyra, New York',
    description: 'Joseph Smith, a 14-year-old boy living in Palmyra, was confused about which church to join. In the spring of 1820, he sought guidance through prayer while alone in a secluded grove of trees near his home. In response to his earnest prayer, he experienced a vision where God the Father and Jesus Christ appeared to him in a pillar of light. God the Father pointed to Jesus Christ, saying, "This is My Beloved Son. Hear Him!" In this vision, Joseph learned that all the churches were wrong, and that he was called to restore the true gospel. This event not only revealed the distinct personages of God the Father and Jesus Christ but also set the stage for the Restoration of the gospel and the founding of The Church of Jesus Christ of Latter-day Saints.',
    image: 'FirstVision.jpg',
    significance: 'The First Vision is considered the pivotal event marking the beginning of the Restoration of the gospel of Jesus Christ. It corrected traditional Christian misunderstandings of the Godhead, revealing that God the Father and Jesus Christ are separate and distinct beings. This vision confirmed that Joseph Smith was chosen as the prophet to restore the true teachings and ordinances of the gospel, which had been lost over centuries. The First Vision also confirmed the need for a modern-day prophet and laid the foundation for all subsequent revelations in the Restoration.',
    id: 'event1'
  },
  {
    date: 'September 21, 1823',
    event: "The Angel Moroni's Visit",
    location: 'Palmyra, New York',
    description: 'In the fall of 1823, Joseph Smith, then 17 years old, was visited by the angel Moroni three times over the course of one night. Moroni, a messenger sent by God, revealed to Joseph the existence of a set of ancient gold plates, buried in a hill near his home, which contained the record of the ancient inhabitants of the Americas. Moroni explained that these plates were of great importance and that Joseph was chosen to translate them into English. The angel also taught Joseph about the divine purpose of the plates in restoring the true gospel of Jesus Christ. Moroni instructed Joseph to return to the hill annually on the same date for four years before he would be allowed to retrieve the plates.',
    image: 'MoroniVisits.jpg',
    significance: 'This visit by Moroni marked the beginning of the divine process that would lead to the translation of the Book of Mormon, a foundational text of the Restoration of the gospel. It also marked the commencement of Joseph Smith’s prophetic calling as the instrument through whom the Book of Mormon would be translated and shared with the world. This event confirmed Joseph’s role as a prophet and foreshadowed the coming of additional revelations essential to the Restoration.',
    id: 'event2'
  },
  {
    date: '1827–1829',
    event: 'The Translation of the Book of Mormon',
    location: 'Harmony, Pennsylvania',
    description: 'In 1827, Joseph Smith, having obtained the ancient gold plates from the Hill Cumorah, began the translation process with the help of his scribe, Oliver Cowdery, in Harmony, Pennsylvania, where he and his wife, Emma Smith, had settled. Using the Urim and Thummim, a pair of seer stones provided by God, Joseph translated the engravings on the plates into English over the course of approximately three years. The translation was a collaborative effort, with Oliver Cowdery transcribing what Joseph dictated. The process was often intense, requiring periods of revelation and physical and spiritual exertion. During this time, additional visits from heavenly messengers, such as Moroni, John the Baptist, and Peter, James, and John, further clarified and confirmed the work Joseph was undertaking. The work culminated in the completion of the Book of Mormon, which was published in 1830.',
    image: 'Translating.jpeg',
    significance: 'The translation of the Book of Mormon was a foundational event in the Restoration of the gospel of Jesus Christ. It provided a record of ancient American prophets and their teachings, which complement and clarify the Bible. The Book of Mormon serves as a second witness of Jesus Christ, offering doctrine, covenants, and prophecies necessary for the establishment of The Church of Jesus Christ of Latter-day Saints. This event confirmed Joseph Smith’s prophetic calling and ushered in the restoration of priesthood authority and other essential gospel truths.',
    id: 'event3'
  },
  {
    date: 'May 15, 1829',
    event: 'The Restoration of the Priesthood',
    location: 'Near Harmony, Pennsylvania',
    description: 'In 1829, after completing the translation of the Book of Mormon, Joseph Smith and Oliver Cowdery sought further guidance regarding the authority to baptize and perform other ordinances. In response to their prayers, they were visited by John the Baptist, who conferred upon them the Aaronic Priesthood. This bestowed upon them the authority to baptize, and they immediately performed baptisms for the remission of sins in the Susquehanna River. Shortly thereafter, Peter, James, and John, three of Christ’s original apostles, appeared to them and restored the Melchizedek Priesthood. This higher priesthood authority granted Joseph and Oliver the power to perform other essential ordinances, such as the laying on of hands for the gift of the Holy Ghost, and provided the foundation for the governance and leadership of the restored Church.',
    image: 'Priesthood.jpg',
    significance: 'The restoration of the priesthood was a pivotal event in the establishment of The Church of Jesus Christ of Latter-day Saints. It provided the necessary divine authority for performing essential ordinances, including baptism, the laying on of hands, and other sacred rituals. With the Aaronic and Melchizedek Priesthoods restored, Joseph Smith and his associates were empowered to lead the Church, administer saving ordinances, and establish the doctrine and practices that would guide the faithful toward salvation. This event also underscored the direct connection between modern-day priesthood authority and the original apostles of Christ.',
    id: 'event4'
  },
  {
    date: 'March 26, 1830',
    event: 'The Publication of the Book of Mormon',
    location: 'Palmyra, New York',
    description: 'In 1830, after the translation was completed, the Book of Mormon was published by E.B. Grandin, a local printer in Palmyra, New York. The printing of the book marked a significant milestone in the Restoration of the gospel. The publication process was challenging, with initial financial difficulties and opposition from critics, but it was completed successfully. The first edition of the Book of Mormon contained 5,000 copies, which quickly became a key text for the Church of Jesus Christ of Latter-day Saints. It was distributed widely, and its teachings, which centered on the doctrine of Jesus Christ, repentance, and salvation, were shared with members and prospective converts, laying the groundwork for the missionary efforts that would follow.',
    image: 'Publication.jpg',
    significance: 'The publication of the Book of Mormon provided a foundational and divinely inspired text for the Church of Jesus Christ of Latter-day Saints. It became the second witness of Jesus Christ alongside the Bible, offering unique teachings and clarifying doctrines essential for the Restoration. The book played a central role in guiding early missionary efforts, strengthening the faith of members, and solidifying the doctrinal foundation upon which the Church would grow worldwide. It continues to serve as a primary source of revelation and guidance for Latter-day Saints today.',
    id: 'event6'
  },
  {
    date: 'April 6, 1830',
    event: 'The Organization of the Church',
    location: 'Fayette, New York',
    description: 'On April 6, 1830, in a small log cabin in Fayette, New York, the Church of Christ was formally organized, marking the official establishment of the restored Church of Jesus Christ. Joseph Smith was called by God to be the prophet and leader of the Church, with Oliver Cowdery, David Whitmer, and Martin Harris as its first members. The organization followed the New Testament pattern, establishing essential priesthood offices, such as apostles, prophets, teachers, and deacons, to oversee the Church and its members. The sacrament was administered, and the first official meeting of the Church was held, where members were baptized and confirmed. This momentous event fulfilled prophecies of the Restoration and laid the groundwork for the expansion of the gospel in the latter days.',
    image: 'Organization.jpeg',
    significance: 'The organization of the Church on April 6, 1830, marked the formal beginning of the Restoration of the gospel. This event established The Church of Jesus Christ of Latter-day Saints, the only true and living Church on the earth, with divine authority to perform sacred ordinances and administer the gospel. It was a critical step in fulfilling God’s plan for the restoration of all things, preparing the way for the ultimate Second Coming of Jesus Christ. The Church would grow rapidly, spreading worldwide, fulfilling its role in proclaiming the gospel and preparing the world for the return of Christ.',
    id: 'event5'
  },
  {
    date: '1830–1831',
    event: 'The First Missionary Journey',
    location: 'New York, Ohio, and surrounding areas',
    description: 'In 1830 and 1831, early leaders of the Church, including Samuel Smith and Parley P. Pratt, embarked on the first missionary journey to spread the gospel and introduce the Book of Mormon to new areas. They traveled to regions in New York, Ohio, and surrounding areas, where they preached and gained converts. One of the most significant conversions during this time was Sidney Rigdon, a prominent preacher in Ohio, who embraced the teachings of the gospel after reading the Book of Mormon and was later called to be a leader in the early Church. The missionary efforts during this period were marked by both success and opposition, but they laid the foundation for the growth of the Church and established a pattern for future missionary work.',
    image: 'Missionary.jpeg',
    significance: 'The first missionary journey was a pivotal moment in the early history of the Church, as it marked the beginning of the Church’s organized efforts to spread the gospel beyond its initial location. These early missionary efforts helped establish key leaders and areas of growth, including Ohio, where the Church would later gather. The success of these missions provided a template for the worldwide missionary system that would be established, with missionaries being sent to all corners of the globe. This journey helped to solidify the spread of the Restoration message and set the stage for the future expansion of the Church.',
    id: 'event7'
  },  
  {
    date: 'February 9, 1831',
    event: 'The Law of Consecration',
    location: 'Kirtland, Ohio',
    description: 'In 1831, Joseph Smith received a revelation outlining the Law of Consecration, which called for the Saints to dedicate their time, talents, and possessions to the building of Zion, the establishment of God’s kingdom on earth. The revelation instructed Church members to consecrate their property and wealth to the Lord, with the intent of creating a society where resources were shared in common for the benefit of the Church and the mission of spreading the gospel. Members were asked to live a communal lifestyle, with the goal of eradicating poverty and inequality. This law was meant to foster unity and selflessness among the Saints as they prepared for the establishment of Zion. While the full practice was not realized at that time, the principles of the Law of Consecration influenced later doctrines and practices within the Church, particularly as they relate to temple covenants and the principle of stewardship.',
    image: 'Consecration.jpeg',
    significance: 'The Law of Consecration was a precursor to later temple doctrines, including the principles of sacrifice, stewardship, and consecration found in modern temple covenants. It also shaped the early economic and social practices of the Church, emphasizing communal living, service, and the prioritization of spiritual goals over material wealth. Though the full implementation of this law was not realized immediately, its principles continue to be a foundation for teachings on the importance of generosity, sacrifice, and the building of Zion. The Law of Consecration remains a powerful ideal for the members of the Church, shaping both individual and collective efforts to live the gospel in a consecrated manner.',
    id: 'event8'
  },
  {
    date: 'August 17, 1835',
    event: 'The Book of Doctrine and Covenants',
    location: 'Kirtland, Ohio',
    description: 'In 1835, the first edition of the *Doctrine and Covenants* was published in Kirtland, Ohio. This compilation of revelations, many of which were received by Joseph Smith, was an essential guide for the organizational structure, practices, and doctrines of the early Church of Jesus Christ of Latter-day Saints. It included instructions regarding priesthood authority, the establishment of the Church’s leadership structure, and guidance on various ordinances. The book also contained key revelations that clarified doctrinal points, such as the nature of God, the organization of the Church, and the gathering of the Saints. The publication of the *Doctrine and Covenants* marked an important step in providing the Saints with a unified collection of inspired writings that would help them understand the will of God and govern the Church.',
    image: 'JosephSmith.jpeg',
    significance: 'The publication of the *Doctrine and Covenants* solidified its place as one of the standard works of The Church of Jesus Christ of Latter-day Saints, alongside the Bible, the Book of Mormon, and the Pearl of Great Price. This book became a crucial source of divine revelation, offering essential teachings, principles, and organizational guidelines that would shape the Church for generations. It provided clarity on priesthood authority, the role of leaders, and the responsibilities of members, helping to structure the growing Church. The *Doctrine and Covenants* continues to be a key source of guidance and inspiration for Latter-day Saints, particularly in relation to Church governance and the ongoing revelation from God.',
    id: 'event12'
  },
  {
    date: 'February 8, 1835',
    event: 'The First Presidency and the Twelve Apostles',
    location: 'Kirtland, Ohio',
    description: 'In 1835, Joseph Smith called the first Twelve Apostles of The Church of Jesus Christ of Latter-day Saints in Kirtland, Ohio. This group of leaders was chosen to spread the gospel, organize the Church’s missionary efforts, and oversee the establishment of the Church in new areas. Their responsibilities included preaching the gospel, baptizing converts, and ordaining new leaders. Along with the Apostles, Joseph also organized the First Presidency, consisting of himself as the Prophet, and two other high-ranking leaders, who would assist in guiding the Church’s affairs. This organizational structure was modeled after the original New Testament Church, where the Twelve Apostles were key in the governance and missionary work of the early Church.',
    image: 'Twelve.jpeg',
    significance: 'The calling of the Twelve Apostles and the formation of the First Presidency established a clear and organized leadership structure for the Church. This move was instrumental in the Church’s growth and expansion into new regions, as the Twelve Apostles were sent on missionary journeys to preach the gospel and establish congregations. The establishment of these leadership roles also emphasized the importance of apostleship and the restoration of Christ’s original Church structure. The Twelve Apostles became vital in strengthening the early Church, ensuring that it could function under divine guidance and spread the restored gospel to people around the world.',
    id: 'event13'
  },
  {
    date: 'January 21, 1836',
    event: 'The Vision of the Celestial Kingdom',
    location: 'Hiram, Ohio',
    description: 'In 1836, Joseph Smith and Sidney Rigdon received a profound vision while in Hiram, Ohio. In this vision, they were shown the three degrees of glory—the Celestial, Terrestrial, and Telestial kingdoms—providing divine insight into the nature of the afterlife. The vision revealed that all individuals who are saved would not necessarily experience the same eternal reward. Instead, their final destination would depend on their deeds, beliefs, and the choices they made during their lives. The Celestial Kingdom was shown to be the highest, reserved for those who lived according to God’s commandments and accepted Jesus Christ, while the Terrestrial and Telestial kingdoms were for those who lived honorable but less faithful lives or rejected the gospel in varying degrees. This vision provided clarity on the distinctions between these kingdoms and expanded the understanding of salvation beyond traditional Christian teachings of heaven and hell.',
    image: 'CelestialKingdom.jpeg',
    significance: 'The Vision of the Celestial Kingdom significantly deepened Latter-day Saint doctrine regarding the afterlife, introducing a more inclusive and nuanced view of salvation. It clarified that salvation is not a one-size-fits-all reward and that individuals are judged and assigned to kingdoms based on their actions, beliefs, and acceptance of the gospel. This vision also emphasized the concept of eternal progression, as those in lower kingdoms may continue to progress toward higher glory. The teachings in this vision contributed to the distinctive theology of the Church of Jesus Christ of Latter-day Saints regarding eternal life and the diversity of experiences in the afterlife.',
    id: 'event9'
  },
  {
    date: 'March 27, 1836',
    event: 'The Kirtland Temple Dedication',
    location: 'Kirtland, Ohio',
    description: 'On March 27, 1836, the Kirtland Temple was dedicated, marking a pivotal moment in the history of The Church of Jesus Christ of Latter-day Saints as the first temple built by the Saints. The dedication ceremony was attended by Joseph Smith, Oliver Cowdery, Sidney Rigdon, and many others. During the dedication, the Saints experienced profound heavenly manifestations, including the appearance of Jesus Christ, who accepted the temple as His house. Additionally, Moses, Elias, and Elijah appeared, conferring important priesthood keys to Joseph Smith and Oliver Cowdery. These events signified the restoration of key temple ordinances and the sealing powers, laying the foundation for future temple work. The dedication marked not only the completion of the first temple but also the beginning of a new era in Latter-day Saint worship, one centered around sacred temple covenants and ordinances.',
    image: 'KirtlandTemple.jpg',
    significance: 'The Kirtland Temple was monumental as the first temple built by Latter-day Saints, marking the restoration of temple ordinances essential for eternal progression. This event marked the beginning of a global temple-building effort that continues today. The appearance of Jesus Christ and the conferral of priesthood keys by Moses, Elias, and Elijah during the dedication signified the fulfillment of ancient prophecies and the restoration of sacred priesthood authority. The Kirtland Temple was also the site of further spiritual outpourings, including the institution of ordinances like the endowment, which would become central to Latter-day Saint worship and salvation. This event solidified the role of temples in the life of the Church and set the precedent for the temple work to come in the future.',
    id: 'event10'
  },
  {
    date: 'April 3, 1836',
    event: 'The Coming of Elijah',
    location: 'Kirtland, Ohio (Kirtland Temple)',
    description: 'On April 3, 1836, (Easter Sunday) during a sacred meeting in the Kirtland Temple, Elijah the prophet appeared to Joseph Smith and Oliver Cowdery. Elijah’s visit marked a momentous occasion in the Restoration as he conferred the sealing power upon them, also known as the priesthood keys of sealing. This power allows for families to be sealed together for eternity, binding them in an unbreakable spiritual union that transcends death. Elijah’s appearance fulfilled the prophecy in the Old Testament (Malachi 4:5-6) that Elijah would return before the great and dreadful day of the Lord to restore the keys necessary for the sealing of families. This event emphasized the importance of eternal family relationships and set the stage for the practice of sealing ordinances in temples.',
    image: 'Elijah.jpeg',
    significance: 'Elijah’s visit was one of the most significant events in Latter-day Saint history, as it restored a key priesthood authority necessary for the eternal sealing of families. The sealing power is central to Latter-day Saint teachings on eternal families and the belief that relationships can extend beyond this life. By restoring this authority, Elijah’s visit provided a critical component of the gospel of Jesus Christ, allowing for families to be bound together forever through temple ordinances. This event further solidified the importance of temple work in the Church and paved the way for the growing practice of eternal family sealings that continues to be a central focus of Latter-day Saint doctrine and temple worship.',
    id: 'event11'
  },
  {
    date: '1836-1846',
    event: 'The Nauvoo Era Begins',
    location: 'Nauvoo, Illinois',
    description: 'After being driven out of Missouri, the Saints settled in Nauvoo, Illinois, in the early 1830s. Nauvoo quickly became a thriving gathering place for members of The Church of Jesus Christ of Latter-day Saints, and under Joseph Smith’s leadership, it became a focal point of religious and social activity. During this period, Joseph Smith organized the Church more formally, establishing important leadership positions and expanding the Saints’ influence in the region. Many of the Church’s most sacred teachings were introduced during this time, including the endowment, which was first administered in the newly constructed Nauvoo Temple. This period also saw increased missionary efforts, the publication of significant texts like the *Doctrine and Covenants*, and the development of a unique culture and community among the Saints.',
    image: 'Nauvoo.jpeg',
    significance: 'Nauvoo became a central focus for the Church, symbolizing the strength and unity of the Saints in the face of adversity. The construction of the Nauvoo Temple was a major accomplishment, marking the restoration of important priesthood ordinances and making it the site of the first endowment ceremonies. This period was marked by significant growth for the Church both numerically and doctrinally, as many essential doctrines and ordinances were introduced and further established. The Saints’ community in Nauvoo was a time of development, resilience, and doctrinal expansion that would play a key role in the future of the Church. Nauvoo’s impact is still felt today in the sacred teachings and traditions that were introduced there.',
    id: 'event14'
  },
  {
    date: 'June 27, 1844',
    event: 'Joseph Smith\'s Martyrdom',
    location: 'Carthage, Illinois',
    description: 'On June 27, 1844, Joseph Smith, the Prophet of The Church of Jesus Christ of Latter-day Saints, and his brother Hyrum were martyred by a mob while they were imprisoned in the Carthage Jail in Carthage, Illinois. Joseph and Hyrum had been incarcerated under false charges, and their imprisonment was part of a broader pattern of persecution against the Saints. Despite efforts to protect them, a violent mob stormed the jail, killing Joseph and Hyrum in cold blood. Joseph’s last words, “O Lord, my God, is there no help for the widow’s son?” expressed his deep faith in God as he faced death. This tragic event marked a pivotal moment in Latter-day Saint history, ending Joseph’s life and ministry but also solidifying his status as a martyr for the gospel.',
    image: 'Martyrdom.jpg',
    significance: 'Joseph Smith’s martyrdom had profound theological and historical significance for Latter-day Saints. It cemented his role as a prophet and martyr, fulfilling the prophecy in the Doctrine and Covenants that he would be “taken” as a martyr. His death served to strengthen the faith of the Saints, reinforcing the belief that he was divinely called and that his death was part of God’s plan for the Restoration. His martyrdom also led to a crucial leadership transition in the Church, with Brigham Young stepping forward to lead the Saints. Under Brigham Young’s leadership, the Saints would journey westward to the Great Basin, establishing new communities and ultimately solidifying the long-term growth of the Church.',
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
