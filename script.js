const library = [];

function Book(tittle, author, pages, read) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(tittle, author, pages, read) {
    const newBook = new Book(tittle, author, pages, read);
    library.push(newBook);
}

function addTableBook() {
    const tableContainer = document.getElementById('table-container');
    let table = document.getElementById('booksTable');
    if (!table) {
        table = createBooksTable();
        tableContainer.appendChild(table);
    }
}

table.innerTHML = " ";

const header = ['Tittle', 'Author', 'Pages', 'Read'];
const headerRow = table.insertRow();
header.forEach(headText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

library.forEach((book,index) =>{
    const row = table.insertRow();

    const tittleCell = row.insertCell();
    tittleCell.textContent = book.tittle;

    const authorCell = row.insertCell();
    authorCell.textContent = book.author;

    const pagesCell = row.insertCell();
    pagesCell.textContent = book.read ? 'Yes' : 'No';
});

function createBooksTable() {
    const table = document.createElement('table');
    table.setAttribute('id', 'booksTable');
    return table;
}

document.addEventListener('DOMContentLoaded', () => {
    const showFormButton = document.getElementById('showFormButton');
   const bookForm = document.getElementById('bookForm');
   const addBookButton = document.getElementById('addBookButton');

   showFormButton.addEventListener('click', () => {
      const formError = document.getElementById('formError');

      bookForm.classList.toggle('visible');

      formError.hidden = true;

      if (bookForm.classList.contains('visible')) {
         showFormButton.textContent = 'Close Form';
      } else {
         showFormButton.textContent = 'Add New Book';
      }
   });


   addBookButton.addEventListener('click', (e) => {
      e.preventDefault();

      const formError = document.getElementById('formError');
      //check form is valid
      if (!bookForm.checkValidity()) {
         formError.hidden = false;
         return;
      } else {
         formError.hidden = true;
      }


      //retrieve form values
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const read = document.getElementById('read').checked;

      //add book to library and update display
      addBookToLibrary(title, author, pages, read);
      displayBooks();

      //reset form field and hide from
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('pages').value = '';
      document.getElementById('read').checked = false;

      //hide form after submission
      bookForm.classList.remove('visible');
      showFormButton.textContent = 'Add New Book';
   });

   displayBooks();
});