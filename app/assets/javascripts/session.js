function sessionCreate(url, user) {

  $.ajax({
    url: url,
    type: 'POST',
    data: { user: JSON.stringify(user) },
    success: function(response) {
      $('body').html(response);
    }
  });
}
