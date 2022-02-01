import './style.css'
import {getMovies} from './movieAPI';



const displayMovie = (movie) =>  `<div class="card">
                    <div>
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div>
                        <h3> ${movie.name} </h3>
                        <p> <i class="fas fa-heart"></i> <span> 67 </span> likes </p>
                        <button class="btn"> comments </button>
                    </div>
   </div>`;


const listMovie = document.querySelector('.row');
const moviesComponent = async() => {
  listMovie.innerHTML = '';
  const list  = await getMovies();
  list.forEach((item) => {
    listMovie.innerHTML += displayMovie(item);
  });

};

moviesComponent();


