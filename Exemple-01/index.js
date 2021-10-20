function dataAtualFormatada()
{
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes  = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();

      hour = data.getHours().toString();
      minute = data.getMinutes().toString().padStart(2,"0");//padStart funciona igual ao padleft do c#
      seconds = data.getSeconds().toString();
    
    return diaF + "/" + mesF + "/" + anoF + " " + hour + ":" + minute + ":" + seconds;
}

console.log('Meu nome é "Gleidson dos Santos". Estou apreendendo javascript as ' + dataAtualFormatada());