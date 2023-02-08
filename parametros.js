function soma (num1, num2)
{

    return num1+num2;

}

console.log(soma(2,2))
console.log(soma(4,4))
console.log(soma(29832983, 29832832))

function nomeIdade ( nome, idade){
    return`meu nome é ${nome},e eu tenho ${idade} anos`;
}

console.log (nomeIdade("Felipe", 20))

function multiplicador (num1, num2)
{
    return num1 * num2;
}


console.log (multiplicador (soma(4,5), soma(5,10)))

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()