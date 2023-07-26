import EmailInput from "./components/EmailInput";
import HeroCard from "./components/HeroCard";

import { ReactComponent as Logo } from "./assets/logo.svg";
import Image from "./components/Image";

function App() {
  return (
    <main className="h-full font-josefin bg-gradient-to-br from-white to-pink/10">
      <header className="p-8">
        <Logo />
      </header>
      <Image />
      <div className="flex flex-col align-middle">
        <HeroCard />
        <EmailInput />
      </div>
    </main>
  );
}

export default App;
