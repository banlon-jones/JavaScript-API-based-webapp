import './style.css';
import {counter, getMovie, getMovies} from './movieAPI';
import {countComments, getComments, getLikes, newComment, newLike} from './involvementAPI';
import {modalSection} from './comment';


const displayMovie = (movie, like = null) => `<div class="card">
                    <div>
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div>
                        <h3> ${movie.name} </h3>
                        <p> <i class="fas fa-heart like" data-id="${movie.id}"> <span class="num"> ${like} </span> </i>  likes </p>
                        <button class="btn" data-id="${movie.id}"> comments </button>
                    </div>
   </div>`;

const displayComments = (comment) => {
  return `<li><span> ${comment.creation_date} </span> <span> ${comment.username} </span>  <span> ${comment.comment} </span> </li>`;
};


const commentSec = async (movieId) => {
  const comments = await getComments(movieId);
  if (comments.length !== undefined){
    let comm = '';
    comments.forEach((item) => {
      comm += displayComments(item);
    });
    return comm;
  }else {
    return 'no comments'
  }
};

const modal = document.querySelector('.modal');
const displayModal = async (movieId) => {
  const count = await countComments(movieId);
  const movie = await getMovie(movieId);
  modal.innerHTML = modalSection(movie, count);
  const popContainer = document.querySelector('.popup-container');
  popContainer.style.display = 'block';
  popContainer.style.visibility = 'visible';
  const close = document.querySelector('.close');
  const commentSection = document.querySelector('.comments');
  commentSection.innerHTML = await commentSec(movieId);
  close.addEventListener('click', () => {
    popContainer.style.display = 'none';
    popContainer.style.visibility = 'hidden';
  });
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, comment] = commentForm;
    const comme = {
      item_id: movieId,
      username: name.value,
      comment: comment.value
    };
    newComment(comme);
    commentSection.innerHTML = await commentSec(movieId);
  });
};

const listMovie = document.querySelector('.row');
const moviesComponent = async () => {
  const likes = await getLikes();
  listMovie.innerHTML = '';
  const list = await getMovies();
  list.forEach((item) => {
    let count = 0;
    const tin = likes.find((like) => item.id === Number(like.item_id));
    if (tin !== undefined) {
      count = tin.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll('.like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      if (item.style.color !== 'red') {
        item.style.color = "red";
        item.firstElementChild.innerHTML = Number(item.firstElementChild.innerHTML) + 1;
        newLike(movieId);
      }
    });
  });

  const btn = document.querySelectorAll('.btn');
  btn.forEach((item) => {
    item.addEventListener('click', async () => {
      const movieId = item.getAttribute('data-id');
      displayModal(movieId);
    });
  });
};

moviesComponent();
const countTag = document.querySelector('.count');
const displayCount = async () => {
  countTag.innerHTML = await counter();
};

displayCount();
