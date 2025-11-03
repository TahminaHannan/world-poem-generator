function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "81d8a7b16474ata00ac603o3290f2df0";
  let prompt = `Generate a poem about ${instructionsInput.value}`;

  let context =
    "You are a romantic poem expert, writing very short poems. Your mission is to write a short 4 line poem, using the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating flowers");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
