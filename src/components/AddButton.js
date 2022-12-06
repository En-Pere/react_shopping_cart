import "../styles.css/Buttons.css";

function AddButton({ action }) {
  return (
    <button className="add_button" onClick={action}>
      Add Product
    </button>
  );
}

export default AddButton;
