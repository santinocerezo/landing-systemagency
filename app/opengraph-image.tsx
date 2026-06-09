import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#050505",
          backgroundImage: "linear-gradient(135deg, #0a1f47 0%, #050505 55%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundImage: "linear-gradient(135deg, #b5b5b5, #4a4a4a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: "#fff",
              boxShadow: "0 0 30px rgba(20, 107, 255, 0.55)",
            }}
          >
            SA
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            <span>System</span>
            <span style={{ color: "#53c8ff" }}>.agent</span>
          </div>
        </div>

        <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          Tu negocio vende y responde solo, las 24 horas.
        </div>

        <div style={{ fontSize: 32, color: "#b8b8b8", marginTop: 32, maxWidth: 880 }}>
          Web + agente de IA omnicanal + CRM para concesionarias.
        </div>
      </div>
    ),
    { ...size }
  );
}
