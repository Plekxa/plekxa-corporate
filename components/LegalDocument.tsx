// components/LegalDocument.tsx

import fs from "node:fs/promises";
import path from "node:path";
import * as mammoth from "mammoth";

type LegalDocumentProps = {
  title: string;
  filename: string;
};

export async function LegalDocument({
  title,
  filename,
}: LegalDocumentProps) {
  const documentPath = path.join(
    process.cwd(),
    "public",
    "legal",
    filename,
  );

  const buffer = await fs.readFile(documentPath);

  const { value: html } = await mammoth.convertToHtml({
    buffer,
  });

  return (
    <article className="legal-page container prose">
      <span className="eyebrow">Legal</span>

      <h1>{title}</h1>

      <div
        className="legal-document"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
