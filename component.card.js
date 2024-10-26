const Card = ({ category, srcimagen, title, description, price }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4">
      <img
        src={srcimagen}
        alt={title}
        className="w-24 h-24 object-cover rounded"
        loading="lazy"
      />
      <div className="flex-1">
        <h5 className="text-lg font-bold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        <small className="text-blue-600 font-semibold">{price}</small>
      </div>
    </div>
  );
};

const CardList = ({ cardsData }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
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
