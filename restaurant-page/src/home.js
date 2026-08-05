function loadHomePage() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.id = "home";

  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800";
  img.alt = "A cozy dining room at Trattoria Rosa";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Trattoria Rosa";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Tucked away on a quiet corner, Trattoria Rosa has been serving handmade pasta, wood-fired pizza, and slow-simmered sauces since 1998. Every dish is made from scratch with ingredients sourced from local farms, and every table gets the same warm welcome as family.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Whether you're stopping in for a quick lunch or settling in for a long, wine-soaked dinner, we can't wait to feed you.";

  section.append(img, heading, paragraph1, paragraph2);
  content.append(section);
}

export default loadHomePage;
