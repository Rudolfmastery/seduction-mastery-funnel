"use client";

export default function MainProduct() {
  return (
    <main style={{ minHeight: "100vh", padding: "4rem 1rem" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="gold-text">PROGRAMA AVANZADO</h2>
          <h1 style={{ fontSize: "3.5rem" }}>Seduction Mastery</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "1rem", color: "var(--text-muted)" }}>
            El sistema definitivo para convertirte en el hombre que ellas no pueden ignorar.
          </p>
        </div>

        <section className="glass" style={{ padding: "3rem", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>Lo que vas a lograr:</h2>
          <ul style={{ listStyle: "none", display: "grid", gap: "1.5rem" }}>
            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span className="gold-text" style={{ fontSize: "1.5rem" }}>✓</span>
              <div>
                <h4 style={{ fontSize: "1.2rem" }}>Confianza Inquebrantable</h4>
                <p style={{ color: "var(--text-muted)" }}>Elimina el miedo al rechazo y actúa con seguridad en cualquier entorno.</p>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span className="gold-text" style={{ fontSize: "1.5rem" }}>✓</span>
              <div>
                <h4 style={{ fontSize: "1.2rem" }}>Conversación Magnética</h4>
                <p style={{ color: "var(--text-muted)" }}>Nunca más te quedes sin saber qué decir. Domina el arte del "vibe".</p>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span className="gold-text" style={{ fontSize: "1.5rem" }}>✓</span>
              <div>
                <h4 style={{ fontSize: "1.2rem" }}>Escalamiento Natural</h4>
                <p style={{ color: "var(--text-muted)" }}>Aprende a pasar de la charla a la intimidad sin esfuerzo y sin incomodidad.</p>
              </div>
            </li>
          </ul>
        </section>

        <div style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "1rem", fontSize: "2rem" }}>Inversión Única: <span className="gold-text">$47 USD</span></h3>
          <p style={{ marginBottom: "2.5rem", color: "var(--text-muted)" }}>Precio regular: <del>$197 USD</del></p>
          
          <a 
            href="https://pay.hotmart.com/MAIN_PRODUCT_ID" 
            className="btn btn-primary" 
            style={{ width: "100%", padding: "1.8rem", fontSize: "1.5rem" }}
          >
            SÍ, QUIERO SER UN MAESTRO DE LA SEDUCCIÓN
          </a>
          
          <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Garantía de satisfacción de 7 días. Si no estás convencido, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </main>
  );
}
