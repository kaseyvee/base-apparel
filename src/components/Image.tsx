function Image() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet="hero-desktop.jpg" />
      <img className="object-cover w-full" src="hero-mobile.jpg" alt="woman in Base Apparel clothing" />
    </picture>
  );
}

export default Image;
