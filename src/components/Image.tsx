function Image() {
  return (
    <picture className="flex md:w-4/5 max-h-[24rem] md:max-h-none">
      <source media="(min-width: 768px)" srcSet="hero-desktop.jpg" />
      <img
        className="object-cover w-full md:h-full"
        src="hero-mobile.jpg"
        alt="woman in Base Apparel clothing"
      />
    </picture>
  );
}

export default Image;
