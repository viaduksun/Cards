import modal from "./modal/Modal.js";
const register = async (email, password) => {
  if (email && password) {
    const tokenData = await fetch(
      "https://ajax.test-danit.com/api/v2/cards/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    )
      .then((response) => response.text())
      .then((token) => {
        // localStorage.setItem("token", token);
        // console.log(token);
        return token;
      })
      .catch((err) => {
        console.log("Some text", err.message);
      });
    return tokenData;
  }
};

const registerMessage = (text, className) => {
  const regContainer = document.createElement("div");
  const regCloseBtn = document.createElement("button");
  regContainer.classList.add("regContainer");
  regCloseBtn.classList.add("btn", "btn-middle");
  regCloseBtn.innerText = "Close";
  regCloseBtn.addEventListener("click", () => {
    modal.hide();
  });
  const regText = document.createElement("div");
  console.log(regText);
  regText.innerHTML = `<h2 class=${className}>${text}</h2>`;
  regContainer.append(regText, regCloseBtn);
  return regContainer;
};
export { register };
export { registerMessage };
