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
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <div className="bg-overlay" />
      
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div className="animate-up">
          <h2 className="gold-text" style={{ fontSize: "0.9rem", letterSpacing: "4px", marginBottom: "1.5rem", textTransform: "uppercase" }}>
            ACCESO EXCLUSIVO
          </h2>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", color: "#fff" }}>
            Domina el Arte de la <br />
            <span className="gold-text">Seducción Moderna</span>
          </h1>
          <p style={{ color: "#aaa", fontSize: "1.1rem", marginBottom: "3.5rem", maxWidth: "600px", margin: "0 auto 3.5rem", lineHeight: "1.6" }}>
            Regístrate ahora para acceder a la clase gratuita donde revelamos los 3 pilares psicológicos para atraer a la mujer que deseas.
          </p>

          <form onSubmit={handleSubmit} className="glass-form" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <div className="form-group">
              <label className="form-label">Nombre Completo</label>
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
              <label className="form-label">Correo Electrónico</label>
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
              <label className="form-label">WhatsApp</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+52 ..."
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
              VER CLASE GRATIS AHORA
            </button>

            <div className="privacy-note">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Tu información está 100% protegida.</span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
