const Welcome = () => {
  return <h1 class="font-sans text-sky-400">Hello World</h1>;
};

const Navigation = () => {
  return (
    <nav style={{ backgrounColor: "#D4C1E0" }} className="p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <a href="index.html" className="text-white hover:text-blue-400">
            Home
          </a>
        </li>
        <li>
          <a href="allpies.html" className="text-white hover:text-blue-400">
            All pies
          </a>
        </li>
        <li>
          <a href="contacto.html" className="text-white hover:text-blue-400">
            Contact
          </a>
        </li>
        <li>
          <a href="about.html" className="text-white hover:text-blue-400">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
