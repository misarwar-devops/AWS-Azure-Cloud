import { useState, useEffect, useRef } from "react";

// ── Icon primitives ──────────────────────────────────────────────────────────
const AzureIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
    <defs>
      <linearGradient id="az1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078D4" />
        <stop offset="100%" stopColor="#50E6FF" />
      </linearGradient>
    </defs>
    <path d="M33.34 7.07L3.5 55.93l18.87 32.93h71.13L33.34 7.07z" fill="url(#az1)" />
    <path d="M55.2 7.07L26.13 58.27l13.6 23.73 34.27-37.8L55.2 7.07z" fill="#0078D4" opacity="0.6" />
  </svg>
);

const DockerIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .103.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185" fill="#099CEC" />
    <path d="M23.763 9.89c-.21-.376-.54-.687-.95-.868-.416-.181-.896-.254-1.418-.224a4.18 4.18 0 00-.618.082 2.768 2.768 0 00-.633-1.238 2.763 2.763 0 00-1.165-.736l-.374-.103-.213.33a3.328 3.328 0 00-.44 1.02 3.23 3.23 0 00.04 1.368c-.156.082-.302.176-.432.278H1.562a.56.56 0 00-.56.56v1.888c0 .308.25.558.56.558h6.46c-.047.092-.087.185-.12.28a3.26 3.26 0 00-.138 1.35c.04.435.18.865.41 1.25.232.383.547.71.927.962a3.9 3.9 0 001.257.52 5.75 5.75 0 001.358.084c.447-.02.886-.1 1.31-.233a5.47 5.47 0 001.186-.548 5.31 5.31 0 001.014-.853 5.15 5.15 0 00.71-1.13h.165a3.268 3.268 0 002.217-.898 3.14 3.14 0 00.74-1.12 3.07 3.07 0 00.15-1.327z" fill="#099CEC" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ContainerIcon = ({ size = 20, color = "#50E6FF" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const ShieldIcon = ({ size = 16, color = "#10B981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GlobeIcon = ({ size = 16, color = "#F59E0B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ActivityIcon = ({ size = 14, color = "#10B981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const CpuIcon = ({ size = 14, color = "#8B5CF6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const MemoryIcon = ({ size = 14, color = "#F59E0B" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 6V4m4 2V4m4 2V4m4 2V4M6 18v2m4-2v2m4-2v2m4-2v2" />
  </svg>
);

const ZapIcon = ({ size = 14, color = "#EF4444" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CheckCircleIcon = ({ size = 14, color = "#10B981" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowDownIcon = ({ size = 20, color = "#50E6FF" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

// ── Animated pulse dot ───────────────────────────────────────────────────────
const PulseDot = ({ color = "#10B981", size = 8 }) => (
  <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
    <span style={{
      position: "absolute", width: size * 2, height: size * 2, borderRadius: "50%",
      backgroundColor: color, opacity: 0.3,
      animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite"
    }} />
    <span style={{ width: size, height: size, borderRadius: "50%", backgroundColor: color }} />
  </span>
);

// ── Animated flow arrow between nodes ───────────────────────────────────────
const FlowArrow = ({ delay = 0, color = "#0078D4", label = "" }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, margin: "2px 0" }}>
    {label && (
      <span style={{ fontSize: 10, color: "#64748B", fontFamily: "monospace", letterSpacing: 1 }}>{label}</span>
    )}
    <div style={{ position: "relative", height: 36, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 2, height: 24, background: `linear-gradient(to bottom, transparent, ${color})` }} />
      <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: `8px solid ${color}` }} />
      <div style={{
        position: "absolute", top: 0, width: 6, height: 6, borderRadius: "50%",
        backgroundColor: color, boxShadow: `0 0 8px ${color}`,
        animation: `flowDrop 1.4s ${delay}s ease-in infinite`
      }} />
    </div>
  </div>
);

// ── Section heading ──────────────────────────────────────────────────────────
const SectionTitle = ({ icon, children, accent = "#0078D4" }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
    <div style={{
      width: 36, height: 36, borderRadius: 10,
      background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
      border: `1px solid ${accent}44`, display: "flex", alignItems: "center", justifyContent: "center"
    }}>{icon}</div>
    <div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: accent, letterSpacing: 2, textTransform: "uppercase" }}>{children}</div>
      <div style={{ width: 40, height: 2, background: `linear-gradient(to right, ${accent}, transparent)`, marginTop: 3 }} />
    </div>
  </div>
);

// ── Glass card ───────────────────────────────────────────────────────────────
const GlassCard = ({ children, style = {}, glow = "rgba(0,120,212,0.15)", hover = true }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${hovered ? "rgba(0,120,212,0.5)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 16,
        padding: 20,
        transition: "all 0.3s ease",
        boxShadow: hovered ? `0 8px 32px ${glow}, 0 0 0 1px rgba(0,120,212,0.2)` : "0 4px 16px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-2px)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ── Service node in workflow ─────────────────────────────────────────────────
const ServiceNode = ({ name, url, external, color = "#0078D4", icon, small = false }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        padding: small ? "10px 16px" : "14px 22px",
        background: hov ? `linear-gradient(135deg, ${color}22, ${color}11)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? color + "88" : color + "33"}`,
        borderRadius: 14, cursor: "default",
        transition: "all 0.25s ease",
        boxShadow: hov ? `0 0 20px ${color}33` : "none",
        minWidth: small ? 100 : 130,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {icon}
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: small ? 11 : 13, color: "#E2E8F0", fontWeight: 600 }}>{name}</span>
      </div>
      {url && <span style={{ fontFamily: "monospace", fontSize: 9, color: "#F59E0B", letterSpacing: 0.5 }}>{url}</span>}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <PulseDot color={external ? "#F59E0B" : "#10B981"} size={5} />
        <span style={{ fontSize: 9, color: external ? "#F59E0B" : "#10B981", fontFamily: "monospace" }}>
          {external ? "EXTERNAL" : "INTERNAL"}
        </span>
      </div>
    </div>
  );
};

// ── CI/CD step node ──────────────────────────────────────────────────────────
const PipelineStep = ({ icon, label, sublabel, color = "#0078D4", step }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        padding: "14px 18px",
        background: hov ? `linear-gradient(135deg, ${color}22, rgba(0,0,0,0.4))` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? color + "88" : color + "33"}`,
        borderRadius: 14, transition: "all 0.25s ease",
        boxShadow: hov ? `0 0 24px ${color}44` : "none",
        minWidth: 110, position: "relative",
      }}
    >
      <div style={{
        position: "absolute", top: -10, right: -10,
        width: 20, height: 20, borderRadius: "50%",
        background: color, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, color: "#fff", fontWeight: 700, fontFamily: "monospace"
      }}>{step}</div>
      {icon}
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#E2E8F0", fontWeight: 600, textAlign: "center" }}>{label}</span>
      {sublabel && <span style={{ fontFamily: "monospace", fontSize: 9, color: "#64748B", textAlign: "center" }}>{sublabel}</span>}
    </div>
  );
};

// ── Infrastructure card ──────────────────────────────────────────────────────
const InfraCard = ({ service }) => {
  const [hov, setHov] = useState(false);
  const isExternal = service.ingress === "External";
  const accentColor = isExternal ? "#F59E0B" : "#0078D4";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? `linear-gradient(145deg, ${accentColor}18, rgba(0,0,0,0.6))`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? accentColor + "66" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16, padding: "18px 16px",
        transition: "all 0.3s ease",
        boxShadow: hov ? `0 8px 32px ${accentColor}22` : "0 2px 8px rgba(0,0,0,0.3)",
        transform: hov ? "translateY(-3px) scale(1.01)" : "none",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
        background: `linear-gradient(to right, transparent, ${accentColor}66, transparent)`
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}11)`,
            border: `1px solid ${accentColor}44`,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <ContainerIcon size={16} color={accentColor} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "#F1F5F9", fontWeight: 700 }}>{service.name}</div>
            <div style={{ fontSize: 9, color: "#64748B", fontFamily: "monospace" }}>Container App</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <PulseDot color="#10B981" size={5} />
          <span style={{ fontSize: 9, color: "#10B981", fontFamily: "monospace" }}>HEALTHY</span>
        </div>
      </div>

      {/* Metrics grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
        {[
          { icon: <CpuIcon />, label: "CPU", value: service.cpu },
          { icon: <MemoryIcon />, label: "RAM", value: service.ram },
          { icon: <ZapIcon />, label: "Min Rep.", value: service.minReplicas },
          { icon: <ActivityIcon />, label: "Max Rep.", value: service.maxReplicas },
        ].map((m, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "6px 8px"
          }}>
            {m.icon}
            <div>
              <div style={{ fontSize: 8, color: "#64748B", fontFamily: "monospace" }}>{m.label}</div>
              <div style={{ fontSize: 11, color: "#CBD5E1", fontFamily: "'Space Mono', monospace", fontWeight: 600 }}>{m.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Port + ingress */}
      <div style={{ display: "flex", gap: 6, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: "4px 8px"
        }}>
          <span style={{ fontSize: 8, color: "#64748B", fontFamily: "monospace" }}>PORT</span>
          <span style={{ fontSize: 10, color: "#94A3B8", fontFamily: "monospace", fontWeight: 600 }}>{service.port}</span>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 4,
          background: isExternal ? "rgba(245,158,11,0.1)" : "rgba(0,120,212,0.1)",
          border: `1px solid ${accentColor}33`,
          borderRadius: 6, padding: "4px 8px"
        }}>
          {isExternal ? <GlobeIcon size={10} color="#F59E0B" /> : <ShieldIcon size={10} color="#0078D4" />}
          <span style={{ fontSize: 9, color: accentColor, fontFamily: "monospace", fontWeight: 600 }}>{service.ingress}</span>
        </div>
      </div>

      {/* URL if external */}
      {service.url && (
        <div style={{
          marginTop: 10, padding: "5px 8px", borderRadius: 6,
          background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)"
        }}>
          <span style={{ fontSize: 9, color: "#F59E0B", fontFamily: "monospace" }}>{service.url}</span>
        </div>
      )}
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
export default function AgenticCreedArchitecture() {
  const [activeTab, setActiveTab] = useState("workflow");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 2000);
    return () => clearInterval(t);
  }, []);

  const services = [
    { name: "frontend", cpu: "0.5 vCPU", ram: "1 Gi", minReplicas: 1, maxReplicas: 5, ingress: "External", port: 3000, url: "app.apiswagger.co.uk" },
    { name: "gateway", cpu: "0.5 vCPU", ram: "1 Gi", minReplicas: 1, maxReplicas: 10, ingress: "External", port: 8080, url: "gateway.apiswagger.co.uk" },
    { name: "notification", cpu: "0.25 vCPU", ram: "0.5 Gi", minReplicas: 0, maxReplicas: 5, ingress: "Internal", port: 5001 },
    { name: "useraccount", cpu: "0.25 vCPU", ram: "0.5 Gi", minReplicas: 0, maxReplicas: 5, ingress: "Internal", port: 5002 },
    { name: "userprofile", cpu: "0.25 vCPU", ram: "0.5 Gi", minReplicas: 0, maxReplicas: 5, ingress: "Internal", port: 5003 },
    { name: "sales", cpu: "0.5 vCPU", ram: "1 Gi", minReplicas: 1, maxReplicas: 8, ingress: "Internal", port: 5004 },
    { name: "account", cpu: "0.25 vCPU", ram: "0.5 Gi", minReplicas: 0, maxReplicas: 5, ingress: "Internal", port: 5005 },
  ];

  const tabs = [
    { id: "workflow", label: "Workflow" },
    { id: "cicd", label: "CI/CD Pipeline" },
    { id: "infra", label: "Infrastructure" },
  ];

  const internalServices = ["notification", "useraccount", "userprofile", "sales", "account"];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020B18",
      backgroundImage: `
        radial-gradient(ellipse at 20% 10%, rgba(0,120,212,0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(80,230,255,0.07) 0%, transparent 50%),
        linear-gradient(to bottom right, #020B18, #040D1A)
      `,
      fontFamily: "'Space Mono', 'Courier New', monospace",
      color: "#E2E8F0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes flowDrop {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(24px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.5; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .tab-btn:hover { background: rgba(0,120,212,0.15) !important; color: #50E6FF !important; }
        .section-anim { animation: slideIn 0.5s ease both; }
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)",
        padding: "0 40px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, #0078D4, #50E6FF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,120,212,0.5)",
            }}>
              <AzureIcon size={22} />
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F1F5F9", letterSpacing: 1 }}>AgenticCreed</div>
              <div style={{ fontSize: 9, color: "#0078D4", letterSpacing: 3, textTransform: "uppercase" }}>Azure Architecture · agentic-dev</div>
            </div>
          </div>

          {/* Status bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <PulseDot color="#10B981" size={6} />
              <span style={{ fontSize: 10, color: "#10B981" }}>7 Services Running</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <PulseDot color="#0078D4" size={6} />
              <span style={{ fontSize: 10, color: "#0078D4" }}>2 External Endpoints</span>
            </div>
            <div style={{ fontSize: 10, color: "#64748B" }}>agentic-dev · Azure Container Apps</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 40px 60px" }}>

        {/* ── Tab navigation ──────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 4, width: "fit-content", border: "1px solid rgba(255,255,255,0.06)" }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className="tab-btn"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 20px", borderRadius: 9, border: "none", cursor: "pointer",
                fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: 1,
                background: activeTab === tab.id ? "linear-gradient(135deg, #0078D4, #0063B1)" : "transparent",
                color: activeTab === tab.id ? "#fff" : "#94A3B8",
                boxShadow: activeTab === tab.id ? "0 4px 14px rgba(0,120,212,0.4)" : "none",
                transition: "all 0.2s ease",
              }}
            >{tab.label}</button>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            TAB 1 · WORKFLOW
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "workflow" && (
          <div className="section-anim">
            <SectionTitle icon={<AzureIcon size={18} />} accent="#0078D4">
              Application Request Flow · Azure Container Apps
            </SectionTitle>

            <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
              {/* Main flow column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

                {/* Internet users */}
                <GlassCard style={{ padding: "14px 28px", textAlign: "center" }} glow="rgba(80,230,255,0.2)">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                    <div style={{ fontSize: 22 }}>🌐</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#F1F5F9" }}>Internet Users</div>
                      <div style={{ fontSize: 9, color: "#64748B" }}>HTTPS Requests</div>
                    </div>
                  </div>
                </GlassCard>

                <FlowArrow color="#50E6FF" label="HTTPS" />

                {/* Frontend */}
                <ServiceNode
                  name="frontend"
                  url="app.apiswagger.co.uk"
                  external={true}
                  color="#F59E0B"
                  icon={<span style={{ fontSize: 16 }}>⚡</span>}
                />

                <FlowArrow color="#0078D4" label="API Calls" />

                {/* Gateway */}
                <ServiceNode
                  name="gateway"
                  url="gateway.apiswagger.co.uk"
                  external={true}
                  color="#0078D4"
                  icon={<span style={{ fontSize: 16 }}>🔀</span>}
                />

                <div style={{ position: "relative", height: 20, width: "100%", display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 2, height: "100%", background: "linear-gradient(to bottom, #0078D4, #0078D444)" }} />
                </div>

                {/* Internal services fan-out */}
                <div style={{
                  background: "rgba(0,120,212,0.05)", border: "1px solid rgba(0,120,212,0.15)",
                  borderRadius: 20, padding: "20px 24px",
                }}>
                  <div style={{ textAlign: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 10, color: "#0078D4", letterSpacing: 2, textTransform: "uppercase" }}>
                      Azure Container App Environment · agentic-dev
                    </span>
                    <div style={{ fontSize: 9, color: "#475569", marginTop: 2 }}>Internal Network · Private Ingress</div>
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                    {internalServices.map((svc, i) => (
                      <ServiceNode key={svc} name={svc} external={false} color="#10B981" small
                        icon={<ContainerIcon size={13} color="#10B981" />} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: legend + details */}
              <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 16 }}>
                <GlassCard glow="rgba(245,158,11,0.15)">
                  <div style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>PUBLIC ENDPOINTS</div>
                  {[
                    { name: "frontend", url: "app.apiswagger.co.uk", port: 3000 },
                    { name: "gateway", url: "gateway.apiswagger.co.uk", port: 8080 },
                  ].map(e => (
                    <div key={e.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#E2E8F0", fontWeight: 600 }}>{e.name}</div>
                        <div style={{ fontSize: 9, color: "#64748B", fontFamily: "monospace" }}>{e.url}</div>
                      </div>
                      <div style={{ fontSize: 9, color: "#F59E0B", background: "rgba(245,158,11,0.1)", borderRadius: 4, padding: "2px 6px" }}>:{e.port}</div>
                    </div>
                  ))}
                </GlassCard>

                <GlassCard glow="rgba(16,185,129,0.15)">
                  <div style={{ fontSize: 11, color: "#10B981", fontWeight: 700, marginBottom: 12, letterSpacing: 1 }}>INTERNAL SERVICES</div>
                  {internalServices.map(svc => (
                    <div key={svc} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <PulseDot color="#10B981" size={4} />
                      <span style={{ fontSize: 11, color: "#94A3B8" }}>{svc}</span>
                      <span style={{ marginLeft: "auto", fontSize: 8, color: "#475569", fontFamily: "monospace" }}>PRIVATE</span>
                    </div>
                  ))}
                </GlassCard>

                <GlassCard>
                  <div style={{ fontSize: 11, color: "#0078D4", fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>ENVIRONMENT</div>
                  {[
                    ["Environment", "agentic-dev"],
                    ["Platform", "Azure Container Apps"],
                    ["Region", "UK South"],
                    ["Services", "7 apps"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 10, color: "#64748B" }}>{k}</span>
                      <span style={{ fontSize: 10, color: "#CBD5E1", fontFamily: "monospace" }}>{v}</span>
                    </div>
                  ))}
                </GlassCard>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 2 · CI/CD
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "cicd" && (
          <div className="section-anim">
            <SectionTitle icon={<GithubIcon size={18} />} accent="#8B5CF6">
              CI/CD Pipeline · GitHub Actions → Azure
            </SectionTitle>

            {/* Pipeline steps */}
            <GlassCard style={{ padding: 32, marginBottom: 28 }} hover={false} glow="rgba(139,92,246,0.15)">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>

                {/* Step 1: Developer */}
                <PipelineStep step={1} color="#8B5CF6" label="Developer" sublabel="git push"
                  icon={<span style={{ fontSize: 24 }}>👨‍💻</span>} />

                {/* Arrow */}
                <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #8B5CF6, #6366F1)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #6366F1" }} />
                  </div>
                </div>

                {/* Step 2: GitHub Repo */}
                <PipelineStep step={2} color="#6366F1" label="GitHub Repo" sublabel="main branch"
                  icon={<GithubIcon size={24} />} />

                <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #6366F1, #0078D4)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #0078D4" }} />
                  </div>
                </div>

                {/* Step 3: GitHub Actions */}
                <PipelineStep step={3} color="#0078D4" label="GitHub Actions" sublabel="workflow trigger"
                  icon={<ZapIcon size={24} color="#0078D4" />} />

                <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #0078D4, #099CEC)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #099CEC" }} />
                  </div>
                </div>

                {/* Step 4: Docker Build */}
                <PipelineStep step={4} color="#099CEC" label="Docker Build" sublabel="image:tag"
                  icon={<DockerIcon size={24} />} />

                <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #099CEC, #50E6FF)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #50E6FF" }} />
                  </div>
                </div>

                {/* Step 5: ACR */}
                <PipelineStep step={5} color="#50E6FF" label="Azure ACR" sublabel="push image"
                  icon={<AzureIcon size={24} />} />

                <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                  <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #50E6FF, #10B981)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -1, top: -3, width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #10B981" }} />
                  </div>
                </div>

                {/* Step 6: Deploy */}
                <PipelineStep step={6} color="#10B981" label="ACA Deploy" sublabel="agentic-dev"
                  icon={<CheckCircleIcon size={24} color="#10B981" />} />
              </div>
            </GlassCard>

            {/* Detailed stage cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                {
                  title: "Source Stage", color: "#8B5CF6",
                  steps: ["git commit -m 'feat: ...'", "git push origin main", "PR merged → trigger"],
                  badge: "TRIGGER"
                },
                {
                  title: "Build Stage", color: "#099CEC",
                  steps: ["actions/checkout@v3", "docker build -t image:$SHA .", "docker tag image acr.azurecr.io/..."],
                  badge: "BUILD"
                },
                {
                  title: "Deploy Stage", color: "#10B981",
                  steps: ["az acr login", "docker push acr.azurecr.io/...", "az containerapp update --image ..."],
                  badge: "DEPLOY"
                },
              ].map(stage => (
                <GlassCard key={stage.title} glow={`${stage.color}22`}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: stage.color }}>{stage.title}</span>
                    <span style={{ fontSize: 8, color: stage.color, background: `${stage.color}22`, border: `1px solid ${stage.color}44`, borderRadius: 4, padding: "2px 6px" }}>{stage.badge}</span>
                  </div>
                  {stage.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, padding: "6px 10px", background: "rgba(0,0,0,0.3)", borderRadius: 6 }}>
                      <span style={{ fontSize: 10, color: "#475569", fontFamily: "monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ fontSize: 10, color: "#94A3B8", fontFamily: "monospace" }}>{s}</span>
                    </div>
                  ))}
                </GlassCard>
              ))}
            </div>

            {/* Per-service deploy matrix */}
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 11, color: "#64748B", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Service Deployment Matrix</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }}>
                {services.map(svc => (
                  <GlassCard key={svc.name} style={{ padding: 14, textAlign: "center" }} glow="rgba(16,185,129,0.1)">
                    <ContainerIcon size={20} color={svc.ingress === "External" ? "#F59E0B" : "#10B981"} />
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#E2E8F0", marginTop: 6 }}>{svc.name}</div>
                    <div style={{ fontSize: 8, color: "#475569", marginTop: 4, fontFamily: "monospace" }}>:{svc.port}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, marginTop: 6 }}>
                      <PulseDot color="#10B981" size={4} />
                      <span style={{ fontSize: 8, color: "#10B981" }}>DEPLOYED</span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB 3 · INFRASTRUCTURE
        ════════════════════════════════════════════════════════════════ */}
        {activeTab === "infra" && (
          <div className="section-anim">
            <SectionTitle icon={<ContainerIcon size={18} color="#50E6FF" />} accent="#50E6FF">
              Container App Infrastructure · agentic-dev
            </SectionTitle>

            {/* Environment header bar */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 20px", marginBottom: 24,
              background: "linear-gradient(135deg, rgba(0,120,212,0.15), rgba(80,230,255,0.05))",
              border: "1px solid rgba(0,120,212,0.3)", borderRadius: 14,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <AzureIcon size={28} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#F1F5F9" }}>agentic-dev</div>
                  <div style={{ fontSize: 10, color: "#0078D4" }}>Azure Container App Environment · UK South</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                {[
                  { label: "Total Apps", value: "7" },
                  { label: "External", value: "2" },
                  { label: "Internal", value: "5" },
                  { label: "Status", value: "Healthy" },
                ].map(m => (
                  <div key={m.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#50E6FF" }}>{m.value}</div>
                    <div style={{ fontSize: 9, color: "#64748B", textTransform: "uppercase", letterSpacing: 1 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* External services row */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 10, color: "#F59E0B", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <GlobeIcon size={12} color="#F59E0B" /> External Ingress (Public)
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {services.filter(s => s.ingress === "External").map(svc => (
                  <InfraCard key={svc.name} service={svc} />
                ))}
              </div>
            </div>

            <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)", margin: "20px 0" }} />

            {/* Internal services grid */}
            <div>
              <div style={{ fontSize: 10, color: "#10B981", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <ShieldIcon size={12} color="#10B981" /> Internal Services (Private Network)
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
                {services.filter(s => s.ingress === "Internal").map(svc => (
                  <InfraCard key={svc.name} service={svc} />
                ))}
              </div>
            </div>

            {/* Network topology note */}
            <GlassCard style={{ marginTop: 24, padding: "16px 20px" }} hover={false}>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { color: "#F59E0B", label: "External Ingress", desc: "Public HTTPS, Custom domain via Azure Front Door DNS" },
                  { color: "#10B981", label: "Internal Ingress", desc: "Private within agentic-dev VNet, no public exposure" },
                  { color: "#0078D4", label: "Service Discovery", desc: "Internal DNS: <service>.internal.agentic-dev.azurecontainerapps.io" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 10, flex: 1, minWidth: 220 }}>
                    <div style={{ width: 3, borderRadius: 2, background: item.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: item.color, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 10, color: "#64748B" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
}
