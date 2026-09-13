import { Sheet } from '@/components/print/Sheet';
import type { Artist, Proposal } from '@/lib/types';

/** Editorial project cover — page 2 of the proposal PDF, after the formal JNU sheet. */
export function ProposalEditorialCover({
  proposal,
  artist,
}: {
  proposal: Proposal;
  artist: Artist;
}) {
  return (
    <Sheet cover className="sheet--editorial-cover">
      <p className="label text-mute">Project proposal</p>

      <div>
        <h1 className="optical-hang text-h1 leading-[0.85]">{proposal.title}</h1>
        <p className="mt-5 text-lead">{proposal.subtitle}</p>

        <dl className="mt-12 space-y-4">
          <TitleMeta label="Submitted by" value={artist.name} />
          <TitleMeta label="Discipline" value="3D Art and Design" />
          <TitleMeta label="Addressed to" value={proposal.addressedTo} />
          <TitleMeta label="Date" value={proposal.date} />
        </dl>
      </div>

      <ul className="proposal-cover-contact">
        <li className="proposal-cover-email whitespace-nowrap">{artist.email}</li>
        {artist.phone ? <li>{artist.phone}</li> : null}
        <li className="proposal-cover-location">{artist.location}</li>
      </ul>
    </Sheet>
  );
}

function TitleMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-6">
      <dt className="label w-28 shrink-0 pt-1 text-mute">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
