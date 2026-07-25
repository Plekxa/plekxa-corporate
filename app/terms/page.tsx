// app/terms/page.tsx

import { LegalDocument } from "@/components/LegalDocument";

export const metadata = {
  title: "Terms of Use",
};

export default function Page() {
  return (
    <LegalDocument
      title="Terms of Use"
      filename="terms.docx"
    />
  );
}