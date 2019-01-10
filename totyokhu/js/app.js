document.addEventListener("DOMContentLoaded", function() {
  var today = new Date();
  var weddingDate = new Date('2018-09-08');

  var daysTilWedding = Math.round((weddingDate-today)/(1000*60*60*24));
  document.getElementById('days-counter').textContent = daysTilWedding.toString();
  console.log(daysTilWedding);

  $('#kurvaanyad').on('click', function () {
  		window.open('https://totyok.pixieset.com/kanda-e-session/', '_blank');
  })

 //  var pswpElement = document.querySelectorAll('.pswp')[0];

	// // build items array
	// var items = [
	//     {
	//         src: 'img/1.jpg',
	//         w: 5403,
	//         h: 3607
	//     },
	//     {
	//         src: 'img/2.jpg',
	//         w: 4016,
	//         h: 6016
	//     }
	// ];

	// // define options (if needed)
	// var options = {
	//     // optionName: 'option value'
	//     // for example:
	//     index: 0 // start at first slide
	// };

	// // Initializes and opens PhotoSwipe
	// var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	// $('#gallery-div').on('click', function () {
	// 	// gallery.destroy();
	// 	gallery.init();
	// });

	// $(".gallery-div").slick({
	// 	infinite: true,
	// 	responsive: [{

	//       breakpoint: 1024,
	//       settings: {
	//         slidesToShow: 3,
	//         infinite: true
	//       }

	//     }, {

	//       breakpoint: 600,
	//       settings: {
	//         slidesToShow: 2,
	//         dots: true
	//       }

	//     }, {

	//       breakpoint: 300,
	//       settings: "unslick" // destroys slick

	//     }]
	// });

});
