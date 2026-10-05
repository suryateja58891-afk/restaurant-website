function ReservationSummary({
  restaurant,
  time,
  guests,
  request,
  setRequest,
  onConfirm,
}) {
  return (
    <section className="summary">
      <h2>Reservation Summary</h2>

      <p>
        <b>Restaurant:</b> {restaurant.name}
      </p>

      <p>
        <b>Location:</b> {restaurant.location}
      </p>

      <p>
        <b>Time:</b> {time}
      </p>

      <p>
        <b>Guests:</b> {guests}
      </p>

      <label>Special Requests:</label>

      <textarea
        placeholder="Enter dietary preferences..."
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />

      <button onClick={onConfirm}>
        Confirm Reservation
      </button>
    </section>
  );
}

export default ReservationSummary;