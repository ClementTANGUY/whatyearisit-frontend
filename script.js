
fetch(`https://whatyearisit-backend-dun.vercel.app/year/`)
  .then(response => response.json())
  .then(data => {
    document.querySelector('#year').textContent.toUpperCase() = data.year;
  });

