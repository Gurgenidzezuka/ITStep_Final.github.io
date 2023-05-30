function showAll() {
    var hiddenImgs = document.querySelectorAll('.image-container.hidden img');
    for (var i = 0; i < hiddenImgs.length; i++) {
      hiddenImgs[i].parentNode.classList.remove('hidden');
  
      var newImg = document.createElement("img");
      newImg.src = "new-image.jpg";
  
      toursContainer.appendChild(newImg);
    }
  }
  
  function showAllHotels() {
    var offCards = document.querySelectorAll(".hotel-cards.off");
    for (var i = 0; i < offCards.length; i++) {
      offCards[i].classList.remove("off");
    }
    document.querySelector(".hotel-button").style.display = "none";
  }
  
  function showAllActivities() {
    var offCards = document.querySelectorAll(".activities-off1");
    for (var i = 0; i < offCards.length; i++) {
      offCards[i].classList.remove("activities-off1");
    }
    document.querySelector(".activities-button").style.display = "none";
  }
  
  function goToActivity() {
    window.location.href = "activities.html";
  }
  
  function showAllHotels() {
    window.location.href = "hotels.html";
  }
  
  function showAllTips() {
    window.location.href = "tips.html";
  }
  
  // Search form submission function
  function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
  
    const category = document.getElementById('category-select').value;
    const location = document.getElementById('location-input').value.trim().toLowerCase();
  
    const filteredActivities = activities.filter(activity => {
      if (category === 'all' || activity.category === category) {
        return activity.location.toLowerCase().includes(location);
      }
      return false;
    });
  
    // Display filtered results
    showResults(filteredActivities);
  }
  
  // Function to display search results
  function showResults(activities) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    if (activities.length > 0) {
      activities.forEach(activity => {
        const activityElement = document.createElement('div');
        // Customize the activity element's content and style as needed
  
        resultsContainer.appendChild(activityElement);
      });
    } else {
      // No result found, show message
      const messageElement = document.createElement('p');
      messageElement.textContent = 'Activities not found.';
      resultsContainer.appendChild(messageElement);
    }
  }
  
  // Get the search form element
  const searchForm = document.getElementById('search-form');
  
  // Add an event listener to the search form submission
  searchForm.addEventListener('submit', handleSearch);
  
  function filter() {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.display = searchBox.style.display === 'none' ? 'flex' : 'none';
  }
  
  function search() {
    var locationInput = document.getElementById('location-input');
    var selectedActivity = document.getElementById('select').value;
    var resultsContainer = document.getElementById('results-container');
  
    // Perform the search based on the locationInput and selectedActivity
    // Display the results in the resultsContainer
    // You can modify this function to suit your search functionality
  }
  
  ///სერჩი
  //აქტივობები
  function performSearch() {
    const location = document.getElementById("searchInput").value;
    const activity = document.getElementById("select").value;
  
    // Generate the Google Maps search URL based on the location and activity
    const searchUrl = `https://www.google.com/maps/search/?api=1&query=${activity}+in+${location}`;
  
    // Open the search URL in a new window or tab
    window.open(searchUrl, "_blank");
  }
  
  
  