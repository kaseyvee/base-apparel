import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

function EmailInput() {
  return (
    <div className="flex justify-center relative px-8">
      <input className="placeholder:text-mauve/50 bg-white/0 border-solid border border-mauve rounded-full text-base md:text-lg w-full h-12 px-6" type="email" placeholder="Email Address" />
      <button className="bg-gradient-to-br from-[#F8BFBF] to-pink h-12 px-7 rounded-full absolute right-8">
        <Arrow />
      </button>
    </div>
  );
}

export default EmailInput;
