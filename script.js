const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  toggleRead() {
    this.status = !this.status;
  }
}

function addTableHeading() {
  const body = document.querySelector('body');
  if (document.querySelector('table')) {
    body.removeChild(document.querySelector('table'));
  }

  const table = document.createElement('table');
  const rowHead = document.createElement('tr');
  const colHeadTitle = document.createElement('th');
  colHeadTitle.textContent = 'Title';
  rowHead.appendChild(colHeadTitle);
  const colHeadAuthor = document.createElement('th');
  colHeadAuthor.textContent = 'Author';
  rowHead.appendChild(colHeadAuthor);
  const colHeadPages = document.createElement('th');
  colHeadPages.textContent = 'Pages';
  rowHead.appendChild(colHeadPages);
  const colHeadStatus = document.createElement('th');
  colHeadStatus.textContent = 'Read Status';
  rowHead.appendChild(colHeadStatus);

  body.appendChild(table);
}