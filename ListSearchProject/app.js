let content = document.querySelector('.content');
let elementsPerPage = 10;
var input = '';

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  input = document.getElementById('text').value.trim();
  console.log(input);
  printElments(0, elementsPerPage, input);
});

const printElments = (startingElement, numberOfElements, input) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const apiData = response.data;
      const filteredElements =
        input.length > 0
          ? apiData.filter((element) => element.title.includes(input))
          : apiData;
      var data = filteredElements.splice(startingElement, numberOfElements);
      let str = '';
      data.forEach((item) => {
        str += `<p>${item.id}. ${item.title}</p>`;
      });
      content.innerHTML = str;
    })
    .catch((error) => console.error(error));
};
printElments(0, elementsPerPage, input);

let paginationLink = document.querySelectorAll('.pagination__link');

paginationLink.forEach((item) => {
  item.addEventListener('click', loadPageData);
});

function loadPageData() {
  let pageNumber = parseInt(this.textContent);
  printElments(pageNumber * 10 - 10, elementsPerPage, input);
}
