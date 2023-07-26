/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          <motion.form
            className="flex justify-center relative"
            onSubmit={handleCheckValidity}
            noValidate
            initial={{opacity: 1, x:0 }}
            exit={{ opacity: 0, x: 200 }}
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
              className="bg-gradient-to-br from-[#F8BFBF] to-pink shadow-xl shadow-mauve hover:brightness-125 focus:brightness-125 h-12 px-7 md:px-9 rounded-full absolute right-0 duration-200"
            >
              <Arrow />
            </button>
            <AnimatePresence>
              {invalidInput && (
                <motion.img
                  className="absolute right-[100px] top-[25%]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src="icon-error.svg"
                  alt=""
                />
              )}
            </AnimatePresence>
          </motion.form>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {invalidInput && (
          <motion.p
            className="text-sm px-6 text-red absolute"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            Please provide a valid email
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EmailInput;
