jQuery(document).ready(function($) {

  $('#price_filter').val('0-500');
  $("#price_slider").slider({
    range:true,
    min: 0,
    max: 500,
    values:[0, 500],
    step: 5,
    slide: function(event, ui) {
      $("#price_range_label").html('$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
      $('#price_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#category :checkbox').prop('checked', true);
  $('#performance :checkbox').prop('checked', true);

  FilterJS(products, "#product_list", {
    template: '#template',
    criterias:[
      {field: 'amount', ele: '#price_filter', type: 'range'},
      {field: 'category', ele: '#category :checkbox'},
      {field: 'performance', ele: '#performance :checkbox'}
    ],

    search: { ele: '#search_box' }
  });

});
