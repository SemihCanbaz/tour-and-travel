import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/StatueofLiberty.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import Img7 from "../../assets/places/SaatKulesi.jpg";
import Img8 from "../../assets/places/istanbul.jpg";
import Img9 from "../../assets/places/ankara.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "Japan",
    description:
      "Experience the serene beauty of Japan's coastal waters on a traditional boat ride. Glide through tranquil waters while taking in the stunning scenery, offering a peaceful escape into nature's tranquility.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal, a UNESCO World Heritage site, is an iconic symbol of love and a masterpiece of Mughal architecture. This ivory-white marble mausoleum in Agra is a must-visit for its breathtaking beauty and historical significance.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Statue of Liberty",
    location: "United States",
    description:
      "The Statue of Liberty, a symbol of freedom and democracy, stands proudly on Liberty Island in New York Harbor. A gift from France to the United States, this iconic monument is a must-see for visitors, representing hope and opportunity for millions.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description:
      "Discover the iconic city of Sydney, home to the famous Sydney Opera House and Harbour Bridge. Enjoy the vibrant culture, stunning beaches, and rich history of one of Australia's most beloved cities.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United States",
    description:
      "Explore Los Angeles, the entertainment capital of the world. From Hollywood's Walk of Fame to the picturesque beaches of Santa Monica, this city offers a blend of glamour, culture, and natural beauty.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "United States",
    description:
      "Experience the vibrant nightlife and world-class entertainment of Las Vegas. Known for its extravagant casinos, dazzling shows, and endless attractions, this city is the ultimate destination for excitement and adventure.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img7,
    title: "Saat Kulesi",
    location: "Izmir, Turkey",
    description:
      "The Saat Kulesi, or Clock Tower, is a historic landmark located in the heart of Izmir. Built in 1901, this iconic structure symbolizes the city's rich history and cultural heritage, making it a must-see attraction for visitors.",
    price: 5800,
    type: "Cultural Relax",
  },
  {
    img: Img8,
    title: "Bosphorus Bridge",
    location: "Istanbul, Turkey",
    description:
      "The Bosphorus Bridge is a stunning architectural feat that connects the European and Asian sides of Istanbul. This landmark offers breathtaking views of the Bosphorus Strait and is an important symbol of the city’s geographical and cultural significance.",
    price: 9800,
    type: "Cultural Relax",
  },
  {
    img: Img9,
    title: "Anıtkabir",
    location: "Ankara, Turkey",
    description:
      "Anıtkabir is the mausoleum of Mustafa Kemal Atatürk, the founder of the Republic of Turkey. Located in Ankara, this monumental structure is an important site of national significance and a symbol of modern Turkey's history and values.",
    price: 12000,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
