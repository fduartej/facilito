const Welcome = () => {
  return <h1>Hello World</h1>;
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">All pies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

const Formulario = () => {
  return (
    <form>
      <h2>Formulario</h2>
      <label>
        Nombre:
        <input type="text" name="nombre" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
