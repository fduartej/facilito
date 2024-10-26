const Welcome = () => {
  return (
    <div className="p-6 text-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/facilitomedia.appspot.com/o/imagenes%2Fbethany-fullsize.jpg?alt=media&token=69709a75-e68b-4734-a9bd-f060a6572d26"
        alt="brettany"
        className="mx-auto mb-4 rounded-lg shadow-md w-1/2"
      />
      <p className="text-gray-700 text-lg">
        For many years, <b>Bethany</b> has been baking the most delicious pies
        at her home. In 2013, we opened our first store in Brussels (Belgium) in
        a cosy little street near the Grand Market. People from all over the
        world fell in love with the soft cakes, heavenly cheese cakes, spicy
        apple pies... <i>The store became a success in no time.</i>
      </p>
      <p className="text-gray-700 text-lg">
        In 2015, no less than 100 pies were sold every day and Bethany's Pie
        Shop moved into a larger building. After receiving many requests, it
        became clear that our next step was making it possible to order pies
        from the comfort of your own home and from anywhere in the world. You
        are now looking at the result of this: our very own webstore, making it
        possible to order Bethany's delicious pies whenever you feel like it!
      </p>
    </div>
  );
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

const Footer = () => {
  return (
    <footer
      style={{ backgrounColor: "#D4C1E0" }}
      className="text-white p-4 text-center"
    >
      <p className="text-sm">
        &copy; 2024 React Facilito, Todos los derechos reservados.
      </p>
    </footer>
  );
};
