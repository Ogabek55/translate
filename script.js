var uzbekWords = [
  "salom",
  "hayr",
  "yozmoq",
  "yotmoq",
  "o'tirmoq",
  "yurmoq",
  "kelmoq",
  "ketmoq",
  "bormoq",
  "olmoq",
  "bermoq",
  "sotmoq",
  "aytmoq",
  "gapirmoq",
  "suv",
  "non",
];
var englishWords = [
  "hello",
  "goodbye",
  "write",
  // "lie down",
  "sit down",
  "walk",
  "come",
  "go",
  " to go",
  "take",
  "give",
  "bought",
  "say",
  "speak",
  "water",
  "bread",
];
var russianWords = [
  "привет",
  "пока",
  "написать",
  "лечь",
  "садиться",
  "гулять",
  "приходить",
  "Покинуть",
  "идти",
  "брать",
  "давать",
  "продавать",
  "сказать",
  "говорить",
  "вода",
  "хлеб",
];
var kazakhWords = [
  "сәлем",
  "сау бол",
  "жазу",
  "жату",
  "отыр",
  "жүру",
  "келу",
  "кету",
  "бару",
  "алу",
  "беру",
  "сату",
  "айту",
  "сөйлеу",
  "су",
  "нан",
];
var uzbekInput = document.getElementById("uzbekWord");
var translatedInput = document.getElementById("translatedWord");
var russianInput = document.getElementById("russianWord");
var kazakhInput = document.getElementById("kazakhWord");

function translateWords(word) {
  var index = uzbekWords.indexOf(word.toLowerCase());
  if (index !== -1) {
    translatedInput.value = englishWords[index];
    russianInput.value = russianWords[index];
    kazakhInput.value = kazakhWords[index];
  } else {
    translatedInput.value = "Tarjima topilmadi";
    russianInput.value = "Таржима топилмади";
    kazakhInput.value = "Таржима табылмады";
  }
}

uzbekInput.addEventListener("input", function () {
  translateWords(this.value);
});
