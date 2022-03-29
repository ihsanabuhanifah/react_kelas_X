function Button() {
  return (
    <button
      style={{
        backgroundColor: "red",
        border: "1px solid red",
        color: "white",
      }}
    >
      Simpan
    </button>
  );
}

function Input() {
  return (
    <div>
      <input placeholder="ketik disini ..." />
    </div>
  );
}

export { Input, Button };
