const name = document.getElementById("user-name");
const email = document.getElementById("user-email");
const img = document.getElementById("user-image");
const fetchRandomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      name.textContent = `${user.name.first}${user.name.last}`;
      email.textContent = user.email;
      img.src = user.picture.large;
    })
    .catch((error) => console.log(error));
};

// Fetch a random user when the page loads
fetchRandomUser();
