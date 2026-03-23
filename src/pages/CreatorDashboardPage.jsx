export default function CreatorDashboardPage({ appState }) {
  const mockSales = 42;
  const revenue = (mockSales * 0.07).toFixed(2);

  return (
    <div className="page">
      <section className="glass-card">
        <h1>Creator Dashboard</h1>
        <div className="grid-3">
          <Stat label="Wallet" value={appState.walletAddress || 'Not connected'} />
          <Stat label="NFTs Created" value={String(appState.createdNfts.length)} />
          <Stat label="Total Sales" value={String(mockSales)} />
          <Stat label="Revenue" value={`${revenue} ETH`} />
          <Stat label="Followers" value="1,248" />
          <Stat label="DAO Voting Power" value={appState.hasPrydoId ? 'Genesis Holder' : '0'} />
        </div>
      </section>

      <section className="grid-2">
        <article className="glass-card">
          <h2>My NFTs</h2>
          {appState.createdNfts.length === 0 ? (
            <p>No NFTs created yet.</p>
          ) : (
            <ul>
              {appState.createdNfts.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </article>
        <article className="glass-card">
          <h2>Analytics</h2>
          <p>Collection Performance: +12% week-over-week.</p>
          <p>Conversion Rate: 5.4%</p>
          <button className="btn neon">Create NFT</button>
        </article>
      </section>

      <section className="grid-2">
        <article className="glass-card">
          <h2>DAO Votes</h2>
          <p>Your recent votes and proposal participation appear here.</p>
        </article>
        <article className="glass-card">
          <h2>Profile Settings</h2>
          <p>Configure profile, social links, payout wallet, and creator metadata.</p>
        </article>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
