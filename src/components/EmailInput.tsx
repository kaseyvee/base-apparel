import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

function EmailInput() {
  return (
    <>
      <input type="email" placeholder="Email Address" />
      <button>
        <Arrow />
      </button>
    </>
  );
}

export default EmailInput;
