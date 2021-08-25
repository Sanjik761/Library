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

function addBookRecord(book, index) {
  const table = document.querySelector('table');
  const row = document.createElement('tr');

  const title = document.createElement('td');
  title.textContent = book.title;
  row.appendChild(title);

  const author = document.createElement('td');
  author.textContent = book.author;
  row.appendChild(author);

  const pages = document.createElement('td');
  pages.textContent = book.pages;
  row.appendChild(pages);

  const status = document.createElement('td');
  status.textContent = book.status;
  row.appendChild(status);

  const deleteCol = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-index', index);
  deleteBtn.textContent = 'Delete';
  deleteCol.appendChild(deleteBtn);
  deleteBtn.onclick = (event) => {
    myLibrary.splice(event.target.dataset.index, 1);
    table.removeChild(row);
  };
  row.appendChild(deleteCol);

  const toggleReadCol = document.createElement('td');
  const toggleReadBtn = document.createElement('button');
  toggleReadBtn.setAttribute('class', 'set');
  function check(book) {
    if (book.status) {
      toggleReadBtn.textContent = 'UnRead';
    } else {
      toggleReadBtn.textContent = 'Read';
    }
  }
  check(book);
  toggleReadBtn.onclick = () => {
    book.toggleRead();
    check(book);
    addTableHeading();
    for (let i = 0; i < myLibrary.length; i += 1) {
      addBookRecord(myLibrary[i], i);
    }
  };
  table.appendChild(row);
  row.appendChild(toggleReadCol);
  toggleReadCol.appendChild(toggleReadBtn);
}

function displayBooks() {
  addTableHeading();
  for (let i = 0; i < myLibrary.length; i += 1) {
    addBookRecord(myLibrary[i], i);
  }
}

function addBookToLibrary(title, author, pages, status) {
  const createBook = new Book(title, author, pages, status);
  myLibrary.push(createBook);
  displayBooks();
}

displayBooks();
