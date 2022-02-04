import { appId, baseURL } from './involvementAPI';

export const modal = (movie) => `<div class="popup-container">
                <div class="popup">
                    <button class="btn close">X</button>
                    <div class="details">
                        <div>
                            <img class="img" src="${movie.image.original}" height="450" width="500"/>
                        </div>
                        <div>
                            <ul class="prop">
                                <h1> ${movie.name} </h1>
                                <li> Language: ${movie.language}</li>
                                <li> Type: ${movie.type}</li>
                                <li> Premiered: ${movie.premiered}</li>
                                <li> Rating: ${movie.rating.average}</li>
                                <li> Network: ${movie.network.name}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="summary">
                        <p> ${movie.summary} </p>
                    </div>
                    <div>
                        <h2 id="count"> Comments  </h2>
                        <ul class="comments">
                        </ul>
                    </div>
                    <div>
                        <form id="comment-form" name="comment-form" class="details">
                            <input type="text" name="name" placeholder="your name" required/>
                            <input type="text" name="comment" placeholder="Leave a comment" required/>
                            <button class="btn"> Post </button>
                        </form>
                    </div>
                </div>
            </div>`;

const displayComments = (comments) => {
  const list = document.querySelector('.comments');
  if (!comments.length) {
    list.innerHTML = '<p>No comments found</p>';
  } else {
    comments.forEach((item) => {
      list.innerHTML += `<li><span>${item.creation_date}</span> | <span>${item.username}:</span> ${item.comment}</li>`;
    });
  }
};

export const countComments = (comments) => {
  if (comments.length) {
    document.getElementById('count').innerHTML = `Comments ( ${comments.length} )`;
  }
};

export const getComments = async (movieID) => {
  const response = await fetch(`${baseURL}apps/${appId}/comments?item_id=${movieID}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const comments = await response.json();
  displayComments(comments);
  countComments(comments);
};

export const newComment = async (comment) => {
  fetch(`${baseURL}apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
};
