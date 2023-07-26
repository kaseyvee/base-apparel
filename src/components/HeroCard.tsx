function HeroCard() {
  return (
    <div className="flex flex-col gap-4 text-center px-8 py-12">
      <h1 className="text-black font-bold text-xl md:text-2xl tracking-[10.83px] md:tracking-[17.32px]">
        <span className="text-mauve font-light">WE'RE</span> COMING SOON
      </h1>
      <p className="text-mauve text-base md:text-lg">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </div>
  );
}

export default HeroCard;
