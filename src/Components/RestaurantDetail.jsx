function RestaurantDetail({
  restaurant,
  onBack,
  onReserve,
}) {
  const timeSlots = [
    "12:00 PM",
    "2:00 PM",
    "7:00 PM",
    "9:00 PM",
  ];

  return (
    <section className="details">
      <h2>{restaurant.name}</h2>

      <p>Location: {restaurant.location}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Rating: ⭐ {restaurant.rating}</p>

      <h3>Available Time Slots</h3>

      <div className="slots">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onReserve(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <button onClick={onBack}>
        Back to Restaurants
      </button>
    </section>
  );
}

export default RestaurantDetail;