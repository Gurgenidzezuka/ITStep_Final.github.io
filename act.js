function toggleHotelInfo(hotelId) {
    var activityDetailsContainer = document.getElementById("activity-details");
    var hotelInfo = document.getElementById("hotel-info-" + hotelId);
  
    if (hotelInfo.style.display === "none") {
      hotelInfo.style.display = "block";
      activityDetailsContainer.style.display = "none"; // Hide the activity details container
    } else {
      hotelInfo.style.display = "none";
      activityDetailsContainer.style.display = "block"; // Show the activity details container
    }
  }