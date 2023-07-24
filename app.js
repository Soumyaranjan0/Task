const express = require('express');
const app = express();
const port = 3001;
const joi = require('joi');

app.get('/', (request, response) => {
    response.send('Hello');
  });
  app.post('/ ', (req, res) => {

    // Validate the request payload.
    const schema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().min(6).required(),
    });
  
    const errors = schema.validate(req.body);
  
    // If there are any errors, send an error response.
    if (errors.length > 0) {
      res.status(400).json({
        errors: errors,
      });
      return;
    }
  
    // The request payload is valid, so save the user.
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
  
    // Save the user.
    // ...
  
    // Send a success response.
    res.status(200).json({
      message: 'User created successfully',
    });
  });


  const movies = [
    {
      "title": "The Shawshank Redemption",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/The_Shawshank_Redemption_movie_poster.jpg/220px-The_Shawshank_Redemption_movie_poster.jpg",
      "rating": 9.3,
    },
    {
      "title": "The Godfather",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/The_Godfather_movie_poster.jpg/220px-The_Godfather_movie_poster.jpg",
      "rating": 9.2,
    },
    {
      "title": "The Dark Knight",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/The_Dark_Knight_Poster.jpg/220px-The_Dark_Knight_Poster.jpg",
      "rating": 9.0,
    },
    {
      "title": "Pulp Fiction",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Pulp_Fiction_movie_poster.jpg/220px-Pulp_Fiction_movie_poster.jpg",
      "rating": 8.9,
    },
    {
      "title": "12 Angry Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/12_Angry_Men_movie_poster.jpg/220px-12_Angry_Men_movie_poster.jpg",
      "rating": 8.9,
    },
    {
      "title": "Schindler's List",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Schindler's_List_movie_poster.jpg/220px-Schindler's_List_movie_poster.jpg",
      "rating": 8.9,
    },
    {
      "title": "The Good, the Bad and the Ugly",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Good,_the_Bad_and_the_Ugly_movie_poster.jpg/220px-The_Good,_the_Bad_and_the_Ugly_movie_poster.jpg",
      "rating": 8.9,
    },
    {
      "title": "Forrest Gump",
      "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Forrest_Gump_movie_poster.jpg/220px-Forrest_Gump_movie_poster.jpg",
      "rating": 8.8,
    },
  ];
  
  // Create an endpoint to get all the movies.
  app.get('/movies', (req, res) => {
    res.json(movies);
  });

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));