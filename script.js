const recommendations = [
  { type: 'beach', title: 'Bora Bora, French Polynesia', text: 'Clear lagoons and peaceful white-sand beaches.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
  { type: 'beach', title: 'Navagio Beach, Greece', text: 'A dramatic cove surrounded by bright blue water.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80' },
  { type: 'temple', title: 'Angkor Wat, Cambodia', text: 'Explore one of the world’s most remarkable temple complexes.', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80' },
  { type: 'temple', title: 'Kinkaku-ji, Japan', text: 'A golden pavilion surrounded by tranquil gardens.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80' },
  { type: 'country', title: 'Italy', text: 'Enjoy art, food, history, and beautiful coastal towns.', image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80' },
  { type: 'country', title: 'Thailand', text: 'Experience welcoming cities, islands, and flavorful cuisine.', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80' }
];

const results = document.querySelector('#recommendations');
const input = document.querySelector('#searchInput');
const message = document.querySelector('#searchMessage');

function showResults(term = '') {
  const query = term.trim().toLowerCase();
  const matches = query ? recommendations.filter(item => item.type.includes(query) || item.title.toLowerCase().includes(query)) : [];
  results.innerHTML = matches.map(item => `<article class="card"><img src="${item.image}" alt="${item.title}"><div class="card-body"><div class="tag">${item.type}</div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join('');
  if (!query) { message.textContent = ''; return; }
  message.textContent = matches.length ? `${matches.length} recommendations found.` : 'No recommendations found. Try beach, temple, or country.';
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelector('#searchButton').addEventListener('click', () => showResults(input.value));
input.addEventListener('keydown', event => { if (event.key === 'Enter') showResults(input.value); });
document.querySelector('#clearButton').addEventListener('click', () => { input.value = ''; results.innerHTML = ''; message.textContent = ''; });
document.querySelector('#contactForm').addEventListener('submit', event => { event.preventDefault(); document.querySelector('#formMessage').textContent = 'Thank you! Your message is ready to send.'; event.target.reset(); });
