import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Makrome Duvar Panosu",
    description: "El yapımı, pastel tonlarda, doğal pamuk ipiyle hazırlanmış duvar dekoru.",
    price: 189,
    image: "/images/duvar-panosu.jpg"
  },
  {
    id: 2,
    name: "Makrome Saksı Askısı",
    description: "Bitkilerinizi zarif bir şekilde sergilemeniz için tasarlanmış makrome saksı askısı.",
    price: 149,
    image: "/images/saksi-askisi.jpg"
  },
  {
    id: 3,
    name: "Makrome Anahtarlık",
    description: "Pastel tonlarda, sevimli ve kullanışlı el yapımı makrome anahtarlık.",
    price: 49,
    image: "/images/anahtarlik.jpg"
  },
  {
    id: 4,
    name: "Dekoratif Makrome Obje",
    description: "Evinize doğal bir dokunuş katan makrome objeler.",
    price: 119,
    image: "/images/dekoratif-obje.jpg"
  }
];

function Products({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Türkçe karakterleri normalize et
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  };

  // Arama terimini kullanarak ürünleri filtrele
  const filteredProducts = products.filter(product => {
    const searchNormalized = normalizeText(searchTerm.trim());
    const nameNormalized = normalizeText(product.name);
    const descNormalized = normalizeText(product.description);
    
    // Boş arama terimi için tüm ürünleri göster
    if (searchNormalized === "") return true;
    
    return nameNormalized.includes(searchNormalized) || 
           descNormalized.includes(searchNormalized);
  });

  // Arama terimini temizle
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Arama inputuna focus
  const focusSearch = () => {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  };

  return (
    <main className="products">
      <div className="products-header">
        <h2>Ürünler</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ürün ara... (makrome, duvar, saksi, anahtarlik)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="search-icons">
            {searchTerm && (
              <button 
                className="clear-icon" 
                onClick={clearSearch}
                title="Aramayı temizle"
              >
                ✕
              </button>
            )}
            <button 
              className="search-icon-btn" 
              onClick={focusSearch}
              title="Arama kutusuna odaklan"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
          <p>Lütfen farklı bir arama terimi deneyin.</p>
        </div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price} ₺</div>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Products;
