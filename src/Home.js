
function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Pastel Düğümler</h1>
        <p>Doğadan ilham alan, el yapımı makrome ürünler. Bohem ve minimalist tarzı evinize taşıyın.</p>
      </section>
      
      <section className="producer-application">
        <div className="application-container">
          <div className="application-content">
            <div className="content-text">
              <h2>El Emeğinizin Değerini Keşfedin</h2>
              <p className="subtitle">Evde yaptığınız el işi ürünleri gelire dönüştürme zamanı geldi!</p>
              
              <div className="benefits-grid">
                <div className="benefit">
                  <div className="benefit-icon">🏠</div>
                  <span>Evden rahatça çalışın</span>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">💰</div>
                  <span>Ek gelir elde edin</span>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">🤝</div>
                  <span>Profesyonel destek alın</span>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✨</div>
                  <span>Yaratıcılığınızı geliştirin</span>
                </div>
              </div>
              
              <button className="producer-apply-btn">
                Üretici Olmak İstiyorum
              </button>
              
              <p className="apply-note">
                Başvuru ücretsizdir. İlk satışınızdan sonra kazanmaya başlayın.
              </p>
            </div>
            
            <div className="content-image">
              <div className="image-wrapper">
                <img src="/images/ev_hanımı.jpg" alt="El işi yapan kadın" />
                <div className="image-overlay">
                  <div className="stats">
                    <div className="stat">
                      <strong>500+</strong>
                      <span>Mutlu Üretici</span>
                    </div>
                    <div className="stat">
                      <strong>₺2,500</strong>
                      <span>Ortalama Aylık Gelir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="producer-showcase">
        <div className="showcase-container">
          <h2>Başarı Hikayelerimiz</h2>
          <p className="showcase-subtitle">Evlerinde el işi yaparak hayallerini gerçekleştiren kadınlarımızla tanışın</p>
          
          <div className="producers-grid">
            <div className="producer-card text-only">
              <div className="producer-info-full">
                <div className="text-badge">⭐ En Çok Satılan</div>
                <h3>Ayşe H.</h3>
                <p className="producer-location">İstanbul, Kadıköy</p>
                <p className="producer-story">3 çocuk annesi Ayşe, evde makrome duvar askısı yaparak ayda ₺3,200 kazanıyor. El emeği ürünleriyle hem evine katkı sağlıyor hem de yaratıcılığını geliştiriyor.</p>
                <div className="producer-stats">
                  <span>🛍️ 127 Satış</span>
                  <span>⭐ 4.9 Puan</span>
                  <span>💰 ₺3,200/ay</span>
                </div>
                <blockquote className="producer-quote">
                  "Evde çocuklarımla vakit geçirirken aynı zamanda kazanç elde etmek harika bir duygu!"
                </blockquote>
              </div>
            </div>
            
            <div className="producer-card featured">
              <div className="producer-image">
                <img src="/images/2_evhanımı.webp" alt="Üretici Fatma" />
                <div className="producer-badge">🏆 Ayın Üreticisi</div>
              </div>
              <div className="producer-info">
                <h3>Fatma K.</h3>
                <p className="producer-location">Ankara, Çankaya</p>
                <p className="producer-story">Emekli öğretmen Fatma, örgü ve nakış ürünleriyle hayatına yeni bir sayfa açtı.</p>
                <div className="producer-stats">
                  <span>🛍️ 203 Satış</span>
                  <span>⭐ 4.8 Puan</span>
                </div>
              </div>
            </div>
            
            <div className="producer-card">
              <div className="producer-image">
                <img src="/images/3_evhanımı.webp" alt="Üretici Zeynep" />
                <div className="producer-badge">🌟 Yeni Yetenek</div>
              </div>
              <div className="producer-info">
                <h3>Zeynep M.</h3>
                <p className="producer-location">İzmir, Bornova</p>
                <p className="producer-story">Genç anne Zeynep, bebek ürünleri yaparak hem çocuğuna hem kendine vakit ayırıyor.</p>
                <div className="producer-stats">
                  <span>🛍️ 84 Satış</span>
                  <span>⭐ 4.7 Puan</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="showcase-action">
            <button className="join-producers-btn">
              Sen de Aramıza Katıl
            </button>
            <p className="action-note">Ücretsiz başvuru yap, hemen satmaya başla!</p>
          </div>
        </div>
      </section>
      
      <section className="about">
        <h2>Marka Hikayesi</h2>
        <p>Pastel Düğümler, doğa temalı ve bohem tarzı seven kadınlar için yumuşak pastel tonlarda, el emeği makrome ürünler sunar. Her ürün, doğal malzemelerle ve sevgiyle hazırlanır.</p>
      </section>
    </main>
  );
}

export default Home;
