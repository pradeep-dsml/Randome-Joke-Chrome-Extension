fetch("https://icanhazdadjoke.com/slack")
  .then((responce) => responce.json())
  .then((data) => {
    const jokeData = data.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerText = jokeData;
  });
