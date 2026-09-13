import { CvProfessional } from '@/components/print/CvProfessional';
import { Sheet } from '@/components/print/Sheet';
import { getCvArtist, getCvProjectEntries } from '@/lib/content';

export default async function PrintCv() {
  const [artist, projectEntries] = await Promise.all([
    getCvArtist(),
    getCvProjectEntries(),
  ]);

  return (
    <div className="cv-print">
      <Sheet className="cv--professional">
        <CvProfessional artist={artist} projectEntries={projectEntries} />
      </Sheet>
    </div>
  );
}
