document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/talks')
    .then(response => response.json())
    .then(talks => {
      const scheduleDiv = document.getElementById('schedule');
      if (talks && talks.length > 0) {
        talks.forEach(talk => {
          const talkElement = `
            <div class="col-md-6 col-lg-4">
              <div class="card h-100">
                <div class="card-header">${talk.time}</div>
                <div class="card-body">
                  <h5 class="card-title">${talk.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${talk.speaker}</h6>
                  <p class="card-text">${talk.description}</p>
                </div>
              </div>
            </div>
          `;
          scheduleDiv.innerHTML += talkElement;
        });
      } else {
        scheduleDiv.innerHTML = '<p class="text-center">The schedule is not available at the moment. Please check back later.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching talks:', error);
      const scheduleDiv = document.getElementById('schedule');
      scheduleDiv.innerHTML = '<p class="text-center text-danger">Could not load the schedule. Please try again later.</p>';
    });
});
