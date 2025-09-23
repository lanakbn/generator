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

  let context = `You are a creative marketer who specializes in crafting catchy, specific slogans for products or services. Generate a short, memorable, and appealing slogan ONLY about this topic: ${instructionsInput}. Focus exactly on the user’s topic and instructions. Avoid generic themes unrelated to the product. Important rules: Focus ONLY on this topic (do not mention general ideas like innovation, future, success, etc., unless directly relevant).   the slogan must be directly about the product/service itself.  Keep it under 10 words.  Make it sound appealing and specific to the audience.At the end of the quote, sign it with "SheCodes AI" inside a <strong>`;
  let prompt = ` Generate a marketing quote about the topic of ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteEl = document.querySelector("#marketQuote");
  quoteEl.classList.remove("hidden");
  quoteEl.innerHTML = ` <span class= "generating"> Generating a quote </span>`;

  console.log("Generating quote...");

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-generator");
quoteForm.addEventListener("submit", generateQuote);
