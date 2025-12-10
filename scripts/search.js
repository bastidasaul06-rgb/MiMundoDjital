const publicaciones = [
  {
    titulo: 'Simulador Braille',
    url: 'SimuladorBralle.html',
    categoria: 'otros',
    palabrasClave: ['braille', 'simulador', 'accesibilidad', 'interactivo', 'herramienta', 'sistema']
  },
  {
    titulo: 'Derecho a la Educación',
    url: 'publicasiondepotcas.html',
    categoria: 'escolares',
    palabrasClave: ['educacion', 'derecho', 'politicas', 'escolar', 'derechos', 'acceso']
  },
  {
    titulo: 'Publicación sobre GitHub',
    url: 'dominio.html',
    categoria: 'programacion',
    palabrasClave: ['github', 'control', 'versiones', 'desarrollo', 'colaborativo', 'git', 'software', 'codigo']
  },
  {
    titulo: 'Área de Juegos',
    url: 'PublicasionAreaDeJuegos.html',
    categoria: 'entretenimiento',
    palabrasClave: ['juegos', 'games', 'interactivo', 'diversion', 'entretenimiento', 'gaming', 'divertido']
  },
  {
    titulo: 'Mi Primera Publicación',
    url: 'PrimerPublicasion.html',
    categoria: 'general',
    palabrasClave: ['primera', 'publicacion', 'inicio', 'bienvenida', 'articulo', 'primer']
  },
  {
    titulo: 'Cursos',
    url: 'cursos.html',
    categoria: 'escolares',
    palabrasClave: ['cursos', 'aprendizaje', 'educacion', 'recursos', 'formacion', 'ensenanza', 'clases']
  }
];

const searchDOM = {
  btnSearch: document.getElementById('btnSearch'),
  searchInput: document.getElementById('searchInput'),
  searchResults: document.getElementById('searchResults'),
  filterCategory: document.getElementById('filterCategory'),
};

function performSearch() {
  const keyword = searchDOM.searchInput.value.toLowerCase().trim();
  const category = searchDOM.filterCategory.value;
  searchDOM.searchResults.innerHTML = '';

  if (!keyword && !category) {
    searchDOM.searchResults.innerHTML = '<p class="no-results">Ingresa una palabra clave o selecciona una categoría para buscar.</p>';
    return;
  }

  const resultados = publicaciones.filter(pub => {
    const coincideCategoria = !category || pub.categoria === category;

    let coincideBusqueda = true;
    if (keyword) {
      coincideBusqueda = pub.palabrasClave.some(palabra => palabra.includes(keyword));
    }

    return coincideCategoria && coincideBusqueda;
  });

  if (resultados.length === 0) {
    searchDOM.searchResults.innerHTML = `<p class="no-results">No se encontraron publicaciones con tu búsqueda "${keyword}" ${category ? 'en la categoría: ' + category : ''}.</p>`;
    return;
  }

  searchDOM.searchResults.innerHTML = '';
  resultados.forEach(pub => {
    const resultHTML = `
      <article class="search-result">
        <h4>${pub.titulo}</h4>
        <span class="category-badge">${pub.categoria.charAt(0).toUpperCase() + pub.categoria.slice(1)}</span>
        <p>Categoría: <strong>${pub.categoria}</strong></p>
        <a href="${pub.url}" class="btn-secondary" ${pub.url.includes('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>Ir a la publicación</a>
      </article>
    `;
    searchDOM.searchResults.innerHTML += resultHTML;
  });

  const mensaje = `Se encontraron ${resultados.length} publicación${resultados.length !== 1 ? 'es' : ''}`;
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.classList.add('visually-hidden');
  announcement.textContent = mensaje;
  searchDOM.searchResults.prepend(announcement);
}

searchDOM.btnSearch.addEventListener('click', performSearch);

searchDOM.searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

searchDOM.filterCategory.addEventListener('change', performSearch);
