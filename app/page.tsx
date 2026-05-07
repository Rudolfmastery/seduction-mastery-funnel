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
    // Here you would typically send data to your CRM (ActiveCampaign, etc.)
    console.log("Form data:", formData);
    // Redirect to the tripwire page
    router.push("/oferta-especial");
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
        <div className="fade-in">
          <h2 className="gold-text" style={{ fontSize: "1.2rem", letterSpacing: "2px", marginBottom: "1rem" }}>
            ACCESO EXCLUSIVO
          </h2>
          <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
            Domina el Arte de la <span className="gold-text">Seducción Moderna</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "2.5rem" }}>
            Regístrate ahora para acceder a la clase gratuita donde revelamos los 3 pilares psicológicos para atraer a la mujer que deseas.
          </p>

          <form onSubmit={handleSubmit} className="glass" style={{ padding: "2.5rem", textAlign: "left" }}>
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
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              VER CLASE GRATIS AHORA
            </button>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem", textAlign: "center" }}>
              🔒 Tu información está 100% protegida.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
