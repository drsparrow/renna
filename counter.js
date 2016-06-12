$(function(){
  $.ajax({
    url: 'http://www.ari.host/api/pixels/0Z4XPO3m/hits',
    success: function(data) {
      var hits = data.totalHits
      $('#hit-count').text(hits)
      $('.hit-count-area').removeClass('hidden')
    }
  })
})
