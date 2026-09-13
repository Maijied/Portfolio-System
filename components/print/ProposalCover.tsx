import Image from 'next/image';

import { Sheet } from '@/components/print/Sheet';
import type { Proposal } from '@/lib/types';

export function ProposalCover({ proposal }: { proposal: Proposal }) {
  return (
    <Sheet className="sheet--formal-cover">
      <div className="formal-cover-inner">
        <Image
          src="/media/brand/jnu-logo.png"
          alt="Jagannath University logo"
          width={72}
          height={72}
          className="formal-cover-logo"
          priority
        />

        <p className="formal-cover-university">Jagannath University</p>
        <p className="formal-cover-department">
          Department of 3D Art and Design
        </p>

        <h1 className="formal-cover-title">Project Proposal</h1>

        <dl className="formal-cover-meta">
          <div>
            <dt>Subject</dt>
            <dd>{proposal.title}</dd>
          </div>
          <div>
            <dt>Course Code</dt>
            <dd>{proposal.code}</dd>
          </div>
        </dl>

        <div className="formal-cover-block">
          <p className="formal-cover-block-label">Submitted to</p>
          <PartyBlock party={proposal.submittedTo} />
        </div>

        <div className="formal-cover-block">
          <p className="formal-cover-block-label">Submitted by</p>
          <PartyBlock party={proposal.submittedBy} showId />
        </div>

        <p className="formal-cover-date">
          Date of Submission: {proposal.date}
        </p>
      </div>
    </Sheet>
  );
}

function PartyBlock({
  party,
  showId = false,
}: {
  party: Proposal['submittedTo'];
  showId?: boolean;
}) {
  return (
    <div className="formal-cover-party">
      <p>{party.name}</p>
      {party.title ? <p>{party.title}</p> : null}
      {showId && party.studentId ? <p>ID: {party.studentId}</p> : null}
      <p>{party.department}</p>
      <p>{party.institution}</p>
    </div>
  );
}
