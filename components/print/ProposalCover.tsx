import Image from 'next/image';

import { Sheet } from '@/components/print/Sheet';
import type { Proposal } from '@/lib/types';

export function ProposalCover({ proposal }: { proposal: Proposal }) {
  return (
    <Sheet className="sheet--formal-cover">
      <div className="formal-cover-inner">
        <header className="formal-cover-header">
          <Image
            src="/media/brand/jnu-logo.png"
            alt="Jagannath University logo"
            width={80}
            height={80}
            className="formal-cover-logo"
            priority
          />
          <p className="formal-cover-university">Jagannath University</p>
          <p className="formal-cover-department">
            Department of 3D Art and Design
          </p>
        </header>

        <div className="formal-cover-centerpiece">
          <p className="formal-cover-kicker">Academic Project Proposal</p>
          <h1 className="formal-cover-title">{proposal.title}</h1>
          <p className="formal-cover-subtitle">{proposal.subtitle}</p>

          <div className="formal-cover-meta-badge">
            <span className="formal-cover-code-label">Course Code</span>
            <span className="formal-cover-code-val">{proposal.code}</span>
          </div>
        </div>

        <div className="formal-cover-submission-section">
          <div className="formal-cover-party-box">
            <p className="formal-cover-party-tag">Submitted to:</p>
            <p className="formal-cover-party-name">{proposal.submittedTo.name}</p>
            <p className="formal-cover-party-sub">{proposal.submittedTo.title}</p>
            <p className="formal-cover-party-sub">{proposal.submittedTo.department}</p>
            <p className="formal-cover-party-sub">{proposal.submittedTo.institution}</p>
          </div>

          <div className="formal-cover-party-box" style={{ marginTop: '5mm' }}>
            <p className="formal-cover-party-tag">Submitted by:</p>
            <p className="formal-cover-party-name">{proposal.submittedBy.name}</p>
            <p className="formal-cover-party-sub">
              Student ID: <span style={{ fontWeight: 600 }}>{proposal.submittedBy.studentId}</span>
            </p>
            <p className="formal-cover-party-sub">{proposal.submittedBy.department}</p>
            <p className="formal-cover-party-sub">{proposal.submittedBy.institution}</p>
          </div>
        </div>

        <footer className="formal-cover-footer">
          <p className="formal-cover-date">
            Date of Submission: {proposal.date}
          </p>
        </footer>
      </div>
    </Sheet>
  );
}
