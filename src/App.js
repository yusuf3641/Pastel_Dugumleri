import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const cartDropdownRef = useRef(null);

  // Sepete ürün ekleme fonksiyonu
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.name === product.name);
      
      let newCart;
      if (existingItemIndex !== -1) {
        // Ürün zaten sepette varsa adetini artır
        newCart = prevCart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Yeni ürün ekliyorsa
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      
      return newCart;
    });
  };

  // Sepetten ürün çıkarma fonksiyonu (index ile)
  const removeFromCart = (index) => {
    setCart(prevCart => {
      const newCart = prevCart.filter((_, i) => i !== index);
      return newCart;
    });
  };

  // Ürün adına göre sepetten çıkarma fonksiyonu
  const removeProductFromCart = (productName) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.name !== productName);
      return newCart;
    });
  };

  // Ürün adedini artırma fonksiyonu
  const increaseQuantity = (productName) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.name === productName);
      
      if (existingItemIndex !== -1) {
        // Ürün sepette varsa, adedini artır
        const newCart = prevCart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        return newCart;
      } else {
        // Ürün sepette yoksa (bu durum normalde olmamalı)
        return prevCart;
      }
    });
  };

  // Ürün adedini azaltma fonksiyonu
  const decreaseQuantity = (productName) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.name === productName);
      
      if (existingItemIndex !== -1) {
        const currentItem = prevCart[existingItemIndex];
        const currentQuantity = currentItem.quantity || 1;
        
        if (currentQuantity > 1) {
          // Adet 1'den büyükse, sadece adedi azalt
          const newCart = prevCart.map((item, index) => 
            index === existingItemIndex 
              ? { ...item, quantity: currentQuantity - 1 }
              : item
          );
          return newCart;
        } else {
          // Adet 1 ise, ürünü tamamen sepetten çıkar
          const newCart = prevCart.filter((_, index) => index !== existingItemIndex);
          return newCart;
        }
      }
      return prevCart;
    });
  };

  // Sepeti temizleme fonksiyonu
  const clearCart = () => {
    setCart([]);
  };

  // Sepet dropdown'unu açma/kapama
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  // Sepet dropdown'unun dışına tıklanınca kapanması
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Sepetteki ürün sayısını hesaplama
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  // Sepet toplam fiyatını hesaplama
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <span>Pastel Düğümler</span>
        </Link>
        <div className="nav-links">
          <Link to="/products">Ürünler</Link>
          <div 
            className="cart-dropdown-container" 
            ref={cartDropdownRef}
            onMouseEnter={() => setIsCartDropdownOpen(true)}
            onMouseLeave={() => setIsCartDropdownOpen(false)}
          >
            <Link to="/cart" className="cart-link">
              Sepet ({getCartItemCount()})
            </Link>
            {isCartDropdownOpen && (
              <div className="cart-dropdown">
                <div className="cart-dropdown-header">
                  <h3>Sepetim</h3>
                </div>
                <div className="cart-dropdown-content">
                  {cart.length === 0 ? (
                    <p className="empty-cart-message">Sepetiniz boş</p>
                  ) : (
                    <>
                      <div className="cart-items">
                        {cart.map((item, index) => (
                          <div key={index} className="cart-item-dropdown">
                            <div className="cart-item-info">
                              <span className="cart-item-name">{item.name}</span>
                              <span className="cart-item-price">{item.price}₺</span>
                            </div>
                            <div className="cart-item-quantity">
                              Adet: {item.quantity || 1}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-dropdown-footer">
                        <div className="cart-total">
                          Toplam: {getCartTotal()}₺
                        </div>
                        <Link to="/cart" className="view-cart-btn">
                          Sepeti Görüntüle
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link to="/contact">İletişim</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} removeProductFromCart={removeProductFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
