export interface AdmissionStep {
  title: string;
  content: React.ReactNode;
}

export const VisaProcess: AdmissionStep[] = [
  {
    title: "Submit Required Documents",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          To begin the admission process, you&apos;ll need to submit notarized copies of your key documents, including:
        </p>
        <ul className="grid gap-2 my-3">
          <li className="">Passport</li>
          <li className="">Educational Certificates</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          It&apos;s crucial to send these documents as early as possible to avoid delays in your entry process. Our team will verify everything to ensure it&apos;s in order. If you run into any challenges, don&apos;t worry—we&apos;re here to support you at every step.
        </p>
      </div>
    ),
  },
  {
    title: "Visa Application Review",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          We will assist in reviewing your Visa application to ensure it&apos;s filled out correctly and submitted on time. To prevent any delays, please send us your application as soon as it&apos;s ready.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          This gives us ample time to help you make any necessary adjustments. We&apos;ll keep you informed throughout the process, and should any changes to Visa requirements occur, we&apos;ll notify you immediately and provide the needed guidance.
        </p>
      </div>
    ),
  },
  {
    title: "Processing Time",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          The Visa and documentation process can take around 4 to 5 weeks, so don&apos;t be concerned if responses are not immediate. Submitting your documents early allows us to ensure everything is completed well before your arrival in Guyana.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Rest assured, our team has extensive experience in supporting students through this process, and we will provide full assistance until everything is in place.
        </p>
      </div>
    ),
  },
  {
    title: "Receive Confirmation Letter",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Once your Visa is processed, you will receive an official <strong>Letter of Confirmation</strong> from AISM. Keep this letter with you for your travels to Guyana.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Upon arrival, a member of our team will be waiting at the airport to welcome you and ensure your Visa is issued without hassle. Having your confirmation letter on hand will ensure a smooth entry into the country, and our team will assist you from the airport to the university.
        </p>
      </div>
    ),
  },
  {
    title: "Prepare with Embassy Documents",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Before you arrive, ensure that you have all the necessary documents from your country&apos;s Guyanese Embassy, including your <strong>Acceptance Letter</strong> from AISM.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Below is a checklist of items to bring:
        </p>
        <ul className="grid gap-2 my-3">
          <li className="">Acceptance Letter</li>
          <li className="">Visa Confirmation</li>
          <li className="">Any other Embassy-issued documents</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          If you&apos;re unsure about any documents, feel free to contact our team. We understand this process can feel overwhelming, but you&apos;re a part of the AISM family, and we&apos;re here to guide you every step of the way.
        </p>
      </div>
    ),
  },
];
