const Card = (category, srcimagen, title, description, precio) => {
  return (
    <div class="pieRow" data-category={category}>
      <img src={srcimagen} width="100" height="63" class="pie-img" />
      <div>
        <h5 class="pie-title">{title}</h5>
        <p class="pie-description">{description}</p>
      </div>
      <small class="pie-price">{precio}</small>
    </div>
  );
};

const CardList = ({ data }) => (
  <div class="content-section">
    {data.map((card, index) => (
      <Card
        category={card.category}
        srcimagen={card.src}
        title={card.title}
        description={card.description}
        price={card.price}
      />
    ))}
  </div>
);

export default CardList;
