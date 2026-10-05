function TableSelection({ guests, setGuests }) {
  return (
    <div className="form-group">
      <label>Number of Guests:</label>

      <input
        type="number"
        min="1"
        max="20"
        value={guests}
        onChange={(e) =>
          setGuests(Number(e.target.value))
        }
      />
    </div>
  );
}

export default TableSelection;