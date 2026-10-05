import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants, onSelect }) {
  return (
    <section id="restaurants">
      <h2>Available Restaurants</h2>

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onSelect={onSelect}
            />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </section>
  );
}

export default RestaurantList;