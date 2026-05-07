"use client";

import { useRouter } from "next/navigation";

export default function FreeClass() {
  const router = useRouter();

  return (
    <main style={{ minHeight: "100vh", padding: "4rem 1rem" }}>
      <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Tu Clase Maestra de <span className="gold-text">Seducción</span></h1>
        
        {/* Placeholder for Video - High conversion video area */}
        <div className="glass" style={{ 
          aspectRatio: "16/9", 
          width: "100%", 
          marginBottom: "3rem", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          background: "#000",
          position: "relative",
          overflow: "hidden"
        }}>
          <p style={{ color: "#555" }}>[VIDEO DE LA CLASE GRATUITA AQUÍ]</p>
          {/* In production, use: <iframe src="..." /> */}
        </div>

        <div className="fade-in" style={{ animationDelay: "1s" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>¿Listo para llevar tu juego al siguiente nivel?</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
            Si lo que viste en la clase te pareció útil, el programa completo "Seduction Mastery" te dará todas las herramientas paso a paso.
          </p>
          
          <button 
            onClick={() => router.push("/producto-principal")}
            className="btn btn-primary" 
            style={{ padding: "1.5rem 3rem", fontSize: "1.3rem" }}
          >
            QUIERO EL PROGRAMA COMPLETO - SEDUCTION MASTERY
          </button>
        </div>
      </div>
    </main>
  );
}
