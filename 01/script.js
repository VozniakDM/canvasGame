const movieData = [
  {
    id:  '01',
    name: 'Людина-мураха та Оса: Квантоманія',
    rating: '6.4'
  },
  {
    id:  '02',
    name: 'Нестримне весілля',
    rating: '5.4'
  },
  {
    id:  '03',
    name: 'Шазам! Лють богів',
    rating: '6.1'
  },
  {
    id:  '04',
    name: 'Порушення',
    rating: '6.2'
  },
  {
    id:  '05',
    name: 'Чорне місце',
    rating: '4.4'
  }
]

/*const movieData = [
  {
    name: 'Людина-мураха та Оса: Квантоманія',
    rating: '6.4'
  },
  {
    name: 'Нестримне весілля',
    rating: '5.4'
  },
  {
    name: 'Шазам! Лють богів',
    rating: '6.1'
  },
  {
    name: 'Порушення',
    rating: '6.2'
  },
  {
    name: 'Чорне місце',
    rating: '4.4'
  }
]*/

let buttons = document.querySelectorAll('.movie__action button');
console.log(buttons);

buttons.forEach(button => {
  button.addEventListener('click', getMovieRating);
});

function getMovieRating(e) {
  //const movieRating = e.target.dataset.rating;
  //let sortedArr = movieData.filter(movie => movie.rating === movieRating);
  const movieID = e.target.dataset.id;
  let idArr = movieData.filter(movie => movie.id === movieID);
  if (!idArr.length) {
    console.log ('Try more');
    return;
  }
  console.log("ID стрічки: " + idArr[0].id);
  console.log("Рейтинг стрічки: " + idArr[0].rating);
  
  const movieItem = e.target.closest('li').querySelector('.movieRatingBlock');
  console.log(movieItem);
  if (movieItem.firstChild == null) {
    const movieRating = document.createElement('p');
    movieRating.classList.add('movieRating');
    movieRating.textContent = `Рейтинг стрічки: ${idArr[0].rating}`;
        
    movieItem.appendChild(movieRating);
    return;
  }
}


