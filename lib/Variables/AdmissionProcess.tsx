interface AdmissionStep {
  title: string;
  content: React.ReactNode;
}

export const admissionSteps: AdmissionStep[] = [
  {
    title: "Complete Your Application",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Start your journey by filling out the <strong>International Student Application Form</strong>. 
          This is your first step toward becoming an AISM student.
        </p>
        <ul className="grid gap-2 my-3">
          <li className="">Application Form: Make sure all sections are completed.</li>
          <li className="">Application Fee: A non-refundable payment of $150 USD.</li>
          <li className="">Transcripts: Official copies from all high schools and universities you&apos;ve attended.</li>
          <li className="">
            Bank Statement: A recent statement (no older than 6 months) showing funds to cover 
            at least one academic year of tuition and fees.
          </li>
          <li className="">Passport Copy: A clear, readable copy of your international passport.</li>
          <li className="">TOEFL Scores: If applicable, submit your official TOEFL score report.</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          <strong>Transfer Students:</strong> You&apos;ll also need to submit:
        </p>
        <ul className="grid gap-2 my-3">
          <li className="">Transfer transcripts from your current institution.</li>
          <li className="">Letters of recommendation from academic advisors or faculty.</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">Ensure all documents are ready to avoid delays in processing.</p>
      </div>
    ),
  },
  {
    title: "Submit Your Application & Pay the Fees",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Once your application form is complete and you&apos;ve gathered all required documents, 
          submit them to AISM along with the application fee.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          <strong>How to submit:</strong>
        </p>
        <ul className="grid gap-2 my-3">
          <li className=""><strong>Email:</strong> Send a scanned copy of your application and documents to info@aism.edu.</li>
          <li className=""><strong>Mail:</strong> You can also mail your documents to our U.S. information office at 1755 East Park Place Blvd, Stone Mountain, GA 30087, U.S.A.</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          After submission, your application will be reviewed by our admissions team. 
          Ensure all required documents are accurate and complete to avoid any delays.
        </p>
      </div>
    ),
  },
  {
    title: "Financial Verification",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          To secure your spot, you&apos;ll need to provide proof of financial capability. 
          This ensures you can comfortably manage tuition and living expenses during your studies.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]"><strong>What&apos;s required:</strong></p>
        <ul className="grid gap-2 my-3">
          <li className="">
            <strong>Bank Statement:</strong> Submit a bank statement no older than 6 months, showing available funds for at least one full academic year of tuition and living costs.
          </li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          If you&apos;re using family funds or a sponsor, the sponsor must submit a 
          <strong>Statement of Financial Responsibility</strong> confirming their support for your education.
        </p>
      </div>
    ),
  },
  {
    title: "Admission Decision & Next Steps",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Once all your documents have been reviewed, you&apos;ll receive an official admission decision via email.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          <strong>What to expect:</strong>
        </p>
        <ul className="grid gap-2 my-3">
          <li className="">
            <strong>Admission Letter:</strong> If admitted, you&apos;ll receive a formal letter outlining your next steps, including visa application guidance.
          </li>
          <li className="">
            <strong>Visa Process:</strong> If you&apos;re an international student, you&apos;ll need to apply for an F-1 or M-1 visa. 
            Our admissions team will provide guidance to help you through the process.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Housing and Arrival Preparation",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          AISM offers two housing options: <strong>AISM Housing</strong> or <strong>Host Families</strong>. 
          After receiving your admission letter, it&apos;s time to plan where you&apos;ll live during your studies.
        </p>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]"><strong>Housing options:</strong></p>
        <ul className="grid gap-2 my-3">
          <li className=""><strong>AISM Housing:</strong> We offer apartments with options for private or shared rooms.</li>
          <li className=""><strong>Host Families:</strong> Live with a local host family for an immersive cultural experience.</li>
        </ul>
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          You&apos;ll receive further instructions on securing housing once your visa is approved.
        </p>
      </div>
    ),
  },
  {
    title: "Begin Your Journey at AISM",
    content: (
      <div className="grid gap-3">
        <p className="text-balance max-w-[clamp(40rem,70%,25rem)]">
          Once your visa is secured and your housing is confirmed, all that&apos;s left is to finalize your travel plans and 
          prepare to join the AISM community. You will receive guidance on arrival, orientation, and settling into campus life.
        </p>
      </div>
    ),
  }
];
