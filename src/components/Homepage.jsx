import React from "react";
import desktopBg from "../assets/desktop-background-home.jpg";

const Homepage = ({ children }) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center z-10 "
      style={{ backgroundImage: `url(${desktopBg})` }}
    >
      {children}
    </section>
  );
};

export default Homepage;
