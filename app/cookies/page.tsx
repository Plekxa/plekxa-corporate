// app/cookies/page.tsx

import { LegalDocument } from "@/components/LegalDocument";

export const metadata = {
  title: "Cookie Policy",
};

export default function Page() {
  return (
    <LegalDocument
      title="Cookie Policy"
      filename="cookies.docx"
    />
  );
}
