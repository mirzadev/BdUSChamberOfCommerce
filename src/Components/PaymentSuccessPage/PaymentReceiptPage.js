import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PaymentReceiptPageStyles.css";
import BACCLogo from "../../Assets/Home/bacc_logo.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PaymentReceiptPage() {
  const q = useQuery();
  const sessionId = q.get("session_id");
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:3001";

  useEffect(() => {
    if (!sessionId) {
      setErr("Missing session_id.");
      return;
    }

    (async () => {
      try {
        const url = `${API_BASE}/api/checkout/session?session_id=${encodeURIComponent(
          sessionId
        )}`;
        const resp = await fetch(url, {
          headers: { Accept: "application/json" },
        });

        // Read as text first, then decide how to parse
        const ct = resp.headers.get("content-type") || "";
        const text = await resp.text();

        if (!resp.ok) {
          throw new Error(`API ${resp.status}: ${text.slice(0, 200)}`);
        }
        if (!ct.includes("application/json")) {
          throw new Error(`Expected JSON, got ${ct}: ${text.slice(0, 200)}`);
        }

        const json = JSON.parse(text);
        setData(json);
      } catch (e) {
        setErr(e.message || "Failed to load session");
      }
    })();
  }, [sessionId]);

  if (err) {
    return (
      <div className="rcpt-wrap">
        <div className="rcpt-card">
          <h1>Payment Status</h1>
          <p className="rcpt-error">{err}</p>
          <p>
            <Link to="/membership/payment" className="rcpt-btn">
              Back to Payment
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rcpt-wrap">
        <div className="rcpt-card">
          <p>Loading receipt…</p>
        </div>
      </div>
    );
  }

  const amount = (data.amount_total / 100).toFixed(2);
  const currency = (data.currency || "usd").toUpperCase();
  const created = new Date(data.created * 1000).toLocaleString();

  return (
    <div className="rcpt-wrap">
      <div className="rcpt-card">
        <div className="rcpt-brand">
          <img
            src={BACCLogo}
            className="rcpt-logo"
            alt="Bangladesh American Chamber of Commerce"
          />
          <div className="rcpt-brand-name">
            Bangladesh American Chamber of Commerce
          </div>
        </div>
        <div className="rcpt-head success">
          <div className="rcpt-check" aria-hidden>
            ✓
          </div>
          <div>
            <h1>Payment Received</h1>
            <p className="muted">Thank you for your support of BACC.</p>
          </div>
        </div>

        <div className="rcpt-grid">
          <div>
            <div className="rcpt-label">Amount</div>
            <div className="rcpt-value">
              {currency} ${amount}
            </div>
          </div>
          <div>
            <div className="rcpt-label">Status</div>
            <div className="rcpt-value">{data.payment_status}</div>
          </div>
          <div>
            <div className="rcpt-label">Date</div>
            <div className="rcpt-value">{created}</div>
          </div>
          <div>
            <div className="rcpt-label">Email</div>
            <div className="rcpt-value">{data.customer_email || "—"}</div>
          </div>
          <div>
            <div className="rcpt-label">Reference</div>
            <div className="rcpt-value">{data.reference || data.id}</div>
          </div>
          <div>
            <div className="rcpt-label">Method</div>
            <div className="rcpt-value">
              {data.payment_method_type || "Card"}
            </div>
          </div>
        </div>

        {data.metadata?.memo ? (
          <div className="rcpt-memo">
            <div className="rcpt-label">Memo</div>
            <div className="rcpt-value">{data.metadata.memo}</div>
          </div>
        ) : null}

        {Array.isArray(data.line_items) && data.line_items.length > 0 && (
          <div className="rcpt-lines">
            <div className="rcpt-label">Items</div>
            <ul>
              {data.line_items.map((li, i) => (
                <li key={i}>
                  <span>{li.description}</span>
                  <span>${(li.amount_total / 100).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rcpt-actions">
          <button className="rcpt-btn" onClick={() => window.print()}>
            Print / Save PDF
          </button>
          {data.receipt_url && (
            <a
              className="rcpt-btn outline"
              href={data.receipt_url}
              target="_blank"
              rel="noreferrer"
            >
              Stripe Receipt
            </a>
          )}
          <Link className="rcpt-btn outline" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PaymentReceiptPage;
