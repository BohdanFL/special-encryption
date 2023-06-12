const codes = [
  ["й", "ц"],
  ["ц", "у"],
  ["у", "к"],
  ["к", "е"],
  ["е", "н"],
  ["н", "г"],
  ["г", "ш"],
  ["ш", "щ"],
  ["щ", "з"],
  ["з", "х"],
  ["х", "ї"],
  ["ї", "й"],
  ["ф", "і"],
  ["і", "в"],
  ["в", "а"],
  ["а", "п"],
  ["п", "р"],
  ["р", "о"],
  ["о", "л"],
  ["л", "д"],
  ["д", "ж"],
  ["ж", "є"],
  ["є", "ф"],
  ["я", "ч"],
  ["ч", "с"],
  ["с", "м"],
  ["м", "и"],
  ["и", "т"],
  ["т", "ь"],
  ["ь", "б"],
  ["б", "ю"],
  ["ю", "ґ"],
  ["ґ", "я"],
];

const output = document.getElementById("output");
const messageInput = document.getElementById("messageInput");
const encryptionStateCheckbox = document.getElementById("encryptionState");

const encryption = (message, decryption = false) => {
  let temp = "";
  for (let i = 0; i < message.length; i++) {
    const found = codes.find((code) => code[+decryption] === message[i]);
    if (found) {
      temp += found[+!decryption];
    } else {
      console.error("Даний символ не підтримується");
      temp = "Error!";
    }
  }
  return temp;
};

window.addEventListener("keypress", (event) => {
  const encryptionState = encryptionStateCheckbox.checked;
  if (event.key === "Enter") {
    output.textContent = encryption(messageInput.value, encryptionState);
  }
});
