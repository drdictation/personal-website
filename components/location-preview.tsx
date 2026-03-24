
import { siteConfig } from "@/lib/site-content";

export function LocationPreview() {
  const { contact } = siteConfig;

  return (
    <section className="location-preview shell">
      <div className="location-card">
        <p className="eyebrow">Consulting location</p>
        <h2>{contact.practice}</h2>
        <p>
          <a href={contact.mapsLink} target="_blank" rel="noopener noreferrer" className="address-link">
            {contact.addressLine1}
            <br />
            {contact.addressLine2}
          </a>
        </p>
        <dl className="contact-list">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Fax</dt>
            <dd>{contact.fax}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="location-image-wrap" style={{ position: "relative", minHeight: "400px", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            contact.addressLine1 + " " + contact.addressLine2
          )}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>
    </section>
  );
}
