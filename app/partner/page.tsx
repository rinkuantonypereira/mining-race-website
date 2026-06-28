"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#06060A", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>Partner With Us</p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Are You a Mining Facility or Infrastructure Provider?
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
                If you operate a mining facility, manage hosting capacity, or provide infrastructure services for the Bitcoin mining industry, we would like to hear from you. Mining RACE is always looking to expand its network of trusted operational partners.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Form */}
        <section style={{ padding: "3rem 0 6rem" }}>
          <div style={{ maxWidth: "750px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>Get in Touch with Our Partnerships Team</h2>
              <p style={{ fontSize: "0.88rem", color: "#94A3B8", marginBottom: "2rem" }}>
                Please share your details and our partnerships team will be in touch.
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Company / Organization Name *</label>
                    <input type="text" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Contact Name *</label>
                    <input type="text" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Job Title / Role *</label>
                    <input type="text" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Email Address *</label>
                    <input type="email" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Phone Number</label>
                    <input type="tel" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Country / Region *</label>
                    <input type="text" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Facility Location(s) *</label>
                  <input type="text" required style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Total Capacity Available</label>
                    <input type="text" placeholder="TH/s or MW" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Current Power Source</label>
                    <select style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#94A3B8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }}>
                      <option value="">Select</option>
                      <option value="renewable">Renewable</option>
                      <option value="mixed">Mixed</option>
                      <option value="non-renewable">Non-renewable</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Number of Active Units / Rigs</label>
                  <input type="text" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.375rem" }}>Message / Additional Details</label>
                  <textarea rows={4} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid rgba(255,255,255,0.1)", background: "#0A0A10", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
                </div>
                <button type="submit" style={{ padding: "0.875rem 2.5rem", borderRadius: "0.625rem", background: "#00C896", color: "#06060A", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(0,200,150,0.25)", alignSelf: "flex-start", marginTop: "0.5rem" }}>
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
