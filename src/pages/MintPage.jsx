import { mintPhases } from '../data/prydoData';

export default function MintPage({ appState }) {
  const totalTrackedSupply = 11000;
  const percent = Math.min((appState.mintCount / totalTrackedSupply) * 100, 100);

  return (
    <div className="page">
      <section className="glass-card">
        <h1>Mint Prydo ID (Soulbound NFT)</h1>
        <p>Only one Prydo ID per wallet. Non-transferable ERC-721 identity on Polygon.</p>
        <p>Minted: {appState.mintCount} / {totalTrackedSupply}+ tracked supply</p>
        <div className="progress-wrap">
          <div className="progress-bar" style={{ width: `${percent}%` }} />
        </div>

        <button className="btn neon" onClick={appState.mintPrydoId} disabled={!appState.walletAddress || appState.hasPrydoId}>
          {appState.hasPrydoId ? 'Prydo ID Minted' : 'Mint Prydo ID'}
        </button>
        {!appState.walletAddress && <p className="small">Connect wallet to mint.</p>}
      </section>

      <section className="grid-2">
        {mintPhases.map((phase) => (
          <article key={phase.name} className="glass-card feature-card">
            <h3>{phase.name}</h3>
            <p>Supply: {phase.supply ? phase.supply.toLocaleString() : 'Unlimited'}</p>
            <p>Free Mint Ratio: {(phase.freeRate * 100).toFixed(0)}%</p>
            <p>Pricing: {phase.price}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
