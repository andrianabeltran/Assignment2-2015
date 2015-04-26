(function() {
  $.getJSON( '/igTags')
    .done(function( data ) {
      $('div').remove('#spinner-dots');
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          // iris data from R
          columns: data.friendData,
          type : 'pie',
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) {  }
        },
        tooltip: {
          format: {
            title: function (d) { return d; },
            value: function (value, ratio, id) {
              return value;
            }
          }
        }
      });

      var chart = c3.generate({
        bindto: '#chart2',
        data: {
          // iris data from R
          columns: data.globalData,
          type : 'pie',
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) {  }
        },
        tooltip: {
          format: {
            title: function (d) { return d; },
            value: function (value, ratio, id) {
              return value;
            }
          }
        }
      });
    });
})();


