"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PRODUCTS = [
  { id: 1, name: "Acelerador de Confianza", description: "Domina tu lenguaje corporal y voz.", price: 9.97 },
  { id: 2, name: "Maestría en Chat", description: "Qué decir por WhatsApp para concretar citas.", price: 9.97 },
  { id: 3, name: "Psicología de Atracción", description: "Entiende cómo piensan ellas realmente.", price: 9.97 },
];

// Placeholder Hotmart links - User needs to update these
const HOTMART_LINKS: Record<string, string> = {
  "1": "https://pay.hotmart.com/ID_PROD_1",
  "2": "https://pay.hotmart.com/ID_PROD_2",
  "3": "https://pay.hotmart.com/ID_PROD_3",
  "1,2": "https://pay.hotmart.com/ID_PROD_1_2",
  "1,3": "https://pay.hotmart.com/ID_PROD_1_3",
  "2,3": "https://pay.hotmart.com/ID_PROD_2_3",
  "1,2,3": "https://pay.hotmart.com/ID_PROD_ALL",
};

export default function TripwirePage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (selected.length === 3) {
      setTotalPrice(21.00);
    } else {
      setTotalPrice(selected.length * 9.97);
    }
  }, [selected]);

  const toggleProduct = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id].sort((a, b) => a - b));
    }
  };

  const getHotmartLink = () => {
    const key = selected.join(",");
    return HOTMART_LINKS[key] || "#";
  };

  const handleSkip = () => {
    router.push("/clase-gratis");
  };

  return (
    <main style={{ minHeight: "100vh", padding: "4rem 1rem" }}>
      <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
        <h2 className="gold-text" style={{ marginBottom: "1rem" }}>¡FELICIDADES! TU REGISTRO ESTÁ COMPLETO</h2>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Antes de ir a la clase... ¡Acelera tus resultados!</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}>
          He preparado estos 3 complementos Premium para que no solo aprendas la teoría, sino que veas resultados desde hoy mismo. 
          <span className="gold-text" style={{ display: "block", marginTop: "1rem" }}>¡Lleva los 3 y ahorra un 30%!</span>
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className={`glass tripwire-card ${selected.includes(product.id) ? 'selected' : ''}`}
              style={{ padding: "2rem", textAlign: "left", position: "relative" }}
              onClick={() => toggleProduct(product.id)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div className={`checkbox-custom ${selected.includes(product.id) ? 'checked' : ''}`}></div>
                <span className="gold-text" style={{ fontWeight: "bold" }}>$9.97 USD</span>
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>{product.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{product.description}</p>
            </div>
          ))}
        </div>

        <div className="glass" style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
          <h3 style={{ marginBottom: "1rem" }}>Resumen de tu pedido</h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", fontSize: "1.2rem" }}>
            <span>Total a pagar:</span>
            <span className="gold-text" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${totalPrice.toFixed(2)} USD</span>
          </div>
          
          <a 
            href={getHotmartLink()} 
            className={`btn btn-primary ${selected.length === 0 ? 'disabled' : ''}`}
            style={{ width: "100%", pointerEvents: selected.length === 0 ? 'none' : 'auto', opacity: selected.length === 0 ? 0.5 : 1 }}
          >
            SÍ, QUIERO ESTE ACCESO PREMIUM
          </a>
          
          <button 
            onClick={handleSkip}
            style={{ background: "none", border: "none", color: "var(--text-muted)", marginTop: "1.5rem", cursor: "pointer", textDecoration: "underline" }}
          >
            No gracias, prefiero ir directo a la clase gratis
          </button>
        </div>
      </div>
    </main>
  );
}
