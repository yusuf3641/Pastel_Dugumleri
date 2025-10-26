

function Cart({ cart, removeFromCart, removeProductFromCart, increaseQuantity, decreaseQuantity, clearCart }) {
  // Toplam hesaplama
  const totalPrice = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <main className="cart">
      <div className="cart-header">
        <h2>Sepetim</h2>
        <p className="cart-count">
          {totalItems > 0 ? `${totalItems} ürün` : 'Sepetiniz boş'}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Henüz sepetinizde ürün bulunmuyor.</p>
          <p>Alışverişe başlamak için ürünler sayfasını ziyaret edin.</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={`${item.id || item.name}-${index}`}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <div className="cart-item-price-section">
                    <div className="unit-price">Birim Fiyat: {item.price} ₺</div>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn decrease-btn"
                        onClick={() => decreaseQuantity(item.name)}
                        title={item.quantity > 1 ? "Adet azalt" : "Sepetten çıkar"}
                      >
                        −
                      </button>
                      <div className="item-quantity">Adet: {item.quantity}</div>
                      <button 
                        className="quantity-btn increase-btn"
                        onClick={() => increaseQuantity(item.name)}
                        title="Adet artır"
                      >
                        +
                      </button>
                    </div>
                    <div className="total-item-price">Toplam: {(item.price * (item.quantity || 1))} ₺</div>
                  </div>
                </div>
                <button 
                  className="remove-item-btn"
                  onClick={() => removeProductFromCart(item.name)}
                  title="Sepetten çıkar"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <h3>Toplam: {totalPrice} ₺</h3>
            </div>
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Sepeti Temizle
              </button>
              <button className="checkout-btn">
                Satın Al
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
