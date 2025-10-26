
function Contact() {
  return (
    <main className="contact">
      <h2>İletişim</h2>
      <form className="contact-form">
        <label>
          İsim
          <input type="text" name="name" required />
        </label>
        <label>
          E-posta
          <input type="email" name="email" required />
        </label>
        <label>
          Mesaj
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button type="submit">Gönder</button>
      </form>
      <div className="social">
        <a href="#" aria-label="Instagram">📷 Instagram</a>
        <a href="#" aria-label="WhatsApp">📱 WhatsApp</a>
      </div>
    </main>
  );
}

export default Contact;
