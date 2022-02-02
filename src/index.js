import './style.css';
import {getMovies} from './movieAPI';
import {getLikes, newLike} from './involvementAPI';
const displayMovie = (movie, like = null) => `<div class="card">
                    <div>
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div>
                        <h3> ${movie.name} </h3>
                        <p> <i class="fas fa-heart like" data-id="${movie.id}"></i> <span> ${like} </span> likes </p>
                        <button class="btn"> comments </button>
                    </div>
   </div>`;

const likeCounter = async () => {
  return await getLikes();
};

const listMovie = document.querySelector('.row');
const moviesComponent = async () => {
  const likes = await likeCounter();
  listMovie.innerHTML = '';
  const list = await getMovies();
  list.forEach((item) => {
    let count = 0;
    const tin = likes.find((like) => item.id === Number(like.item_id));
    if (tin !== undefined) {
      count = tin.likes;
    }else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll('.like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      //alert(movieId);
      newLike(movieId);
    });
  });
};

moviesComponent();

