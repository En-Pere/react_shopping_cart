import "../styles.css/Buttons.css";

function DeleteButton({ action }) {
  return (
    <button className="delete_button" onClick={action}>
      Delete Product
    </button>
  );
}

export default DeleteButton;
