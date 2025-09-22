import React, { useRef, useState } from "react";
import "./MembershipFormPageStyles.css";

/* Import your permanent logos */
import LeftLogo from "../../Assets/Home/bacc_logo.png"; // ← adjust path
import RightLogo from "../../Assets/Home/abicc_anim.png"; // ← adjust path

function MembershipFormPage() {
  const printRef = useRef(null);

  // Header
  const [orgName, setOrgName] = useState(
    "BANGLADESH AMERICA CHAMBER OF COMMERCE"
  );

  // Form fields
  const [form, setForm] = useState({
    name: "",
    title: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    fax: "",
    email: "",
    businessType: "",
    mainActivity: "",
    employees: "",
    heardFrom: "",
    authorizeDirectory: false,
    date: new Date().toISOString().slice(0, 10),
    signature: "",
    membershipTier: "single",
  });

  const tiers = [
    { id: "single", label: "SINGLE PERSON MEMBERSHIP", amount: 100.0 },
    { id: "couple", label: "COUPLE MEMBERSHIP", amount: 150.0 },
    {
      id: "small",
      label: "SMALL BUSINESS MEMBERSHIP (1–3 persons)",
      amount: 175.0,
    },
    {
      id: "corp",
      label: "CORPORATE MEMBERSHIP (1–5 employees)",
      amount: 250.0,
    },
    {
      id: "trustee",
      label: "TRUSTEE MEMBERSHIP (5 or more employees)",
      amount: 500.0,
    },
  ];

  // Helpers
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handlePrint = () => window.print();

  const handleReset = () => {
    setForm({
      name: "",
      title: "",
      company: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      fax: "",
      email: "",
      businessType: "",
      mainActivity: "",
      employees: "",
      heardFrom: "",
      authorizeDirectory: false,
      date: new Date().toISOString().slice(0, 10),
      signature: "",
      membershipTier: "single",
    });
    setOrgName("BANGLADESH AMERICA CHAMBER OF COMMERCE");
  };

  return (
    <div className="mf-container">
      {/* Actions (won't print) */}
      <div className="mf-actions">
        <div className="mf-actions-right">
          <button className="btn" onClick={handleReset}>
            Clear
          </button>
          <button className="btn" onClick={handlePrint}>
            Download PDF
          </button>
        </div>
      </div>

      {/* Printable area */}
      <div className="mf-paper mf-print-area" ref={printRef}>
        {/* Header with permanent logos */}
        <header className="mf-header">
          <div className="mf-logo">
            <img src={LeftLogo} alt="Left logo" />
          </div>

          <div className="mf-org">
            <input
              className="mf-org-input"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              aria-label="Organization name"
            />
          </div>

          <div className="mf-logo">
            <img src={RightLogo} alt="Right logo" />
          </div>
        </header>

        <h2 className="mf-title">MEMBERSHIP APPLICATION</h2>

        {/* Main fields */}
        <div className="mf-grid">
          <label className="mf-row">
            <span>Name</span>
            <input name="name" value={form.name} onChange={onChange} />
          </label>

          <div className="mf-2col">
            <label>
              <span>Title</span>
              <input name="title" value={form.title} onChange={onChange} />
            </label>
            <label>
              <span>Company</span>
              <input name="company" value={form.company} onChange={onChange} />
            </label>
          </div>

          <label className="mf-row">
            <span>Address</span>
            <input
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Address"
              autoComplete="address-level2"
            />
          </label>

          <div className="mf-3col">
            <label>
              <span>City</span>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                placeholder="City"
                autoComplete="city-level2"
              />
            </label>
            <label>
              <span>State</span>
              <input
                name="state"
                value={form.state}
                onChange={onChange}
                placeholder="Example: FL"
                autoComplete="state-level2"
              />
            </label>
            <label>
              <span>Zip</span>
              <input
                name="zip"
                value={form.zip}
                onChange={onChange}
                placeholder="00000"
                autoComplete="zip-level2"
              />
            </label>
          </div>

          <div className="mf-3col">
            <label>
              <span>Phone</span>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="(000) 000-0000"
                autoComplete="phone-level2"
              />
            </label>
            <label>
              <span>Fax</span>
              <input
                name="fax"
                value={form.fax}
                onChange={onChange}
                placeholder="(000) 000-0000"
                autoComplete="fax-level2"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="abcd@domain.com"
                autoComplete="email-level2"
              />
            </label>
          </div>

          <label className="mf-row">
            <span>Type of Business</span>
            <input
              name="businessType"
              value={form.businessType}
              onChange={onChange}
            />
          </label>

          <label className="mf-row">
            <span>Main Business Activity</span>
            <input
              name="mainActivity"
              value={form.mainActivity}
              onChange={onChange}
            />
          </label>

          <label className="mf-row">
            <span>Number of Employees</span>
            <input
              name="employees"
              value={form.employees}
              onChange={onChange}
            />
          </label>

          <label className="mf-row">
            <span>I heard about the Chamber from</span>
            <input
              name="heardFrom"
              value={form.heardFrom}
              onChange={onChange}
            />
          </label>
        </div>

        {/* Directory authorization */}
        <div className="mf-consent">
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
        <div className="mf-signature-row">
          <label className="mf-date">
            <span>Date</span>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={onChange}
            />
          </label>
          <label className="mf-signature">
            <span>Signature of Member</span>
            <input
              name="signature"
              value={form.signature}
              onChange={onChange}
              placeholder="Type your full name"
            />
          </label>
        </div>

        {/* Dues */}
        <div className="mf-dues">
          <h3>ANNUAL MEMBERSHIP DUES</h3>
          <div className="mf-dues-grid">
            {tiers.map((t) => (
              <label key={t.id} className="mf-dues-item">
                <input
                  type="radio"
                  name="membershipTier"
                  value={t.id}
                  checked={form.membershipTier === t.id}
                  onChange={onChange}
                />
                <span className="mf-dues-label">{t.label}</span>
                <span className="mf-dues-amount">
                  Membership Amount Due ${t.amount.toFixed(2)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ===== Bottom Note (moved from header) ===== */}
        <div className="mf-contact-lines mf-bottom-note">
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

export default MembershipFormPage;
