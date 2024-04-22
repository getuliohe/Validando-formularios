export default function ehMenorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity("o usuário não é maior de idade!!")
    }
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date()
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

    return dataAtual >= dataMais18;
}