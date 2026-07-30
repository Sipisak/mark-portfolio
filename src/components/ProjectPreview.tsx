import { T, accentAlpha } from "../theme";

type PreviewType = "signalist" | "invoice" | "roofing";

function BrowserFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{
        background: T.bg,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: `0 24px 70px ${accentAlpha(0.08)}`,
      }}
    >
      <div
        style={{
          height: 34,
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: "0 13px",
          background: T.surface2,
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        {["#ff6b6b", "#ffd166", "#55d6be"].map((color) => (
          <span key={color} style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
        ))}
        <span
          style={{
            marginLeft: 8,
            color: T.muted,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 9,
          }}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function SignalistPreview() {
  return (
    <BrowserFrame label="Signalist dashboard interface preview">
      <div className="preview-shell" style={{ display: "grid", gridTemplateColumns: "128px 1fr", minHeight: 310 }}>
        <aside style={{ padding: 16, background: T.surface, borderRight: `1px solid ${T.border}` }}>
          <div style={{ color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, marginBottom: 22 }}>
            Signalist<span style={{ color: T.accent }}>.</span>
          </div>
          {["Overview", "Watchlist", "Alerts", "Insights"].map((item, index) => (
            <div
              key={item}
              style={{
                padding: "8px 9px",
                marginBottom: 5,
                borderRadius: 6,
                color: index === 0 ? T.accent : T.muted,
                background: index === 0 ? T.accentLow : "transparent",
                fontSize: 10,
              }}
            >
              {item}
            </div>
          ))}
        </aside>

        <div style={{ padding: 18, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 15 }}>
            <div>
              <div style={{ color: T.muted, fontSize: 9, textTransform: "uppercase", letterSpacing: ".08em" }}>Portfolio overview</div>
              <div style={{ color: T.white, fontSize: 20, fontWeight: 700, marginTop: 3 }}>$42,680.24</div>
            </div>
            <span style={{ color: "#55d6be", background: "rgba(85,214,190,.1)", border: "1px solid rgba(85,214,190,.25)", height: 24, padding: "4px 8px", borderRadius: 5, fontSize: 9 }}>
              +3.42%
            </span>
          </div>

          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 9, padding: 13, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: T.muted, fontSize: 9, marginBottom: 8 }}>
              <span>Market value</span>
              <span>1D · 1W · 1M · 1Y</span>
            </div>
            <svg viewBox="0 0 520 120" width="100%" height="112" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="signalistArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[24, 48, 72, 96].map((y) => (
                <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="var(--color-border)" strokeWidth="1" />
              ))}
              <path d="M0 98 C45 84 58 92 94 69 S151 78 188 57 S245 62 282 41 S336 54 374 28 S433 35 470 18 S501 23 520 10 L520 120 L0 120 Z" fill="url(#signalistArea)" />
              <path d="M0 98 C45 84 58 92 94 69 S151 78 188 57 S245 62 282 41 S336 54 374 28 S433 35 470 18 S501 23 520 10" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {[
              ["AAPL", "$221.38", "+1.12%"],
              ["NVDA", "$118.42", "+2.84%"],
              ["MSFT", "$428.91", "-0.31%"],
            ].map(([symbol, price, change]) => (
              <div key={symbol} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 7, padding: 9 }}>
                <div style={{ color: T.white, fontSize: 10, fontWeight: 600 }}>{symbol}</div>
                <div style={{ color: T.muted, fontSize: 9, marginTop: 4 }}>{price}</div>
                <div style={{ color: change.startsWith("+") ? "#55d6be" : "#ff7b7b", fontSize: 8, marginTop: 2 }}>{change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function InvoicePreview() {
  const rows = [
    ["INV-2026-1042", "Kovo Novák", "12 480 CZK", "Review"],
    ["INV-2026-1041", "Cloud Services", "349 EUR", "Rule needed"],
    ["INV-2026-1040", "Office Market", "4 912 CZK", "Approved"],
  ];

  return (
    <BrowserFrame label="Invoice automation review interface preview">
      <div className="invoice-preview" style={{ minHeight: 310, padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, marginBottom: 14 }}>
          <div>
            <div style={{ color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15 }}>
              Invoice Review
            </div>
            <div style={{ color: T.muted, fontSize: 9, marginTop: 2 }}>Human-in-the-loop processing queue</div>
          </div>
          <span style={{ color: T.accent, background: T.accentLow, border: `1px solid ${accentAlpha(0.25)}`, borderRadius: 5, padding: "5px 8px", fontSize: 8 }}>
            3 awaiting review
          </span>
        </div>

        <div className="invoice-preview-grid" style={{ display: "grid", gridTemplateColumns: "1.12fr .88fr", gap: 10 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr .8fr .7fr", gap: 8, padding: "9px 10px", color: T.muted, fontSize: 8, textTransform: "uppercase", borderBottom: `1px solid ${T.border}` }}>
              <span>Invoice</span><span>Supplier</span><span>Amount</span><span>Status</span>
            </div>
            {rows.map(([invoice, supplier, amount, status], index) => (
              <div
                key={invoice}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 1fr .8fr .7fr",
                  gap: 8,
                  padding: "11px 10px",
                  fontSize: 8,
                  color: index === 0 ? T.text : T.muted,
                  background: index === 0 ? T.accentLow : "transparent",
                  borderBottom: index < rows.length - 1 ? `1px solid ${T.border}` : "none",
                }}
              >
                <span>{invoice}</span><span>{supplier}</span><span>{amount}</span>
                <span style={{ color: status === "Approved" ? "#55d6be" : status === "Review" ? T.accent : T.blue }}>{status}</span>
              </div>
            ))}
          </div>

          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: 12 }}>
            <div style={{ color: T.white, fontSize: 11, fontWeight: 600, marginBottom: 10 }}>Extracted values</div>
            {[
              ["Supplier", "Kovo Novák s.r.o.", "98%"],
              ["Invoice number", "2026-1042", "96%"],
              ["Total amount", "12 480 CZK", "99%"],
              ["Due date", "14 Aug 2026", "93%"],
            ].map(([label, value, confidence]) => (
              <div key={label} style={{ marginBottom: 9 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: T.muted, fontSize: 8 }}>
                  <span>{label}</span><span style={{ color: T.blue }}>{confidence}</span>
                </div>
                <div style={{ color: T.text, fontSize: 9, marginTop: 2, paddingBottom: 5, borderBottom: `1px solid ${T.border}` }}>{value}</div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
              <span style={{ flex: 1, textAlign: "center", background: T.accent, color: "white", borderRadius: 5, padding: "6px 4px", fontSize: 8 }}>Approve</span>
              <span style={{ flex: 1, textAlign: "center", border: `1px solid ${T.border}`, color: T.muted, borderRadius: 5, padding: "6px 4px", fontSize: 8 }}>Review rule</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function RoofingPreview() {
  return (
    <BrowserFrame label="Střechy Krušnohor business website preview">
      <div style={{ minHeight: 310, background: T.surface }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, padding: "12px 18px", borderBottom: `1px solid ${T.border}`, background: T.bg }}>
          <div style={{ color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700 }}>
            Střechy <span style={{ color: T.accent }}>Krušnohor</span>
          </div>
          <div className="roofing-preview-nav" style={{ display: "flex", gap: 13, color: T.muted, fontSize: 8 }}>
            <span>Produkty</span><span>O nás</span><span>Akce</span><span>Kontakt</span>
          </div>
          <span style={{ color: "white", background: T.accent, borderRadius: 5, padding: "6px 9px", fontSize: 8 }}>Poptávka</span>
        </div>

        <div className="roofing-preview-hero" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 18, alignItems: "center", padding: "24px 22px 18px", background: `linear-gradient(135deg, ${accentAlpha(0.12)}, transparent 58%)` }}>
          <div>
            <div style={{ color: T.accent, fontFamily: "'JetBrains Mono',monospace", fontSize: 8, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 7 }}>
              Střešní krytiny · Chomutov
            </div>
            <div style={{ color: T.white, fontFamily: "'Space Grotesk',sans-serif", fontSize: 23, fontWeight: 700, lineHeight: 1.08, maxWidth: 330 }}>
              Kvalitní materiály pro střechu, která vydrží.
            </div>
            <div style={{ color: T.muted, fontSize: 9, lineHeight: 1.55, marginTop: 9, maxWidth: 310 }}>
              Přehledná nabídka krytin, střešních oken a doplňků s lokálním poradenstvím.
            </div>
            <div style={{ display: "flex", gap: 7, marginTop: 14 }}>
              <span style={{ color: "white", background: T.accent, borderRadius: 5, padding: "7px 10px", fontSize: 8 }}>Cenová nabídka zdarma</span>
              <span style={{ color: T.text, border: `1px solid ${T.border}`, borderRadius: 5, padding: "7px 10px", fontSize: 8 }}>Prohlédnout produkty</span>
            </div>
          </div>

          <div style={{ position: "relative", height: 142, borderRadius: 10, overflow: "hidden", background: `linear-gradient(180deg, ${T.surface2}, ${T.bg})`, border: `1px solid ${T.border}` }}>
            <div style={{ position: "absolute", left: "17%", right: "17%", bottom: 17, height: 68, borderRadius: "3px 3px 7px 7px", background: T.surface, border: `1px solid ${T.border}` }} />
            <div style={{ position: "absolute", left: "11%", right: "11%", bottom: 72, height: 64, background: T.accent, clipPath: "polygon(50% 0, 100% 72%, 92% 100%, 8% 100%, 0 72%)", opacity: .9 }} />
            <div style={{ position: "absolute", left: "38%", bottom: 17, width: 25, height: 42, borderRadius: "3px 3px 0 0", background: T.surface2, border: `1px solid ${T.border}` }} />
            <div style={{ position: "absolute", right: "27%", bottom: 40, width: 25, height: 20, borderRadius: 3, background: T.blue, opacity: .75 }} />
          </div>
        </div>

        <div className="roofing-products" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7, padding: "0 22px 20px" }}>
          {["Plechové krytiny", "Střešní tašky", "Střešní okna", "Doplňky"].map((item, index) => (
            <div key={item} style={{ padding: "10px 9px", borderRadius: 7, background: T.bg, border: `1px solid ${T.border}` }}>
              <div style={{ width: 20, height: 3, borderRadius: 2, background: index === 0 ? T.accent : T.blue, marginBottom: 8 }} />
              <div style={{ color: T.text, fontSize: 8, lineHeight: 1.35 }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectPreview({ type }: { type: PreviewType }) {
  if (type === "signalist") return <SignalistPreview />;
  if (type === "invoice") return <InvoicePreview />;
  return <RoofingPreview />;
}
