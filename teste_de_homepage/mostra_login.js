var btn = document.getElementById('txt_login');
var fundo = document.querySelector('.barra_topo');
var imagens = document.querySelector('.bloco_1');
var tela_de_login = document.querySelector('.tela_de_login_invisivel');
var xiz = document.querySelector('#x_fechar')

// Aqui Vai Ser onde Vai Clicar Em 'Login' e Vai Aparecer a tela de login na tela
btn.addEventListener('click', function() {
    
  if(tela_de_login.style.display === 'block') {
      tela_de_login.style.display = 'none';
      fundo.style.opacity = '1'
      imagens.style.opacity = '1'
  } else {
      tela_de_login.style.display = 'block';
      fundo.style.opacity = '0.1';
      imagens.style.opacity = '0.1'
      fundo.style.transition = 'opacity 500ms' ;
      imagens.style.transition = 'opacity 300ms' ;
  }

});

// Aqui onde clica no x para poder fechar a aba de login
xiz.addEventListener('click', function() {
    
  if(tela_de_login.style.display === 'block') {
      tela_de_login.style.display = 'none';
      fundo.style.opacity = '1';
      imagens.style.opacity = '1';
  } else {
      tela_de_login.style.display = 'block';
      fundo.style.opacity = '0.1';
      imagens.style.opacity = '0.1';
      fundo.style.transition = 'opacity 500ms' ;
      imagens.style.transition = 'opacity 300ms' ;
  }

});

imagens.addEventListener('click', function() {
    
  if(tela_de_login.style.display === 'block') {
      tela_de_login.style.display = 'none';
      fundo.style.opacity = '1';
      imagens.style.opacity = '1';
  }

});
