import type { ReactNode } from 'react';

type SheetProps = {
  children: ReactNode;
  orientation?: 'portrait' | 'landscape';
  /** Let content paginate across pages instead of forcing one sheet. */
  flow?: boolean;
  cover?: boolean;
  className?: string;
};

export function Sheet({
  children,
  orientation = 'portrait',
  flow = false,
  cover = false,
  className = '',
}: SheetProps) {
  const classes = [
    'sheet',
    `sheet--${orientation}`,
    flow ? 'sheet--flow' : '',
    cover ? 'sheet--cover' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <section className={classes}>{children}</section>;
}

export function PrintHeader({
  left,
  right,
}: {
  left: string;
  right: string;
}) {
  return (
    <header className="print-header">
      <span className="label">{left}</span>
      <span className="label text-mute">{right}</span>
    </header>
  );
}

export function PrintFooter({
  left,
  right,
}: {
  left: string;
  right?: string;
}) {
  return (
    <footer className="print-footer">
      <span className="caption">{left}</span>
      {right ? <span className="caption">{right}</span> : null}
    </footer>
  );
}
