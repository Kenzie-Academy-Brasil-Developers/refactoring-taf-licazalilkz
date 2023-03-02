// Implemente aqui as funções
function validGender(genero){
    if(genero === "male"){
       return true;
    }
    else if(genero === "female"){
       return true;
    }
    return false
}

function validHeight(genero, altura){
    if(genero === 'male'){
        if(altura > 1.69){
            return true;
        }
    }
    if(genero === 'female'){
        if(altura > 1.59){
            return true;
        }
    }
    return false;
}

function validAbs(abs, genero){
    if(genero === 'male' && abs > 40){
        return true;
    }
    else if(genero === 'female' && abs > 40){
        return true;
    }
   return false;
}

function validSwin(metrosNado, tempoNado, secMergulho, genero){
    if(genero === 'male' && metrosNado > 99 && tempoNado < 61 || secMergulho>29){
        return true;
    }
    else if(genero === 'female' && metrosNado > 99 && tempoNado < 61 || secMergulho > 29){
        return true;
    }
    return false
}

function validBarTest(barras, secBarra, genero){
    if(genero === 'male'){
        if(barras > 5 || secBarra < 16){
            return true;
        }
    }
    else if(genero === 'female'){
        if(barras > 4 || secBarra < 13){
            return true;
        }
    }
    return false;
}

function validRun(corrida, tempoCorrida, genero){
    if(genero === 'male'){
        if(corrida > 2999 && tempoCorrida < 721 || corrida > 4999 && tempoCorrida < 1201 ){
            return true;
        }
    }
    else if(genero === 'female'){
        if(corrida > 3999 && tempoCorrida < 901 || corrida > 5999 && tempoCorrida < 1321 ){
            return true;
        }
    }
    return false;
}

function areCandidateResultsValid(genero, altura, barras, secBarra, abs, corrida, tempoCorrida, metrosNado, tempoNado, secMergulho){
    if(        
        validGender(genero) && 
        validHeight(genero, altura) && 
        validAbs(abs, genero) &&
        validSwin(metrosNado, tempoNado,secMergulho,genero) &&
        validBarTest(barras,secBarra,genero) &&
        validRun(corrida,tempoCorrida,genero)
    ){
        return true;
    }
    return false;
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
function showMessage(message){
    console.log(message.toString().toUpperCase());
}

showMessage(areCandidateValid);