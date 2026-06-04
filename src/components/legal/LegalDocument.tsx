import type { LegalSection } from "@/content/legal-types"

type LegalDocumentProps = {
  title: string
  intro: string
  sections: LegalSection[]
  lastUpdated: string
  contactEmail: string
}

export function LegalDocument({
  title,
  intro,
  sections,
  lastUpdated,
  contactEmail,
}: LegalDocumentProps) {
  return (
    <article className="legal-doc">
      <header className="legal-doc-header">
        <p className="legal-doc-kicker site-mono">LEGAL</p>
        <h1 className="legal-doc-title">{title}</h1>
        <p className="legal-doc-meta site-mono">
          Last updated: {lastUpdated}
        </p>
        <p className="legal-doc-intro">{intro}</p>
      </header>

      <div className="legal-doc-body">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="legal-section">
            <h2 className="legal-section-title">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.id}-p-${index}`} className="legal-section-p">
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="legal-section-list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <footer className="legal-doc-footer">
        <p className="legal-disclaimer site-mono">
          Not legal advice. Consult a qualified attorney in your jurisdiction
          for compliance (copyright, consumer law, app store rules).
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${contactEmail}`} className="legal-contact-link">
            {contactEmail}
          </a>
        </p>
      </footer>
    </article>
  )
}
