import React from "react";

const Welcome = () => {
  return <h1>Hello World</h1>;
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="allpies.html">All pies</a>
        </li>
        <li>
          <a href="contacto.html">Contact</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
