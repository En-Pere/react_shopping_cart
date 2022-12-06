import "../styles.css/Buttons.css";

function ResetButton({ action }) {
  return (
    <button className="reset_button" onClick={action}>
      Reset
    </button>
  );
}

export default ResetButton;
