jQuery(document).ready(function() {

    jQuery( ".draggable" ).draggable({
	   containment: "#pu_simple_image_annotation_frame",
	   stop: function() {

		var w = jQuery(this).parent().width();
		var h = jQuery(this).parent().height();
        	var p = jQuery(this).position();
		var wpct = parseInt((p.left/w) * 100);
		var hpct = parseInt((p.top/h) * 100);

		var pos = jQuery(this).position(document);
		var width = jQuery("#simple_image_annotation-toolbar").width();
		var height = jQuery("#simple_image_annotation-toolbar").height();
		var x = pos.left - (width/2); 
		var y = pos.top - (height + 40);

		// populate submission form

	        jQuery("#pusia-left").val(wpct);
	        jQuery("#pusia-top").val(hpct);
	        jQuery("#simple_image_annotation-toolbar").css({'top': y+'px','left':x+'px'});
	        jQuery("#simple_image_annotation-toolbar").show();

      	    }
	});




/************************
* show gloss bubble
************************/

jQuery('body').on('hover', '.gloss', function(e) {

  var rel = jQuery(this).attr('rel');
  var pos = jQuery(this).position();
  var width_of_image = jQuery("#pu_simple_image_annotation_frame").width();
  if(pos.left < (width_of_image - 250)) { var x = pos.left + 50; }
  else { var x = pos.left - 200; }
  var y = pos.top;
  jQuery("#"+rel).css({'top':y+'px','left':x+'px'});
  jQuery("#"+rel).show();
});


jQuery('body').on('mouseout', '.gloss', function(e) {
  jQuery(".pu-simple-annotation-bubble").hide();
});





/************************
* hide gloss bubble
************************/
  jQuery("#simple_image_annotation-toolbar-close").click(function(){
    jQuery("#simple_image_annotation-toolbar").hide();
  });




}); // end on document.ready






