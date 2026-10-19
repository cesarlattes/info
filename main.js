(function(){var t=document.querySelector('.bt'),n=document.querySelector('.nav'),h=document.querySelectorAll('.has');
function cs(x){h.forEach(function(l){if(l!==x){l.classList.remove('open');l.querySelector('.tg').setAttribute('aria-expanded','false')}})}
function ca(){cs();n.classList.remove('open');t.setAttribute('aria-expanded','false')}
t.onclick=function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)};
h.forEach(function(l){var b=l.querySelector('.tg');b.onclick=function(e){e.stopPropagation();var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o);cs(l)}});
document.addEventListener('click',function(e){if(!e.target.closest('.hd'))ca()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')ca()});})();
