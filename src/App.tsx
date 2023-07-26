import EmailInput from "./components/EmailInput";
import HeroCard from "./components/HeroCard";

import { ReactComponent as Logo } from "./assets/logo.svg";
import Image from "./components/Image";

function App() {
  return (
    <main className="bg-white font-josefin">
      <header>
        <Logo />
      </header>
      <Image />
      <div>
        <HeroCard />
        <EmailInput />
      </div>
    </main>
  );
}

export default App;
