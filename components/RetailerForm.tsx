'use client';
import { useState } from 'react';
export default function RetailerForm() {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="form-card" role="status">
      <h2>Request received</h2>
      <p>In the live site, the owner gets this request by email and replies with the line sheet. This demo does not store any data.</p>
      <button className="btn btn-line" onClick={() => setSent(false)}>Send another request</button>
    </div>
  );
  return (
    <form className="form-card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <h2>Request wholesale details</h2>
      <label>Store name<input required name="store" autoComplete="organization" /></label>
      <label>Your name<input required name="name" autoComplete="name" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      <label>Store type
        <select name="type" defaultValue="">
          <option value="" disabled>Choose one</option>
          <option>Wine and liquor store</option>
          <option>Gift boutique</option>
          <option>Other retailer</option>
        </select>
      </label>
      <label>City<input name="city" placeholder="Albany, Saratoga Springs…" /></label>
      <button className="btn btn-solid" type="submit">Request line sheet</button>
      <p className="sample-note">Demo form. Nothing you type here is saved.</p>
    </form>
  );
}
