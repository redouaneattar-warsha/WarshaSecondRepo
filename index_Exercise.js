const books = [
    {
        id : 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        id : 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        id : 3,
        title: "1984",
        author: "George Orwell",
        year: 1949
    }
];

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Life is what happens to you while you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama"
];


const express = require('express');
const app = express();
const port = 4002;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

//GET ALL BOOKS
app.get('/books', (req, res) => {
    books.forEach(element => {
        res.send(books);
        res.status(200);
    });
    
});


//CREATE BOOK
app.post('/books', (req, res) => {
  books.push ( {
        id : 4,
        title: "Book test",
        author: "Author test",
        year: 2025
    }) 

    books.forEach(element => {
    res.send(books);
    res.status(200);
    });

  res.send('POST: Create a user');//not working 
});


//GET BOOK BY ID
app.get('/books/:id', (req, res) => {
   
        let book=books.find(books=>books.id==parseInt(req.params.id));
        
        if(!book){         
            
            res.send('book not found');
            res.status(404);//changng position to top gives the right result, now it's wrong
        }
        
        else {
            res.send(book);
        }    
  
});


//update book BY id

app.put('/books/:id', (req, res) => {
    let book=books.find(books=>books.id==parseInt(req.params.id));
    let bookIndex=books.findIndex(books=>books.id==parseInt(req.params.id));
    if(!book){ 
        res.send('book not found');
        res.status(404);
    }
    else {
        books[bookIndex] = {...books[bookIndex], ...req.body };  
        res.status(200);  
        //res.send(books[bookIndex]); same result as below but json better for object
        res.json(books[bookIndex]);
    }  
});


//DELETE BOOK BY ID
app.delete('/books/:id', (req, res) => {
  
let book=books.find(books=>books.id==parseInt(req.params.id));
    let bookIndex=books.findIndex(books=>books.id==parseInt(req.params.id));
    if(!book){ 
        res.send('book not found');
        res.status(404);
    }
   
    else {
          books.splice(bookIndex, 1);
          res.send(`DELETE: Delete Book id ${req.params.id}`);
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/Exercise/`);
});