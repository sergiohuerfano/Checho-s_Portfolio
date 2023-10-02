// alert("Hola mundo")
const slides = document.querySelectorAll("slide");
const btnSiguiente = document.querySelector(".siguienteBtn");
const btnAnterior = document.querySelector(".anteriorBtn");

slides.forEach(function(slide, index){
    slide.style.bottom = '${index * 100}%';
})

let counter = 0;

function carrusel(){
    if(counter < slides.lenght - 1){
        btnSiguiente.style.display = "block";
    } else {
        btnSiguiente.style.display = "none";
    }
    if(counter > 0){
        btnAnterior.style.display = "block";
    } else {
        btnAnterior.style.display = "none";
    }
    slides.forEach(function(slide, index){
        slide.style.transform = 'translateY(-${counter * 100}%)';
    });

    btnAnterior.style.display = "none";
}
btnSiguiente.addEventListener("click", function(){
    counter++;
    carrusel();
});

btnAnterior.addEventListener("click", function(){
    counter--;
    carrusel();
});
