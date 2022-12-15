AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () =>{
  if(this.scrollY > 0){
    navbar.classList.remove('py-3')
    navbar.classList.add('shadow', 'py-2')
  } else{
    navbar.classList.add('py-3')
    navbar.classList.remove('shadow', 'py-2')
  }
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbysHHEXyyLzX3B_KwMqWIAoRfNNPlkOVXN36OyDaNeqUI7LItntLW5N16dXO_T2auyDEA/exec'
const form = document.forms['web-contact-from']

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
      
form.addEventListener('submit', e => {
  e.preventDefault()
//   ketika tombol  submit diklik
// tampilkan  tombol loading, hilangkan tombol kirim
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // tampilkan  tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');
        // reset form
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})