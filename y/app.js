





//evento de click
const btn = document.querySelector("#btnaction");


const resc = document.querySelector("#resc").innerHTML
function calc(){
    const peso = document.querySelector("#peso");
    const alt = document.querySelector("#alt");

    const valorp = peso.value
    const valora = alt.value
    var totalt = valora * valora
    var tudo = valorp / totalt
    var minideal = totalt * 18.5
    var maxideal = totalt * 24.9

  document.querySelector("#res").innerHTML = tudo.toFixed(2)

  var ele = document.querySelector("#resc")

  

   if(tudo < 18.5 ){
    ele.classList.toggle("rescom")
  document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre " + minideal.toFixed(1)  + "   e   " + maxideal.toFixed(1) 

   }
   if(tudo >= 18.5){
    ele.classList.toggle("rescom")
    document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre " + minideal.toFixed(1) + "" + "  e  " +"" + maxideal.toFixed(1) 
   }
   if(tudo >= 24.9){
    ele.classList.toggle("rescom")
    document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre " + minideal.toFixed(1) + "" + "  e  " +"" + maxideal.toFixed(1) 
   }
   if(tudo >= 30){
    ele.classList.toggle("rescom")
    document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre " + minideal.toFixed(1) + "" + "  e  " +"" + maxideal.toFixed(1) 
   }
   if(tudo >= 35){
    ele.classList.toggle("rescom")
    document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre " + minideal.toFixed(1) + "" + "  e  " +"" + maxideal.toFixed(1) 
   }
   if(tudo >= 40){
    ele.classList.toggle("rescom")
    document.querySelector("#resc").innerHTML = "De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre " + minideal.toFixed(1) + "" + "  e  " +"" + maxideal.toFixed(1) 
   }
    

}