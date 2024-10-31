export interface TuitionStep {
  title: string;
  content: React.ReactNode;
}

export const tuitionSteps: TuitionStep[] = [
  {
    title: "Tuition Overview",
    content: (
      <>
        <p>
          The American International School of Medicine offers competitive tuition rates, ensuring a world-class education at affordable prices. All tuition and fees are listed in US dollars and are subject to change at the discretion of the Board of Trustees.
        </p>
        <p>
          Students are required to settle all tuition payments 30 days before the start of each semester to secure enrollment. Below is a breakdown of tuition fees for different programs offered at AISM.
        </p>
      </>
    ),
  },
  {
    title: "Premedical Program",
    content: (
      <>
        <p>
          The premedical program offers a foundational study experience for students pursuing medical degrees. Tuition details for international and CARICOM students are outlined below:
        </p>
        <ul>
          <li><strong>International Students:</strong> $4,500 per trimester</li>
          <li><strong>CARICOM Students:</strong> $3,500 per trimester</li>
          <li><strong>Other Fees:</strong> $2,200 (International), $1,500 (CARICOM) per trimester</li>
          <li><strong>Lab/Tech & Exam Fees:</strong> $750 per trimester</li>
          <li><strong>Total (per trimester):</strong> $7,450 (International), $5,750 (CARICOM)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Basic Sciences Program",
    content: (
      <>
        <p>
          The Basic Sciences program covers the first two years of medical education. Tuition fees per trimester are as follows:
        </p>
        <ul>
          <li><strong>International Students:</strong> $7,500 per trimester</li>
          <li><strong>CARICOM Students:</strong> $5,000 per trimester</li>
          <li><strong>Other Fees:</strong> $2,450 (International), $1,750 (CARICOM) per trimester</li>
          <li><strong>Lab/Tech & Exam Fees:</strong> $750 per trimester</li>
          <li><strong>Total (per trimester):</strong> $10,700 (International), $7,500 (CARICOM)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Clinical Sciences Program",
    content: (
      <>
        <p>
          The Clinical Sciences program takes students through practical, hands-on medical education in hospitals. Tuition per trimester is detailed below:
        </p>
        <ul>
          <li><strong>International Students:</strong> $8,500 per trimester</li>
          <li><strong>CARICOM Students:</strong> $6,000 per trimester</li>
          <li><strong>Other Fees:</strong> $2,750 (International), $1,850 (CARICOM) per trimester</li>
          <li><strong>Lab/Tech & Exam Fees:</strong> $750 per trimester</li>
          <li><strong>Total (per trimester):</strong> $12,000 (International), $8,600 (CARICOM)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Additional Fees",
    content: (
      <>
        <p>In addition to tuition, some programs may require additional fees, including:</p>
        <ul>
          <li><strong>Student’s Liability Insurance (Clinical Sciences):</strong> $1,500 per year</li>
          <li><strong>Transfer and Matriculation Fee:</strong> $1,500 (one-time, non-refundable)</li>
          <li><strong>Basic Science Credit Transfer Fee:</strong> $1,750 per year (up to 2 years transfer)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Payment Policies and Refunds",
    content: (
      <>
        <p>
          AISM offers flexible payment plans for students, but all tuition and fees must be paid one month before the start of each semester. Refund policies are in place for students withdrawing due to proven prolonged illness:
        </p>
        <ul>
          <li>1st week: 90% refund</li>
          <li>2nd week: 50% refund</li>
          <li>3rd week: 10% refund</li>
          <li>After the 4th week: No refund</li>
        </ul>
        <p>
          Late payments incur a 3% penalty on each delinquent installment. Students with unpaid balances may face suspension from classes or withholding of services.
        </p>
      </>
    ),
  },
  {
    title: "How to Pay",
    content: (
      <>
        <p>
          Students can pay their tuition via direct bank transfers to AISM&apos;s account or by contacting the Bursar&apos;s office for other arrangements. Ensure that your student ID is referenced in the payment details to avoid delays in processing.
        </p>
        <p>
          For specific payment inquiries, reach out to <a href="mailto:finance@aism.edu">finance@aism.edu</a>.
        </p>
      </>
    ),
  },
];
