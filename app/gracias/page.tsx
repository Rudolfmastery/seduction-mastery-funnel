export default function ThankYou() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
        <div className="glass fade-in" style={{ padding: "4rem 2rem" }}>
          <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🎉</div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>¡Bienvenido a la Familia!</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "2.5rem" }}>
            Tu compra se ha realizado con éxito. En los próximos minutos recibirás un correo electrónico con tus datos de acceso a la plataforma.
          </p>
          
          <div style={{ textAlign: "left", background: "rgba(255,255,255,0.02)", padding: "1.5rem", borderRadius: "8px", border: "1px solid var(--card-border)" }}>
            <h4 style={{ marginBottom: "0.5rem" }}>Próximos pasos:</h4>
            <ol style={{ paddingLeft: "1.5rem", color: "var(--text-muted)" }}>
              <li style={{ marginBottom: "0.5rem" }}>Revisa tu bandeja de entrada (y la de spam por si acaso).</li>
              <li style={{ marginBottom: "0.5rem" }}>Únete a nuestro grupo exclusivo de WhatsApp (enlace en el email).</li>
              <li>Empieza con el Módulo 1 de inmediato.</li>
            </ol>
          </div>

          <a href="/" className="btn btn-outline" style={{ marginTop: "2.5rem" }}>
            VOLVER AL INICIO
          </a>
        </div>
      </div>
    </main>
  );
}
