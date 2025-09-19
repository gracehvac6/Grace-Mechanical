document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.querySelector('.nav-toggle');
navToggle?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav-links');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', ()=> {
    const btn = form.querySelector('button[type="submit"]');
    if(btn){ btn.disabled = true; btn.textContent = 'Enviando...' }
  });
}
