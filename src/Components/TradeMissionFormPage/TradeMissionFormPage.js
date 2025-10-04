import React, { useRef, useState } from "react";
import "./TradeMissionFormPageStyles.css"; // reuse the same styles
import LeftLogo from "../../Assets/Home/bacc_logo.png";
import RightLogo from "../../Assets/Home/abicc_anim.png";

function TradeMissionEnrollmentFormPage() {
  const printRef = useRef(null);

  // Header text
  const [orgName, setOrgName] = useState(
    "BANGLADESH AMERICAN CHAMBER OF COMMERCE"
  );

  // Form fields (only the ones you listed)
  const [form, setForm] = useState({
    companyName: "",
    street: "",
    city: "",
    state: "",
    website: "",
    attendeeName: "",
    phone: "",
    email: "",
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handlePrint = () => window.print();

  const handleReset = () => {
    setForm({
      companyName: "",
      street: "",
      city: "",
      state: "",
      website: "",
      attendeeName: "",
      phone: "",
      email: "",
      description: "",
    });
    setOrgName("BANGLADESH AMERICAN CHAMBER OF COMMERCE, FLORIDA");
  };

  return (
    <div className="tmf-container">
      {/* Top actions (won’t print) */}
      <div className="tmf-actions">
        <div className="tmf-actions-right">
          <button className="btn" onClick={handleReset}>
            Clear
          </button>
          <button className="btn" onClick={handlePrint}>
            Download PDF
          </button>
        </div>
      </div>

      {/* Printable area */}
      <div className="tmf-paper tmf-print-area" ref={printRef}>
        {/* Header with logos + editable org name */}
        <header className="tmf-header">
          <div className="tmf-logo">
            <img src={LeftLogo} alt="Left logo" />
          </div>

          <div className="tmf-org">
            <textarea
              className="tmf-org-input tmf-org-input--area"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              aria-label="Organization name"
            />
          </div>

          <div className="tmf-logo">
            <img src={RightLogo} alt="Right logo" />
          </div>
        </header>

        <h2 className="tmf-title">TRADE MISSION ENROLLMENT</h2>

        {/* Main form grid */}
        <div className="tmf-grid">
          {/* Company Name * */}
          <label className="tmf-row">
            <span>
              Company Name <span style={{ color: "#ef4444" }}>*</span>
            </span>
            <input
              name="companyName"
              value={form.companyName}
              onChange={onChange}
              required
            />
          </label>

          {/* Street Address * */}
          <label className="tmf-row">
            <span>
              Street Address <span style={{ color: "#ef4444" }}>*</span>
            </span>
            <input
              name="street"
              value={form.street}
              onChange={onChange}
              required
            />
          </label>

          {/* City * + State (abbr) * */}
          <div className="tmf-2col">
            <label>
              <span>
                City <span style={{ color: "#ef4444" }}>*</span>
              </span>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                required
              />
            </label>
            <label>
              <span>
                State (Abbreviation) <span style={{ color: "#ef4444" }}>*</span>
              </span>
              <input
                name="state"
                value={form.state}
                onChange={onChange}
                placeholder="e.g., FL"
                required
              />
            </label>
          </div>

          {/* Website (optional) */}
          <label className="tmf-row">
            <span>Web Site</span>
            <input
              name="website"
              type="url"
              placeholder="https://example.com"
              value={form.website}
              onChange={onChange}
            />
          </label>

          {/* Attendee Name * */}
          <label className="tmf-row">
            <span>
              Attendee Name <span style={{ color: "#ef4444" }}>*</span>
            </span>
            <input
              name="attendeeName"
              value={form.attendeeName}
              onChange={onChange}
              required
            />
          </label>

          {/* Contact Telephone * + Email * */}
          <div className="tmf-2col">
            <label>
              <span>
                Contact Telephone <span style={{ color: "#ef4444" }}>*</span>
              </span>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="(000) 000-0000"
                required
              />
            </label>
            <label>
              <span>
                Contact E-mail <span style={{ color: "#ef4444" }}>*</span>
              </span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@company.com"
                required
              />
            </label>
          </div>

          {/* Brief Company Description */}
          <label className="tmf-row">
            <span>Brief Company Description</span>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              style={{
                width: "100%",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                minHeight: 120,
              }}
              placeholder="What you do, sectors, objectives for this mission, etc."
            />
          </label>
        </div>
        <div className="tmf-consent">
          <label className="mf-checkbox">
            <input
              type="checkbox"
              name="authorizeDirectory"
              checked={form.authorizeDirectory}
              onChange={onChange}
            />
            <span>
              I authorize you to publish the above information in the Bangladesh
              American Chamber of Commerce Inc., membership directory.
            </span>
          </label>
        </div>
        {/* Signature + Date */}
        <div className="tmf-signature-row">
          <label className="mf-date">
            <span>Date</span>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={onChange}
            />
          </label>
          <label className="tmf-signature">
            <span>Signature of Member</span>
            <input
              name="signature"
              value={form.signature}
              onChange={onChange}
              placeholder="Type your full name"
            />
          </label>
        </div>

        {/* Bottom contact lines (reuse / adjust if you like) */}
        <div className="tmf-contact-lines tmf-bottom-note">
          <div>
            2761 N.E. 27th Circle, Boca Raton, Florida 33431 • Tel: 954-818-2970
            • Fax: 954-972-1108 • Email: rahman355@yahoo.com
          </div>
          <div>
            ABICC: 260 Crandon Blvd, Suite 32 PMB 136, Key Biscayne, FL 33149 •
            Tel: 305-365-7247 • Web: www.abicc.org
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeMissionEnrollmentFormPage;
