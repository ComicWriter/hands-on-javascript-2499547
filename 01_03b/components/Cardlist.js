import Card from "./Card.js";

const cardListItem = (ImageData) => {
  return `
    <li class="cardlist_item">
      ${Card(ImageData)}
    </li>
  `;
};

const Cardlist = (data) => {
  return `
    <link href="components/cardlist.css" rel="stylesheet" />
    <section class="cardlist">
      <ul class="cardlist_list">
        ${data.map((imgData) => cardListItem(imgData)).join("")}
      </ul>
    </section>
  `;
};

export default Cardlist;
