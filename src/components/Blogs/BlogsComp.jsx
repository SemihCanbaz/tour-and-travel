import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/StatueofLiberty.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India is a land of diverse cultures, breathtaking landscapes, and historical wonders. From the majestic Taj Mahal in Agra to the tranquil backwaters of Kerala, India offers an array of destinations that captivate the soul. Whether you're exploring the vibrant streets of Delhi or seeking spiritual solace in Varanasi, each location tells a story rich in history and tradition. Discover the top places in India that should be on every traveler's bucket list, and experience the unique blend of ancient heritage and modern vibrancy that defines this incredible country.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Top places to visit in the US",
    description:
      "The United States is a vast country with a wide variety of destinations that cater to all types of travelers. From the iconic skylines of New York City to the natural wonders of the Grand Canyon, the US is a treasure trove of experiences. Whether you're a history buff, nature lover, or thrill-seeker, there's something for everyone. Explore the top destinations across the country that offer a glimpse into the American way of life, its diverse landscapes, and its cultural melting pot. This guide will take you through must-visit places that capture the essence of the United States.",
    author: "Someone",
    date: "May 18, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan, a country where ancient traditions meet cutting-edge technology, is a destination like no other. From the serene temples of Kyoto to the bustling streets of Tokyo, Japan offers an immersive cultural experience. Whether you're indulging in the world-renowned cuisine, marveling at the cherry blossoms, or exploring the rich history that permeates every corner, Japan is a place of endless fascination. Discover the top places that showcase the beauty, innovation, and deep cultural roots of Japan, and why it remains a top choice for travelers from around the globe.",
    author: "Someone",
    date: "September 01, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
