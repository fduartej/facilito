const Welcome = () => {
  return <h1>Hello World</h1>;
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
