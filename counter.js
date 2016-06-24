$(function(){
  $.ajax({
    url: 'http://www.ari.host/api/pixels/renna-online/hits',
    success: function(data) {
      var hits = data.totalHits
      $('#hit-count').text(hits)
      $('.hit-count-area').removeClass('hidden')
    }
  })
})
