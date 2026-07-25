// app/privacy/page.tsx

import { LegalDocument } from "@/components/LegalDocument";

export const metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <LegalDocument
      title="Privacy Policy"
      filename="privacy.docx"
    />
  );
}