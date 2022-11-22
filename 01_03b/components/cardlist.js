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
    <section class="cardlist">
      <ul class="cardlist_list">
        ${data.map((ImageData) => cardListItem(ImageData)).join("")}
      </ul>
    </section>
  `;
};

export default Cardlist;
