document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('.store-section');

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        sections.forEach(section => {
            const cards = section.querySelectorAll('.app-card');
            let hasVisibleCards = false;

            cards.forEach(card => {
                const title = card.querySelector('.app-title').textContent.toLowerCase();
                const desc = card.querySelector('.app-desc').textContent.toLowerCase();

                // Verificăm dacă titlul sau descrierea conțin textul căutat
                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'flex'; // Afișăm cardul
                    hasVisibleCards = true;
                } else {
                    card.style.display = 'none'; // Ascundem cardul
                }
            });

            // Dacă o secțiune (ex: "Jocuri Web") nu are nicio aplicație vizibilă, ascundem toată secțiunea
            if (hasVisibleCards) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});