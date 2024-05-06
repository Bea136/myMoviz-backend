var express = require('express');
var router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

//GET MOVIES FROM TMDB API
router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then(response => console.log(response.json()))
    .then(data => {
      res.json({ movies: data.results })
    })
    .catch(err => console.error(err))
})

module.exports = router;
