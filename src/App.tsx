import { useEffect, useState } from "react";

import EmailInput from "./components/EmailInput";
import HeroCard from "./components/HeroCard";
import Image from "./components/Image";

import { ReactComponent as Logo } from "./assets/logo.svg";
// import IntroLogo from "./components/IntroLogo";

function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    checkMobile();

    addEventListener("resize", checkMobile);

    return () => removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="min-h-screen h-full font-josefin flex flex-col md:flex-row bg-gradient-to-br from-white to-pink/10">
      {/* <div className="h-screen bg-white w-full absolute z-10 animate-fade-in flex justify-center items-center">
        <IntroLogo />
      </div> */}
      <div className="w-full h-full flex flex-col justify-center md:items-center md:relative md:bg-hero-pattern">
        {isMobile && (
          <header className="p-8 md:absolute top-0 left-0">
            <Logo />
          </header>
        )}
        {isMobile && <Image />}
        <div className="flex flex-col gap-8 justify-center h-full md:max-w-xl px-8 py-12 md:px-16 relative">
          {!isMobile && (
            <header className="p-8 md:absolute top-[34px] left-[32px]">
              <Logo />
            </header>
          )}
          <HeroCard />
          <EmailInput />
        </div>
      </div>
      {!isMobile && <Image />}
    </main>
  );
}

export default App;
