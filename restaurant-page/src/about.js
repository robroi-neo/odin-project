function loadAboutPage() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.id = "about";

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Trattoria Rosa was founded in 1998 by the Rosa family, who set out to bring the recipes of their Tuscan grandmother to a wider audience. Nearly three decades later, we're still rolling pasta by hand every morning.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Our kitchen is led by Chef Marco Rosa, who trained in Florence before returning home to run the family restaurant. Everything on our menu is made in-house, from the bread to the limoncello.";

  section.append(heading, paragraph1, paragraph2);
  content.append(section);
}

export default loadAboutPage;
