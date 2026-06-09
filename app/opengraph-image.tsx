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
          backgroundColor: "#08060f",
          backgroundImage: "linear-gradient(135deg, #2a1259 0%, #08060f 55%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundImage: "linear-gradient(135deg, #7c3aed, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            SA
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            <span>System</span>
            <span style={{ color: "#c4b5fd" }}>.agent</span>
          </div>
        </div>

        <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
          Tu negocio vende y responde solo, las 24 horas.
        </div>

        <div style={{ fontSize: 32, color: "#a39fb5", marginTop: 32, maxWidth: 880 }}>
          Web + agente de IA omnicanal + CRM para concesionarias.
        </div>
      </div>
    ),
    { ...size }
  );
}
