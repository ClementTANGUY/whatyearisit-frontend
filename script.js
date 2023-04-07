
fetch(`https://whatyearisit-backend-dun.vercel.app/year/`)
  .then(response => response.json())
  .then(data => {
    document.querySelectorAll('#year')[0].textContent = data.year;
  });

