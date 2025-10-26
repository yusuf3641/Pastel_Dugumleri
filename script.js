document.addEventListener('DOMContentLoaded', () => {
    const listings = [
        { title: 'Şehir Merkezinde Daire', price: '1.500.000 TL', description: '3+1, 120m²' },
        { title: 'Deniz Manzaralı Villa', price: '5.000.000 TL', description: '5+2, 300m²' },
        { title: 'Sakin Bölgede Arsa', price: '750.000 TL', description: '600m² arsa' }
    ];
    const listingsContainer = document.querySelector('.listings');
    listings.forEach(listing => {
        const card = document.createElement('div');
        card.className = 'listing-card';
        card.innerHTML = `<h3>${listing.title}</h3><p>${listing.description}</p><strong>${listing.price}</strong>`;
        listingsContainer.appendChild(card);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mesajınız alınmıştır!');
    });
});
