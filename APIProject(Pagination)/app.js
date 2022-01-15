let content = document.querySelector('.content');

const getApiData = () => {};
let elementsPerPage = 10;

const printElments = (startingElement, numberOfElements) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const apiData = response.data;
      data = apiData.splice(startingElement, numberOfElements);
      let str = '';
      data.forEach((item) => {
        str += `<p>${item.id}. ${item.title}</p>`;
      });
      content.innerHTML = str;
    })
    .catch((error) => console.error(error));
};
printElments(0, elementsPerPage);

let paginationLink = document.querySelectorAll('.pagination__link');

paginationLink.forEach((item) => {
  item.addEventListener('click', loadPageData);
});

function loadPageData() {
  let pageNumber = parseInt(this.textContent);
  printElments(pageNumber * 10 - 10, elementsPerPage);
}
