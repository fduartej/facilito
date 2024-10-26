const Card = ({ category, srcimagen, title, description, price }) => {
  return (
    <div class="pieRow" data-category={category}>
      <img src={srcimagen} width="100" height="63" class="pie-img" />
      <div>
        <h5 class="pie-title">{title}</h5>
        <p class="pie-description">{description}</p>
      </div>
      <small class="pie-price">{price}</small>
    </div>
  );
};

const CardList = ({ cardsData }) => (
  <div class="content-section">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        category={card.category}
        srcimagen={card.src}
        title={card.title}
        description={card.description}
        price={card.price}
      />
    ))}
  </div>
);
