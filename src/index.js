function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#marketQuote", {
    strings: "Marketing quote",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteForm = document.querySelector("#quote-generator");
quoteForm.addEventListener("submit", generateQuote);
