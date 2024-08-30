import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Welcome to our travel hub, where your journey to explore the world
            begins. We are passionate travelers committed to sharing the beauty,
            diversity, and adventure that our planet offers. Our mission is to
            inspire wanderlust and guide you to the most breathtaking
            destinations, whether you're planning your next big adventure or
            simply dreaming of new places to discover. From hidden gems to
            world-renowned landmarks, we provide detailed insights, travel tips,
            and inspiring stories to help you make the most of your travels.
            Join us as we explore the world, one destination at a time.
          </p>
          <br />
          <p>Join us as we explore the world, one destination at a time.</p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
