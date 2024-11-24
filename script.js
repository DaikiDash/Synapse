
// Función para mostrar el contenido de la sección activa
function showContent(id) {
    document.querySelectorAll('.content-item').forEach(function(item) {
        item.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// Función para publicar un post en la sección Home
function publishPost() {
    const postInput = document.getElementById('post-input');
    const postContent = postInput.value;

    if (postContent.trim() === '') return;

    const postFeed = document.getElementById('post-feed');
    const newPost = document.createElement('div');
    newPost.classList.add('post-item');

    newPost.innerHTML = `
        <div class="post-header">
            <span id="post-username">${'@' + localStorage.getItem('username')}</span>
        </div>
        <p>${postContent}</p>
    `;

    postFeed.appendChild(newPost);
    postInput.value = '';
}

// Función para buscar en la sección Explore
function search() {
    const searchInput = document.getElementById('search-input').value;
    const searchResults = document.getElementById('search-results');

    if (searchInput.trim() === '') {
        searchResults.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    // Aquí se mostrarían los resultados de búsqueda
    searchResults.innerHTML = `<p>Results for "${searchInput}" will be displayed here.</p>`;
}

// Función para alternar el menú desplegable
function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    const isVisible = menuContent.style.display === 'block';
    menuContent.style.display = isVisible ? 'none' : 'block';
}

// Función para inicializar el perfil del usuario
function initUserProfile() {
    const profileName = document.getElementById('profile-name');
    const profilePic = document.getElementById('profile-pic');
    const username = localStorage.getItem('username');

    if (username) {
        profileName.textContent = username;

        // Obtener la inicial del usuario
        const initial = username.charAt(0).toUpperCase();

        // Mostrar la inicial en el div ProfilePic
        profilePic.textContent = initial;

        // Actualizar el título de la página
        document.title = `${username}'s Profile - Synapse.com`;
    }
}

document.addEventListener('DOMContentLoaded', initUserProfile);