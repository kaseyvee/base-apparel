/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [emailAccepted, setEmailAccepted] = useState(false);

  function handleInputChange(event: any) {
    setEmail(event.target.value);
    setInvalidInput(false);
  }

  function handleCheckValidity(event: any) {
    event.preventDefault();
    console.log("check started");

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
      setInvalidInput(true);
      return;
    }

    setEmail("");
    setEmailAccepted(true);
    return setInvalidInput(false);
  }

  return (
    <div>
      {emailAccepted ? (
        <p className="text-mauve text-base md:text-lg absolute">
          You've been added to our mailing list!
        </p>
      ) : (
        <form
          className="flex justify-center relative"
          onSubmit={handleCheckValidity}
          noValidate
        >
          <input
            className={`placeholder:text-mauve/50 outline-mauve text-black bg-white/0 border-solid ${
              invalidInput ? "border-2" : "border"
            } ${
              invalidInput ? "border-red" : "border-mauve/50"
            } rounded-full text-base md:text-lg w-full h-12 px-6`}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-[#F8BFBF] to-pink h-12 px-7 rounded-full absolute right-0"
          >
            <Arrow />
          </button>
        </form>
      )}
      {invalidInput && (
        <p className="text-sm px-6 text-red absolute">
          Please provide a valid email
        </p>
      )}
    </div>
  );
}

export default EmailInput;
