function toggleHotelInfo(hotelId) {
    var hotelInfo = document.getElementById('hotel-info-' + hotelId);
    if (hotelInfo.style.display === 'none') {
      hotelInfo.style.display = 'block';
    } else {
      hotelInfo.style.display = 'none';
    }
  }
  function bookHotel(){
    alert("Hotel booked")
  }