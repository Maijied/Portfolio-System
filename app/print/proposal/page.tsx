import Image from 'next/image';

import { ProposalCover } from '@/components/print/ProposalCover';
import { Sheet } from '@/components/print/Sheet';
import { getCvArtist, getProposal } from '@/lib/content';

export default async function PrintProposal() {
  const [proposal, artist] = await Promise.all([getProposal(), getCvArtist()]);

  return (
    <div className="proposal-print">
      <ProposalCover proposal={proposal} />

      <Sheet flow className="proposal-print-body">
        <Section number="01" heading="Abstract">
          {proposal.abstract.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={index === 0 ? 'proposal-abstract-lead' : 'proposal-body-text'}
            >
              {paragraph}
            </p>
          ))}
        </Section>

        {proposal.conceptImage ? (
          <section className="print-section print-concept-section">
            <div className="print-section-label">
              <p className="label text-mute">Concept Visualisation</p>
              <h3 className="mt-0.5 text-h3 leading-tight">Spatial Installation Study</h3>
            </div>
            <div className="space-y-0.5">
              <div className="overflow-hidden rounded border border-line bg-paper-warm p-0.5 shadow-2xs max-w-[65mm] mx-auto">
                <Image
                  src={proposal.conceptImage.src}
                  alt={proposal.conceptImage.alt}
                  width={1528}
                  height={1664}
                  className="w-full h-auto max-h-[14mm] object-contain rounded mx-auto"
                  priority
                />
              </div>
              <p className="caption text-ink-soft text-[5pt] italic text-center max-w-[65mm] mx-auto">
                {proposal.conceptImage.caption}
              </p>
            </div>
          </section>
        ) : null}

        <Section number="02" heading="Context">
          {proposal.context.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="proposal-body-text">
              {paragraph}
            </p>
          ))}
        </Section>

        <Section number="03" heading="Aims">
          <ol className="proposal-aims">
            {proposal.aims.map((aim, index) => (
              <li key={aim}>
                <span className="proposal-aim-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="proposal-aim-text">{aim}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section number="04" heading="Methodology">
          <div className="print-methodology-grid">
            {proposal.methodology.map((block) => (
              <div key={block.heading} className="print-method-block">
                <h4>{block.heading}</h4>
                <div>
                  {block.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Start Page 3: Execution Timeline, Budget, Outcomes & Evaluation */}
        <TableSection
          number="05"
          heading="Timeline"
          breakBefore
          timeline
          columns={
            <>
              <col style={{ width: '13%' }} />
              <col style={{ width: '43%' }} />
              <col style={{ width: '44%' }} />
            </>
          }
          head={
            <tr>
              <Th>Day</Th>
              <Th>Activities</Th>
              <Th>Deliverable</Th>
            </tr>
          }
        >
          {proposal.timeline.map((phase) => (
            <tr key={phase.phase}>
              <Td>
                <span className="proposal-timeline-day">{phase.phase}</span>
              </Td>
              <Td>
                <ul>
                  {phase.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </Td>
              <Td>{phase.deliverable}</Td>
            </tr>
          ))}
        </TableSection>

        <TableSection
          number="06"
          heading="Budget"
          compact
          columns={
            <>
              <col style={{ width: '22%' }} />
              <col style={{ width: '42%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '13%' }} />
              <col style={{ width: '13%' }} />
            </>
          }
          head={
            <tr>
              <Th>Item</Th>
              <Th>Specification</Th>
              <Th className="text-center">Qty</Th>
              <Th className="text-right">Rate</Th>
              <Th className="text-right">Amount</Th>
            </tr>
          }
          footer={
            proposal.budget.note ? (
              <p className="proposal-budget-note">{proposal.budget.note}</p>
            ) : null
          }
        >
          {proposal.budget.lines.map((line) => (
            <tr key={line.item}>
              <Td className="font-medium">{line.item}</Td>
              <Td>{line.detail}</Td>
              <Td className="whitespace-nowrap text-center text-mute">{line.qty ?? '1'}</Td>
              <Td className="whitespace-nowrap text-right">{line.rate ?? line.amount}</Td>
              <Td className="whitespace-nowrap text-right font-medium">{line.amount}</Td>
            </tr>
          ))}
          <tr className="proposal-budget-total">
            <Td>Total</Td>
            <Td colSpan={3} />
            <Td className="whitespace-nowrap text-right">{proposal.budget.total}</Td>
          </tr>
        </TableSection>

        <Section number="07" heading="Outcomes" compact>
          <ul className="proposal-list">
            {proposal.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </Section>

        <Section number="08" heading="Evaluation &amp; references" compact closing>
          <ul className="proposal-list">
            {proposal.evaluation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {proposal.bibliography?.length ? (
            <ul className="proposal-references proposal-references--inline">
              {proposal.bibliography.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          ) : null}
        </Section>
      </Sheet>
    </div>
  );
}

function Section({
  number,
  heading,
  children,
  compact = false,
  closing = false,
  breakBefore = false,
}: {
  number: string;
  heading: string;
  children: React.ReactNode;
  compact?: boolean;
  closing?: boolean;
  breakBefore?: boolean;
}) {
  const classes = [
    'print-section',
    compact ? 'print-section--compact' : '',
    closing ? 'print-section--closing' : '',
    breakBefore ? 'print-section--break-before' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes}>
      <div className="print-section-label">
        <p className="label text-mute">{number}</p>
        <h3 className="mt-1 text-h3 leading-tight">{heading}</h3>
      </div>
      <div className="print-section-body space-y-1.5">{children}</div>
    </section>
  );
}

function TableSection({
  number,
  heading,
  columns,
  head,
  children,
  footer,
  compact = false,
  timeline = false,
  breakBefore = false,
}: {
  number: string;
  heading: string;
  columns: React.ReactNode;
  head: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  compact?: boolean;
  timeline?: boolean;
  breakBefore?: boolean;
}) {
  return (
    <section
      className={`print-section print-section--table${compact ? ' print-section--compact' : ''}${timeline ? ' print-section--timeline' : ''}${breakBefore ? ' print-section--break-before' : ''}`}
    >
      <div className="print-table-kicker">
        <div className="print-section-label">
          <p className="label text-mute">{number}</p>
          <h3 className="mt-1 text-h3 leading-tight">{heading}</h3>
        </div>
      </div>
      <div className="print-section-body">
        <table className="print-data-table">
          <colgroup>{columns}</colgroup>
          <thead>{head}</thead>
          <tbody>{children}</tbody>
        </table>
        {footer}
      </div>
    </section>
  );
}

function Th({
  children,
  className = '',
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <th className={className}>{children}</th>;
}

function Td({
  children,
  className = '',
  colSpan,
}: {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
}) {
  return (
    <td className={className} colSpan={colSpan}>
      {children}
    </td>
  );
}
