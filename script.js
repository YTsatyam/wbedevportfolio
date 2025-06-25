/* ---- DARK / LIGHT TOGGLE ---- */
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const now = root.getAttribute('data-theme');
  root.setAttribute('data-theme', now === 'light' ? 'dark' : 'light');
  toggleBtn.textContent = now === 'light' ? '🌙' : '☀️';
});

/* ---- TYPEWRITER HERO ---- */
const words = ["Developer", "Problem-Solver", "Creative Coder"];
let i = 0, j = 0, current = "", isDeleting = false, speed = 120;
function type() {
  const display = document.getElementById("typewriter");
  if (isDeleting) {
    current = words[i].substring(0, --j);
  } else {
    current = words[i].substring(0, ++j);
  }
  display.textContent = current;
  if (!isDeleting && j === words[i].length) {
    isDeleting = true; setTimeout(type, 1100);
  } else if (isDeleting && j === 0) {
    isDeleting = false; i = (i + 1) % words.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? speed / 2 : speed);
  }
}
type();

/* ---- INTERACTIVE CURSOR (dot trail) ---- */
const trail = [];
document.addEventListener('mousemove', e=>{
  const dot = document.createElement('div');
  dot.className='trail-dot'; trail.push(dot);
  dot.style.left=e.clientX+'px'; dot.style.top=e.clientY+'px';
  document.body.appendChild(dot);
  setTimeout(()=>dot.remove(),500);
});
