$(document).ready(function (){
    $('.card').each(function () {
        $(this).click(function () {
            $('#gambar').remove();
            $('#audio').remove();
            const hewan = $(this).find('h4').attr('id');
            $(this).prepend(`<img id="gambar" class="card-img-top" src="assets/img/${hewan}.jpg" alt="">`);
            $(this).append(`<audio src="assets/audio/${hewan}.mp3" autoplay id="audio"></audio>`);
        });
    });
});