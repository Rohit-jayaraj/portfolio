document.addEventListener("DOMContentLoaded", function () {
    const albumSelect = document.getElementById("albumSelect");
    const spotifyPlayer = document.getElementById("spotifyPlayer");
  
    const albumMap = {
      "0UcyqmHNn536yy8boNihhb": "https://open.spotify.com/embed/album/0UcyqmHNn536yy8boNihhb?utm_source=generator&theme=0",
      "61tegsknhtO0WKmkyPqvly": "https://open.spotify.com/embed/album/61tegsknhtO0WKmkyPqvly?utm_source=generator&theme=0",
      "0vPZhR1KpbRNBOQBsDScS8": "https://open.spotify.com/embed/album/0vPZhR1KpbRNBOQBsDScS8?utm_source=generator&theme=0",
      "4MDYr65P5RQb6VHt80T3o8": "https://open.spotify.com/embed/album/4MDYr65P5RQb6VHt80T3o8?utm_source=generator&theme=0",
      "6PFPjumGRpZnBzqnDci6qJ": "https://open.spotify.com/embed/album/6PFPjumGRpZnBzqnDci6qJ?utm_source=generator&theme=0",
      "3XB2yloP7l00tEUmaODtVi": "https://open.spotify.com/embed/album/3XB2yloP7l00tEUmaODtVi?utm_source=generator&theme=0"
    };
  
    albumSelect.addEventListener("change", function () {
      const selectedValue = albumSelect.value;
      spotifyPlayer.src = albumMap[selectedValue];
  
      if (selectedValue === "6PFPjumGRpZnBzqnDci6qJ" || selectedValue === "3XB2yloP7l00tEUmaODtVi") {
        albumSelect.style.border = "2px solid white";
      } else {
        albumSelect.style.border = "2px solid #e50914"; // red by default
      }
    });
});
