import { useState } from 'react';
import { proposalsSeed } from '../data/prydoData';

export default function DaoGovernancePage({ appState }) {
  const [proposals, setProposals] = useState(proposalsSeed);
  const [draft, setDraft] = useState('');

  const castVote = (id, type) => {
    setProposals((prev) =>
      prev.map((proposal) =>
        proposal.id === id
          ? {
              ...proposal,
              forVotes: proposal.forVotes + (type === 'for' ? 1 : 0),
              againstVotes: proposal.againstVotes + (type === 'against' ? 1 : 0)
            }
          : proposal
      )
    );
  };

  const createProposal = () => {
    if (!draft.trim()) return;
    setProposals((prev) => [...prev, { id: Date.now(), title: draft, forVotes: 0, againstVotes: 0 }]);
    setDraft('');
  };

  return (
    <div className="page">
      <section className="glass-card">
        <h1>DAO Governance</h1>
        <p>Genesis Prydo ID holders can create proposals and vote.</p>
        <div className="row">
          <input
            className="text-input"
            type="text"
            value={draft}
            placeholder="Create proposal..."
            onChange={(event) => setDraft(event.target.value)}
          />
          <button className="btn neon" disabled={!appState.hasPrydoId} onClick={createProposal}>Create Proposal</button>
        </div>
      </section>

      <section className="grid-2">
        {proposals.map((proposal) => {
          const total = proposal.forVotes + proposal.againstVotes || 1;
          const support = ((proposal.forVotes / total) * 100).toFixed(1);

          return (
            <article key={proposal.id} className="glass-card">
              <h3>{proposal.title}</h3>
              <p>For: {proposal.forVotes} | Against: {proposal.againstVotes}</p>
              <p>Support: {support}%</p>
              <div className="row">
                <button className="btn ghost" disabled={!appState.hasPrydoId} onClick={() => castVote(proposal.id, 'for')}>
                  Vote For
                </button>
                <button className="btn ghost" disabled={!appState.hasPrydoId} onClick={() => castVote(proposal.id, 'against')}>
                  Vote Against
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
