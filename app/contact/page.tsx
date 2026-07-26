export const metadata = {
  title: "Contact",
};

const contacts = [
  {
    label: "General Enquiries",
    email: "hello@plekxa.com",
  },
  {
    label: "Creator Support",
    email: "support@plekxa.com",
  },
  {
    label: "Business Partnerships",
    email: "partners@plekxa.com",
  },
  {
    label: "Press & Media",
    email: "press@plekxa.com",
  },
  {
    label: "Legal",
    email: "legal@plekxa.com",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Contact</span>

          <h1>Let's start the conversation.</h1>

          <p>
            Whether you're a creator, partner, journalist or simply want to
            learn more about Plekxa, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Get in touch</span>

            <h2>Choose the team that best matches your enquiry.</h2>
          </div>

          <div>
            <p>
              We aim to respond as quickly as possible and make sure every
              enquiry reaches the right people.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {contacts.map((contact) => (
            <a key={contact.email} href={`mailto:${contact.email}`}>
              <span>{contact.label}</span>

              <strong>{contact.email}</strong>

              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose-large">
          <span className="eyebrow">Building together</span>

          <h2>Every partnership starts with a conversation.</h2>

          <p>
            Plekxa is building products for the future of entertainment. If you
            believe there's an opportunity to collaborate, we'd be happy to
            connect.
          </p>
        </div>
      </section>
    </>
  );
}
