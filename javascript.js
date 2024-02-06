const App = {
    //Carrega o acesso ao DOM
    input: window.document.getElementById('textmain'),
    Encriptar: window.document.querySelector('.crip'),
    Descriptar: window.document.querySelector('.descrip'),
    copiando: window.document.querySelector('.copy'),
    output: window.document.querySelector('.outputText'),
    
    
  
    //Salvar as chaves de criptografias
    keys: {
      a: 'ai',
      e: 'enter',
      i: 'imes',
      o: 'ober',
      u: 'ufat',
    },


  
    //funcao encriptar
    crip(text) {
      var chars = App.keys;
      App.output.innerHTML = text.replace(/[aeiou]/g, (m) => chars[m]);
    },
  
    //funcao descriptar
    descrip(text) {
      //Inverte o objeto App.keys Ex: {a:"ai"} => {ai:"a"}
      const flip = (data) =>
        Object.fromEntries(
          Object.entries(data).map(([key, value]) => [value, key])
        );
  
      var chars = flip(App.keys);
  
      App.output.innerHTML = text.replace(
        /(ai|enter|imes|ober|ufat)/g,
        (m) => chars[m]
      );
    },
  
    //funcao copiar
    copy(text) {
      try {                           
        navigator.clipboard.writeText(text);
        App.copiando.childNodes[1].classList.remove('bi-clipboard');
        App.copiando.childNodes[1].classList.add('bi-clipboard-check');
        App.copiando.classList.add('check');
        App.copiando.childNodes[3].innerText = 'Copiado';
        
      } catch (errado) {
        console.log('Copia do texto deu erro: ' + errado);

      }
    },


  
    //alterna o botão copiar
    copyToggle() {     
      App.output.innerHTML != ''     
        ? App.copiando.classList.add('show')
        : App.copiando.classList.remove('show');
      App.copiando.classList.remove('check');
      App.copiando.childNodes[1].classList.remove('bi-clipboard-check');
      App.copiando.childNodes[1].classList.add('bi-clipboard');
      App.copiando.childNodes[3].innerText = 'Copiar';
      
      
      
    },
    //remover a imagem e o texto deixando só o botão de copiar e a o descrit e encript
    remover(){
      if(App.output.value == ''){
        document.getElementById("myDiv").style.display = "block";
      }else{
        document.getElementById("myDiv").style.display = "none";
      }
      
    },


  
    //Inicializar
    iniciar() {
      /*Adiciona os listeners aos botôes.
      O addEventListener () é uma função embutida no JavaScript que leva o evento para ouvir e um segundo argumento a ser chamado sempre
      que o evento descrito for acionado. Qualquer número de manipuladores de eventos pode ser adicionado a um 
      único elemento sem sobrescrever os manipuladores de eventos existentes.*/
  
      App.input.addEventListener('keyup', () => {
        App.copiando.classList.remove('show');
        
      });
  
      App.Encriptar.addEventListener('click', () => {
        App.crip(App.input.value);
        App.remover();
        App.copyToggle();
        
        
      });
  
      App.Descriptar.addEventListener('click', () => {
        App.descrip(App.input.value);
        App.remover();
        App.copyToggle();
        
        
      });
  
      App.copiando.addEventListener('click', () => {
        App.copy(App.output.innerHTML);
        App.input.value = ""
        
      });
    },
  };
  
  //carrega o script dps que carregar por completo a página.
  window.onload = App.iniciar();

