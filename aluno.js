function validarFormulario() {

    if (!validarPrimeiraProva() || !validarSegundaProva() || !validarAvaliacaoInterdisciplinar() || 
        !validarSegundaAvalicaoInterdisciplinar() || !validarFrequencia()) {
        return false;
    }
    
    return true;
}

function validarPrimeiraProva() {
    var P1 = document.getElementById('primeiraProva').value.trim();
    
    if (P1 === "") { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite a nota da sua primeira prova!</a>'
          });
        return false;
    } 
    
    else if (isNaN(parseFloat(P1))) { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, utilize somente números!</a>'
          });
        return false;
    } 
    
    else if (parseFloat(P1) < 0 || parseFloat(P1) > 9) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite uma nota entre 0 e 9!</a>'
          });
        return false;
    }
    
    else {
        return true;
    }
}


function validarSegundaProva() {
    var P2 = document.getElementById('segundaProva').value.trim();
    
    if (P2 === "") { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite a nota da sua segunda prova!</a>'
          }); 
        return false;
    } 
    
    else if (isNaN(parseFloat(P2))) { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, utilize somente números!</a>'
          });
        return false;
    } 

    else if (parseFloat(P2) < 0 || parseFloat(P2) > 9) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite uma nota entre 0 e 9!</a>'
          });
        return false;
    }
    
    else {
        return true;
    }
}

function validarAvaliacaoInterdisciplinar() {
    var A1 = document.getElementById('avaliacaoInterdisciplinar').value.trim();
    
    if (A1 === "") { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite a nota da sua Avaliação Interdisciplinar 1</a>'
          }); 
        return false;
    } 
    
    else if (isNaN(parseFloat(A1))) { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, utilize somente números!</a>'
          });
        return false;
    } 

    else if (parseFloat(A1) < 0 || parseFloat(A1) > 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite uma nota entre 0 e 1!</a>'
          });
        return false;
    }
    
    else {
        return true;
    }
}

function validarSegundaAvalicaoInterdisciplinar() {
    var A2 = document.getElementById('segundaAvalicaoInterdisciplinar').value.trim();
    
    if (A2 === "") { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite a nota da sua Avaliação Interdisciplinar 2</a>'
          }); 
        return false;
    } 
    
    else if (isNaN(parseFloat(A2))) { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, utilize somente números!</a>'
          });
        return false;
    } 

    else if (parseFloat(A2) < 0 || parseFloat(A2) > 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite uma nota entre 0 e 1!</a>'
          });
        return false;
    }
    
    else {
        return true;
    }
}

function validarFrequencia() {
    var freq = document.getElementById('frequencia').value.trim();
    
    if (freq === "") { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, digite a sua frequência!</a>'
        }); 
        return false;
    } 
    
    else if (isNaN(parseFloat(freq))) { 
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>Por favor, utilize somente números!</a>'
        });
        return false;
    } 

    else if (parseFloat(freq) < 0 || parseFloat(freq) > 100) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: '<a>A frequência deve estar entre 0 e 100!</a>'
        });
        return false;
    }
    
    else {
        return true;
    }
}
