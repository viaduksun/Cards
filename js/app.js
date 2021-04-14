import Card from "./card.js";
import Modal from "./modal/Modal.js";

const btnenter = document.querySelector(".btn-enter");
btnenter.addEventListener("click", () => {
  const enterModal = new Modal(enterForm, "Войти");
  document.body.appendChild(enterModal.render());
});

export async function displayCards() {
  const response = await fetch(`https://ajax.test-danit.com/api/json/users/`);
  const cards = await response.json();
  const cardsBoard = document.querySelector(".cards_field");
  cards.forEach(async (card) => {
    const {
      name,
      username,
      email,
      company: { name: companyname },
    } = card;
    const visitCard = new Card(name, username, email, companyname);
    cardsBoard.append(visitCard.render());

    const response = await fetch(
      `https://ajax.test-danit.com/api/json/users/${card.id}/todos`
    );
    const visitDetails = await response.json();
    visitCard.renderDetails(visitDetails);
  });
}

displayCards();

