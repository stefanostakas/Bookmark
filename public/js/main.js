
// Trims a string with more than 50 characters
function truncateString(str) {
  if (str.length > 50) {
    return str.substr(0, 45) + '...';
  }
  return str;
}

// Render the books
function renderBooks(items) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("book");

    const coverImg = document.createElement("img");
    coverImg.src = items[i].volumeInfo.imageLinks.thumbnail;
    coverImg.width = 100;
    coverImg.height = 150;
    itemDiv.appendChild(coverImg);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = truncateString(items[i].volumeInfo.title);
    itemDiv.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = truncateString(items[i].volumeInfo.authors);
    itemDiv.appendChild(author);

    container.appendChild(itemDiv);

    // On click of a specific book, redirect to the book page
    itemDiv.onclick = function() {
      window.location.href = "../../bookpreview?" + items[i].id;
    };
  }
}

// Function to search for books
function functionSearch() {
  let url; // defines url

  // Takes the user input and creates the corresponding URI from Google Books API.
  var str = document.getElementById("SearchText").value;
  url = ("https://www.googleapis.com/books/v1/volumes?q=").concat(str + "/");

  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(result) {
      items = result.items;
      renderBooks(items);
    }),
    function(error) {
      console.log(error);
    };
}

// Function to redirect to the list of favorite books
function functionList() {
  window.location.replace('/favlist');
}
