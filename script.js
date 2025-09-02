// Dark/Light toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Movie data (50 movies with posters & ratings)
const movies = [
  {title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", rating: 9.2, review: "Iconic story of hope and friendship."},
  {title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg", rating: 9.2, review: "Classic mafia saga with unforgettable performances."},
  {title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 9.0, review: "Dark, thrilling, with legendary Joker."},
  {title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg", rating: 8.9, review: "Tarantino's masterpiece crime story."},
  {title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: 8.8, review: "Mind-bending thriller with stunning visuals."},
  {title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", rating: 8.8, review: "Heartwarming journey through history and life."},
  {title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", rating: 8.8, review: "Dark, twisted, and philosophical cult classic."},
  {title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/aoiiG0WfL4r3cU7l4h0v3KJQpGy.jpg", rating: 8.7, review: "Sci-fi action that changed cinema forever."},
  {title: "The Empire Strikes Back", poster: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg", rating: 8.7, review: "Epic Star Wars adventure, fan favorite."},
  {title: "The Godfather: Part II", poster: "https://image.tmdb.org/t/p/w500/amvmeQWheahG3StKwIE1f7jRnkZ.jpg", rating: 9.0, review: "Brilliant continuation of the Godfather saga."},
  {title: "The Dark Knight Rises", poster: "https://image.tmdb.org/t/p/w500/zwUp5EwO30bEO6hTOw0llWEpN4H.jpg", rating: 8.4, review: "Epic Batman finale with stunning action."},
  {title: "The Lord of the Rings: The Fellowship of the Ring", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", rating: 8.8, review: "Start of the legendary Tolkien saga."},
  {title: "Star Wars: A New Hope", poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", rating: 8.6, review: "Original Star Wars classic."},
  {title: "The Silence of the Lambs", poster: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg", rating: 8.6, review: "Thrilling psychological crime story."},
  {title: "The Usual Suspects", poster: "https://image.tmdb.org/t/p/w500/7oWB2aAKRiUciJEC0t4a3f5g7R8.jpg", rating: 8.5, review: "Mystery and crime with iconic twist."},
  {title: "Se7en", poster: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg", rating: 8.6, review: "Dark detective thriller, unforgettable ending."},
  {title: "The Lion King", poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", rating: 8.5, review: "Classic animated journey of Simba."},
  {title: "The Green Mile", poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", rating: 8.6, review: "Touching story of miracles on death row."},
  {title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: 8.6, review: "Epic space journey and emotional story."},
  {title: "The Prestige", poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", rating: 8.5, review: "Amazing story of rival magicians."},
  {title: "The Departed", poster: "https://image.tmdb.org/t/p/w500/6bn6yXfYd8EdM1vRsQeG65jFZ7K.jpg", rating: 8.5, review: "Thrilling crime story with great acting."},
  {title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", rating: 8.5, review: "Epic Roman adventure with Russell Crowe."},
  {title: "The Shining", poster: "https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg", rating: 8.4, review: "Classic horror masterpiece by Kubrick."},
  {title: "The Matrix Reloaded", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", rating: 7.2, review: "Sequel to sci-fi classic with more action."},
  {title: "The Matrix Revolutions", poster: "https://image.tmdb.org/t/p/w500/fgm6OK2GqiJrMgs2J4t2nQf7jrC.jpg", rating: 6.8, review: "Conclusion to the Matrix trilogy."},
  {title: "The Hobbit: An Unexpected Journey", poster: "https://image.tmdb.org/t/p/w500/c6h7Z5uwjK5ZRgZK08kS1p3XmN7.jpg", rating: 7.8, review: "Start of Bilbo’s epic journey."},
  {title: "The Hobbit: The Desolation of Smaug", poster: "https://image.tmdb.org/t/p/w500/x7KrlaU0C5dHq67QWw0XxH2RyGv.jpg", rating: 7.8, review: "Bilbo faces the dragon Smaug."},
  {title: "The Hobbit: The Battle of the Five Armies", poster: "https://image.tmdb.org/t/p/w500/9xkHqWzH3BLzF2HnRZ2ebkIvlZp.jpg", rating: 7.4, review: "Epic finale of the Hobbit saga."},
  {title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", poster: "https://image.tmdb.org/t/p/w500/mXbIvU7Gxb3D2Di6MQjv3N0nA5N.jpg", rating: 6.9, review: "Magical journey for children and adults."},
  {title: "The Hunger Games", poster: "https://image.tmdb.org/t/p/w500/3zH8E5SXTK3p1JPg9P7AL9P0YbM.jpg", rating: 7.2, review: "Dystopian survival story."},
  {title: "The Hunger Games: Catching Fire", poster: "https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg", rating: 7.5, review: "Katniss returns for rebellion."},
  {title: "The Hunger Games: Mockingjay – Part 1", poster: "https://image.tmdb.org/t/p/w500/f5s6Io0bD3qvKZgmh4p16jZfKZx.jpg", rating: 6.6, review: "Rebellion continues with suspense."},
  {title: "The Hunger Games: Mockingjay – Part 2", poster: "https://image.tmdb.org/t/p/w500/6P3c80EOm7iFHzZzWTAnMfSEzGT.jpg", rating: 6.5, review: "Final battle of rebellion."},
  {title: "The Twilight Saga: Twilight", poster: "https://image.tmdb.org/t/p/w500/lY5vHJ4r4nP2CBZShIh0YhCDtLv.jpg", rating: 5.2, review: "Vampire romance begins."},
  {title: "The Twilight Saga: New Moon", poster: "https://image.tmdb.org/t/p/w500/vcB7y8nM0bE8xU6E4T0p8F9ZdLX.jpg", rating: 5.5, review: "Edward leaves, Jacob rises."},
  {title: "The Twilight Saga: Eclipse", poster: "https://image.tmdb.org/t/p/w500/iL1e8FjMnzP3tQjQYwZ0d0o6LJz.jpg", rating: 5.6, review: "Love triangle intensifies."},
  {title: "The Twilight Saga: Breaking Dawn – Part 1", poster: "https://image.tmdb.org/t/p/w500/k6qR0NNiWy00fWohDxJqB8yzQWx.jpg", rating: 5.7, review: "Vampires and werewolves unite."},
  {title: "The Twilight Saga: Breaking Dawn – Part 2", poster: "https://image.tmdb.org/t/p/w500/8f4vV3CVjR6ko0DzyYK5l7RlGB8.jpg", rating: 5.8, review: "Final chapter concludes romance."}
];

// Render movies
const movieGrid = document.getElementById("movie-grid");
movies.forEach(movie => {
    const li = document.createElement("li");
    li.className = "movie-card";
    li.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-rating">⭐ ${movie.rating}</div>
        <div class="movie-review">${movie.review}</div>
    `;
    movieGrid.appendChild(li);
});

// Search suggestions
const movieInput = document.getElementById("movie-input");
const suggestions = document.getElementById("suggestions");

movieInput.addEventListener("input", () => {
    const value = movieInput.value.toLowerCase();
    suggestions.innerHTML = "";
    if (value) {
        const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
        filtered.forEach(f => {
            const li = document.createElement("li");
            li.textContent = f.title;
            li.addEventListener("click", () => {
                movieInput.value = f.title;
                suggestions.innerHTML = "";
            });
            suggestions.appendChild(li);
        });
    }
});
