$('textarea').on('keyup paste',function(){
    setTimeout(function () {
        let valorTextArea = $('textarea').val().length,
        palaravras= $('textarea').val().split(' ');
        // qtdDigitada= $('textarea').val().split('').length;
        // $('.qtd').text(qtdDigitada)

    $('.caracteres').text(valorTextArea);
    $('.palavras').text(palaravras);
    },200);
  
    console.log(palaravras)
});