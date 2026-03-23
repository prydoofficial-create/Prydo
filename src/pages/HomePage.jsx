import { Link } from 'react-router-dom';

export default function HomePage({ appState }) {
  return (
    <div className="page">
      <section className="hero glass-card">
        <p className="label">Polygon • Soulbound Identity • Creator DAO</p>
        <h1>Build Your Web3 Identity with Prydo</h1>
        <p>Decentralized identity and creator ecosystem powered by NFTs.</p>
        <div className="row">
          <button className="btn neon" onClick={appState.connectWallet}>Connect Wallet</button>
          <Link to="/mint-prydo-id" className="btn ghost">Mint Prydo ID</Link>
        </div>
      </section>

      <section className="grid-3">
        {[
          ['Soulbound Prydo ID', 'Mint a non-transferable identity NFT bound to your wallet.'],
          ['Avatar Intelligence', 'Generate AI-styled face NFTs or trait-driven avatars with rarity layers.'],
          ['Creator Economy', 'Launch collections, track sales, and govern the ecosystem through DAO voting.']
        ].map(([title, copy]) => (
          <article key={title} className="glass-card feature-card">
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="glass-card">
        <h2>How It Works</h2>
        <ol>
          <li>Connect Wallet → Mint Prydo ID.</li>
          <li>Choose Face NFT or Avatar NFT and generate metadata.</li>
          <li>Access creator dashboard, launch collections, and vote in DAO.</li>
        </ol>
      </section>

      <section className="grid-2">
        <article className="glass-card">
          <h2>Roadmap</h2>
          <ul>
            <li>Q2: Genesis SBT drop + identity mint engine.</li>
            <li>Q3: Creator studio + analytics + IPFS pipeline.</li>
            <li>Q4: DAO tooling + marketplace launch.</li>
          </ul>
        </article>
        <article className="glass-card">
          <h2>Community</h2>
          <p>Join builders, artists, and collectors shaping decentralized identity.</p>
          <div className="chips">
            <span>Discord</span>
            <span>X / Twitter</span>
            <span>Lens</span>
            <span>Mirror</span>
          </div>
        </article>
      </section>
    </div>
  );
}
