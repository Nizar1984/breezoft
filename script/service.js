const moreDetails = document.querySelector('.details');
const hideForm = document.querySelector('.more');
const close = document.querySelector('.close');
moreDetails.addEventListener('mouseover', function () {
    hideForm.classList.remove('hidden');

});

close.addEventListener('click', function () {
    hideForm.classList.add('hidden')
});

document.addEventListener('keydown', function (e) {
    e.key === 'Escape' && !hideForm.classList.contains('hidden') ? hideForm.classList.add('hidden') : null;
      
})


