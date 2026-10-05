function Confirmation({
  restaurant,
  time,
  guests,
  onHome,
}) {
  return (
    <section className="confirmation">
      <h2>🎉 Reservation Confirmed!</h2>

      <p>Your table has been reserved successfully.</p>

      <p>
        <b>Restaurant:</b> {restaurant.name}
      </p>

      <p>
        <b>Time:</b> {time}
      </p>

      <p>
        <b>Guests:</b> {guests}
      </p>

      <button onClick={onHome}>
        Back to Home
      </button>
    </section>
  );
}

export default Confirmation;