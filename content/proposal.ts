import { frozenLiquidityProposal } from '@/content/proposals/frozen-liquidity';
import { weaveOfMemoryProposal } from '@/content/proposals/weave-of-memory';
import type { Proposal } from '@/lib/types';

export { frozenLiquidityProposal, weaveOfMemoryProposal };

/** Current active proposal for degrees and print builds. */
export const proposal: Proposal = weaveOfMemoryProposal;
