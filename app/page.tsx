"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/oferta-especial");
  };

  return (
    <main style={{ position: "relative" }}>
      <div className="model-bg" />
      
      <div className="container-wide">
        {/* Logo Section */}
        <div className="logo" style={{ paddingTop: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#D3AE3D" style={{ marginBottom: "0.5rem" }}>
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
            <h1 className="serif" style={{ fontSize: "1.2rem", letterSpacing: "4px", fontWeight: "bold", color: "#D3AE3D" }}>SEDUCCIÓN</h1>
            <p className="ls-wide" style={{ fontSize: "0.6rem", color: "#666", marginTop: "-3px" }}>MODERNA</p>
          </div>
        </div>

        <div className="hero-section">
          {/* Left Column */}
          <div className="animate-up">
            <h2 className="gold ls-wide uppercase" style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
              ACCESO EXCLUSIVO
            </h2>
            <h1 className="serif" style={{ fontSize: "3.8rem", lineHeight: "1.1", marginBottom: "1.5rem" }}>
              Domina el Arte de la <br />
              <span className="gold">Seducción Moderna</span>
            </h1>
            
            <div style={{ width: "60px", height: "1px", background: "var(--accent)", margin: "2rem 0" }} />

            <p style={{ color: "#aaa", fontSize: "1rem", marginBottom: "4rem", maxWidth: "450px", lineHeight: "1.6" }}>
              Regístrate ahora para acceder a la clase gratuita donde revelamos los 3 pilares psicológicos para atraer a la mujer que deseas.
            </p>

            {/* Benefits List */}
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.5 2C11.5 2 13 3.5 13 5.5C13 7.5 11.5 9 9.5 9C7.5 9 6 7.5 6 5.5C6 3.5 7.5 2 9.5 2Z" />
                  <path d="M9.5 9V22M9.5 14H2M17 14H9.5M14.5 9C16.5 9 18 10.5 18 12.5C18 14.5 16.5 16 14.5 16C12.5 16 11 14.5 11 12.5C11 10.5 12.5 9 14.5 9Z" />
                </svg>
              </div>
              <div className="benefit-text">
                <h3>PSICOLOGÍA APLICADA</h3>
                <p>Descubre los mecanismos mentales que despiertan atracción real.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                </svg>
              </div>
              <div className="benefit-text">
                <h3>COMUNICACIÓN EFECTIVA</h3>
                <p>Aprende a generar conexión y mantener su interés naturalmente.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
                </svg>
              </div>
              <div className="benefit-text">
                <h3>CONFIANZA IRRESISTIBLE</h3>
                <p>Desarrolla tu mentalidad y presencia para destacar entre los demás.</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="testimonial-card">
              <div style={{ color: "var(--accent)", marginBottom: "1rem" }}>★★★★★</div>
              <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#ddd", marginBottom: "1.5rem" }}>
                "Esta metodología cambió por completo mi forma de relacionarme con las mujeres. Los resultados fueron instantáneos."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#333", overflow: "hidden" }}>
                   {/* <img src="/avatar.jpg" alt="Alejandro M." /> */}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem" }}>Alejandro M.</h4>
                  <p className="gold" style={{ fontSize: "0.7rem" }}>Miembro Premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-up" style={{ animationDelay: "0.2s" }}>
            <div className="form-card">
              {/* Form Header */}
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "0.6rem", 
                  color: "var(--accent)", 
                  fontSize: "0.75rem", 
                  fontWeight: "600",
                  letterSpacing: "1px", 
                  marginBottom: "1.2rem",
                  background: "rgba(211, 174, 61, 0.05)",
                  padding: "0.4rem 1rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(211, 174, 61, 0.1)"
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  ACCESO 100% GRATUITO
                </div>
                <h2 className="serif" style={{ fontSize: "2.4rem", marginBottom: "0.8rem", fontWeight: "400" }}>Reserva tu lugar ahora</h2>
                <p style={{ color: "#888", fontSize: "0.95rem" }}>La clase es gratuita por tiempo limitado.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: "0.7rem", letterSpacing: "1px", fontWeight: "600" }}>NOMBRE COMPLETO</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ej. Juan Pérez"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: "0.7rem", letterSpacing: "1px", fontWeight: "600" }}>CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: "0.7rem", letterSpacing: "1px", fontWeight: "600" }}>WHATSAPP</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+52 ..."
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem", borderRadius: "4px", padding: "1.3rem" }}>
                  <span style={{ flex: 1, textAlign: "center" }}>VER CLASE GRATIS AHORA</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <div className="privacy-note" style={{ opacity: 0.6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Tu información está 100% protegida.</span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Benefits */}
        <div className="footer-benefits">
          <div className="footer-benefit-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <h4>ACCESO INMEDIATO</h4>
            <p>Recibe el acceso al instante en tu correo y WhatsApp.</p>
          </div>
          <div className="footer-benefit-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M6 3h12l4 6-10 12L2 9z"></path>
            </svg>
            <h4>CONTENIDO PREMIUM</h4>
            <p>Estrategias probadas que generan resultados reales.</p>
          </div>
          <div className="footer-benefit-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h4>COMUNIDAD EXCLUSIVA</h4>
            <p>Únete a miles de hombres que ya están transformando su vida.</p>
          </div>
          <div className="footer-benefit-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h4>GARANTÍA TOTAL</h4>
            <p>Tu privacidad y satisfacción están 100% garantizadas.</p>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "4rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", color: "#444", fontSize: "0.7rem", letterSpacing: "2px" }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
            CONVIÉRTETE EN TU MEJOR VERSIÓN
          </div>
        </div>
      </div>
    </main>
  );
}
