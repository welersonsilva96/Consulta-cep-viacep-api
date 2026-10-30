
document.getElementById('cep').addEventListener('blur', function(){
  let cep = this.value.replace(/\D/g,'');
  if(cep.length == 8){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('rua').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
    });
  }
});