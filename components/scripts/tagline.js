var $, fill;

$ = required('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Creative minds in Art');

fill;
