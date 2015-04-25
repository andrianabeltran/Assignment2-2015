(function() {
  $.getJSON( '/igTags')
    .done(function( data ) {
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          // iris data from R
          columns: data.friendData,
          type : 'pie',
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) {  }
        },
      });
    });
})();


