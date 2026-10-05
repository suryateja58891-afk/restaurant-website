function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div className="card">
      <h3>{restaurant.name}</h3>

      <p>📍 {restaurant.location}</p>
      <p>🍴 {restaurant.cuisine}</p>
      <p>⭐ {restaurant.rating}</p>

      <button onClick={() => onSelect(restaurant)}>
        View Details
      </button>
    </div>
  );
}

export default RestaurantCard;