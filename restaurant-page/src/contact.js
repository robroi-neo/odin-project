function loadContactPage() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.id = "contact";

  const heading = document.createElement("h1");
  heading.textContent = "Contact";

  const details = [
    { label: "Address", value: "42 Via Roma, Portland, OR 97201" },
    { label: "Phone", value: "(503) 555-0173" },
    { label: "Hours", value: "Tue–Sun, 5pm – 10pm" },
  ];

  const list = document.createElement("ul");
  details.forEach((detail) => {
    const listItem = document.createElement("li");

    const label = document.createElement("span");
    label.textContent = detail.label;

    const value = document.createElement("span");
    value.textContent = detail.value;

    listItem.append(label, value);
    list.append(listItem);
  });

  section.append(heading, list);
  content.append(section);
}

export default loadContactPage;
