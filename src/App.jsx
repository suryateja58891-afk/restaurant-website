import { useState } from "react";
import "./App.css";

// Food data
const foodItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    cuisine: "Indian",
    category: "Biryani",
    price: 180,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Veg Pizza",
    cuisine: "Italian",
    category: "Pizza",
    price: 220,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Chicken Burger",
    cuisine: "American",
    category: "Burger",
    price: 150,
    rating: 4.3,
  },
  {
    id: 4,
    name: "Masala Dosa",
    cuisine: "South Indian",
    category: "Breakfast",
    price: 80,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Paneer Biryani",
    cuisine: "Indian",
    category: "Biryani",
    price: 160,
    rating: 4.1,
  },
];

// Header Component
function Header({ cartCount }) {
  return (
    <header>
      <h1>🍴 Food Express</h1>
      <p>Online Food Ordering System</p>
      <div className="cart-count">🛒 Cart: {cartCount}</div>
    </header>
  );
}

// SearchBar Component
function SearchBar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search food by name or cuisine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

// CategoryFilter Component
function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filter">
      <label>Category: </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Biryani">Biryani</option>
        <option value="Pizza">Pizza</option>
        <option value="Burger">Burger</option>
        <option value="Breakfast">Breakfast</option>
      </select>
    </div>
  );
}

// FoodCard Component
function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <h3>{food.name}</h3>
      <p>Cuisine: {food.cuisine}</p>
      <p>Category: {food.category}</p>
      <p>Price: ₹{food.price}</p>
      <p>⭐ {food.rating}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

// FoodMenu Component
function FoodMenu({ foods, addToCart }) {
  return (
    <div>
      <h2>Food Menu</h2>

      <div className="food-list">
        {foods.length > 0 ? (
          foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>
    </div>
  );
}

// Cart Component
function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

// Checkout Component
function Checkout({ cart, clearCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Please add items to cart first.");
      return;
    }

    alert(`Order placed successfully for ${name}!`);

    setName("");
    setAddress("");
    clearCart();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <form onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>© 2026 Food Express | Online Food Ordering System</p>
    </footer>
  );
}

// Main App Component
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Search + Category filtering
  const filteredFoods = foodItems.filter((food) => {
    const searchMatch =
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.cuisine.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || food.category === category;

    return searchMatch && categoryMatch;
  });

  // Add item to cart
  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Clear cart after order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.length} />

      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <FoodMenu
          foods={filteredFoods}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />

        <Checkout
          cart={cart}
          clearCart={clearCart}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;