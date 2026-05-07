"use client";

import { useRouter } from "next/navigation";

export default function UpsellOne() {
  const router = useRouter();

  const handleNoThanks = () => {
    router.push("/gracias");
  };

  return (
    <main style={{ minHeight: "100vh", padding: "4rem 1rem", background: "#050505" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <div style={{ background: "var(--accent)", color: "#000", padding: "0.5rem 1rem", display: "inline-block", fontWeight: "bold", borderRadius: "4px", marginBottom: "2rem" }}>
          ¡ESPERA! NO CIERRES ESTA PÁGINA
        </div>
        
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1.5rem" }}>Añade la "Biblia del Lenguaje No Verbal" a tu pedido</h1>
        <p style={{ fontSize: "1.2rem", color: "#ccc", marginBottom: "3rem" }}>
          Esta es una oferta única que solo verás en este momento. El 93% de la comunicación es no verbal. Si no dominas esto, estás perdiendo el 90% de tus oportunidades.
        </p>

        <div className="glass" style={{ padding: "3rem", marginBottom: "3rem", border: "2px dashed var(--accent)" }}>
          <h2 style={{ marginBottom: "1rem" }}>Acceso de por vida por solo <span className="gold-text">$27 USD</span></h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Precio normal: $67 USD</p>
          
          <a 
            href="https://pay.hotmart.com/UPSELL_ID" 
            className="btn btn-primary" 
            style={{ width: "100%", padding: "1.5rem", fontSize: "1.3rem" }}
          >
            SÍ, AÑADIR A MI PEDIDO (UN SOLO CLIC)
          </a>
        </div>

        <button 
          onClick={handleNoThanks}
          style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", textDecoration: "underline" }}
        >
          No gracias, no quiero dominar el lenguaje no verbal por ahora
        </button>
      </div>
    </main>
  );
}
