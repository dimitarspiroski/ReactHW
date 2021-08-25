import React, { useEffect, useState } from "react";
import { BookConsumer } from "../context";
import { useHistory } from "react-router-dom";

// There is a book cover image for testing purposes of the form with path: "img/book-5.jpg". Any URL of an image should work too.

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(null);
  const [info, setInfo] = useState("");
  const [inStock, setInStock] = useState(null);
  const history = useHistory();

  let textInput = null;
  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <BookConsumer>
      {value => {
        return (
          <form
            className="mx-5 my-3"
            onSubmit={e => {
              e.preventDefault();
              const book = { title, author, img, price, inStock, info };
              value.addBook(book);
              history.replace("/");
            }}
          >
            <div class="form-group">
              <label for="title-input">Title:</label>
              <input
                type="text"
                class="form-control"
                id="title-input"
                aria-describedby="titleHelp"
                placeholder="Enter title"
                ref={input => {
                  textInput = input;
                }}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="author-input">Author:</label>
              <input
                type="text"
                class="form-control"
                id="author-input"
                aria-describedby="authorHelp"
                placeholder="Enter author name"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="img-input">Image:</label>
              <input
                type="text"
                class="form-control"
                id="img-input"
                aria-describedby="imgHelp"
                placeholder="Enter image URL"
                value={img}
                onChange={e => setImg(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="price-input">Price:</label>
              <input
                type="number"
                class="form-control"
                id="price-input"
                aria-describedby="priceHelp"
                placeholder="Enter price"
                value={price}
                onChange={e => setPrice(+e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="itock-input">Stock:</label>
              <input
                type="number"
                class="form-control"
                id="stock-input"
                aria-describedby="stockHelp"
                placeholder="Enter stock"
                value={inStock}
                onChange={e => setInStock(+e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <label for="info-input">Info:</label>
              <textarea
                type="text"
                rows="5"
                class="form-control"
                id="info-input"
                aria-describedby="infoHelp"
                placeholder="Enter info"
                value={info}
                onChange={e => setInfo(e.target.value)}
              />
            </div>
            <button type="submit" className="mt-4 btn btn-outline-info">
              Add Book
            </button>
          </form>
        );
      }}
    </BookConsumer>
  );
}
