function displayQuote(response) {
  console.log("quote generator");
  new Typewriter("#marketQuote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ta22c25ab23c6669019e2c2b2ocf4595";

  let context = `You are a creative marketer who specializes in crafting catchy, highly specific slogans for products or services. Generate a short, memorable, and appealing slogan ONLY about this topic: ${instructionsInput}. Focus exactly on the user’s topic and instructions. Avoid generic themes unrelated to the product. At the end of the quote, sign it with "SheCodes AI" inside a <strong>`;
  let prompt = ` Generate a marketing quote about ${instructionsInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote...");

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-generator");
quoteForm.addEventListener("submit", generateQuote);
