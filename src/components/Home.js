import React, { useState } from "react";
import "../styles/Home.css";
import profpic from "../images/professionalpic.jpg";

const Home = () => {
  const [bio, setBio] = useState(
    "I'm a Full Stack Web Developer. I love bringing ideas to life. I enjoy learning new coding concepts. I discovered my passion for coding two semesters before completing my Bachelor's degree in Information Technology. While studying for my Bachelor's, I took an introductory course for coding(JavaScript,HTML and CSS). This sparked my interest in Software Development and my love for coding continued to grow. I enrolled in a Full Stack Web Development course with Flatiron School and have since expanded my knowledge in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. I am continuing to independently study other areas of coding. I'm constantly working on my skills, adding to them or sharpening them. I'm also into creative writing. I love all types of music and I strive to grow in every aspect of my life. My goal is to continously grow!"
  );

  return (
    <div className="home">
      <img src={profpic} style={{ width: "220px", height: "300px" }} />

      <div className="bio"> {bio} </div>
    </div>
  );
};

export default Home;

// src/images/professionalpic.jpg
