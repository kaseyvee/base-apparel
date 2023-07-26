function Image() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet="hero-desktop.jpg" />
      <img src="hero-mobile.jpg" alt="woman in Base Apparel clothing" />
    </picture>
  );
}

export default Image;
