function loadMenuPage() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.id = "menu";

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const items = [
    { name: "Tagliatelle al Ragù", price: "$18" },
    { name: "Margherita Wood-Fired Pizza", price: "$16" },
    { name: "Osso Buco", price: "$26" },
    { name: "Burrata Caprese", price: "$14" },
    { name: "Tiramisù", price: "$9" },
  ];

  const list = document.createElement("ul");
  items.forEach((item) => {
    const listItem = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = item.name;

    const price = document.createElement("span");
    price.textContent = item.price;

    listItem.append(name, price);
    list.append(listItem);
  });

  section.append(heading, list);
  content.append(section);
}

export default loadMenuPage;
