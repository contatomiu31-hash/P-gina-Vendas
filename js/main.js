// Simulador da seção "A conta na prática"
(function(){
  var DOLAR = 5.5; // premissa exibida na nota abaixo do simulador
  var form = document.querySelector('.sim');
  if (!form) return;

  var gasto = form.querySelector('#gasto');
  var fmt = function(n){ return Math.round(n).toLocaleString('pt-BR'); };
  var $ = function(id){ return document.getElementById(id); };

  function update(){
    var g = Number(gasto.value);
    var ppd = Number(form.querySelector('input[name="ppd"]:checked').value);
    var bonus = Number(form.querySelector('input[name="bonus"]:checked').value);

    var pts = Math.round(g / DOLAR * ppd * 12);
    var com = Math.round(pts * (1 + bonus / 100));

    $('gasto-out').textContent = 'R$ ' + fmt(g);
    $('o-pts').textContent = fmt(pts);
    $('o-sem').textContent = fmt(pts) + ' milhas';
    $('o-bpct').textContent = bonus + '%';
    $('o-com').textContent = fmt(com) + ' milhas';
    $('o-diff').textContent = '+' + fmt(com - pts) + ' milhas';
    gasto.style.setProperty('--p', (g - gasto.min) / (gasto.max - gasto.min) * 100 + '%');
  }

  form.addEventListener('input', update);
  update();
})();
