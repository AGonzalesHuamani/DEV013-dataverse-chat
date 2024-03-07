import { navigateTo } from "../router.js";

export const Header = (data) => {
  const header = document.createElement('header');
  header.setAttribute("class", "header");
  header.innerHTML = `
    <img src="images/news.gif" class= "logo-header">
    <h1 class= "title-kdrama">K-DRAMA <span class= "title-verse">VERSE</span></h1>
    
    <button class="button-group-chat">
    <img src="images/group.png" class="logo-group-chat">
    Chat Grupal
    </button>
    
    <button class="button-appi-key">
    Api Key
    </button>
  `;

  const buttonGroupChat = header.querySelector(".button-group-chat");
  buttonGroupChat.addEventListener("click", () => {
    navigateTo("/groupchat",)
  })

  // Boton apikey a donde nos drecciona con navigateTo
  // const buttonAppiKey = header.querySelector(".button-appi-key");
  // buttonAppiKey.addEventListener("click", () => {
  //   navigateTo("Modal ", {})
  // })
  return header;
}