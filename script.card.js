const Card = (categoria, srcimagen, title, description, precio) => {
  return (
    <div class="pieRow" data-category={categoria}>
      <img src={srcimagen} width="100" height="63" class="pie-img" />
      <div>
        <h5 class="pie-title">{title}</h5>
        <p class="pie-description">{description}</p>
      </div>
      <small class="pie-price">{precio}</small>
    </div>
  );
};
