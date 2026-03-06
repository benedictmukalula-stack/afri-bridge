export default function HomePage() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>AfriBridge Clearing & Logistics</h1>
      <p>
        Premium customs clearing, freight forwarding, and cross-border logistics
        solutions across Africa and the SADC region.
      </p>

      <h2 style={{marginTop:40}}>Our Services</h2>
      <ul>
        <li>Customs Clearing</li>
        <li>Freight Forwarding (Air, Sea, Road)</li>
        <li>Cross-Border Logistics</li>
        <li>Warehousing & Distribution</li>
      </ul>

      <h2 style={{marginTop:40}}>Quick Links</h2>
      <ul>
        <li><a href="/services">View Services</a></li>
        <li><a href="/quote">Request a Freight Quote</a></li>
        <li><a href="/tracking">Track Your Shipment</a></li>
        <li><a href="/industries">Industries We Serve</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </main>
  );
}
