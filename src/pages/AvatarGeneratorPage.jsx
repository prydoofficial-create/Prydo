import { useMemo, useState } from 'react';
import { traitLayers } from '../data/prydoData';

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function AvatarGeneratorPage({ appState }) {
  const [selection, setSelection] = useState(
    Object.fromEntries(Object.entries(traitLayers).map(([k, values]) => [k, values[0]]))
  );

  const generated = useMemo(
    () => ({
      name: `Prydo Avatar #${100 + appState.createdNfts.length + 1}`,
      description: 'Prydo Web3 Identity Avatar',
      attributes: Object.entries(selection).map(([trait_type, value]) => ({ trait_type, value }))
    }),
    [selection, appState.createdNfts.length]
  );

  const randomize = () => {
    const updated = Object.fromEntries(Object.entries(traitLayers).map(([k, values]) => [k, randomFrom(values)]));
    setSelection(updated);
  };

  const mintAvatar = () => {
    appState.addCreatedNft({ ...generated, id: Date.now() });
    alert('Avatar NFT generated. Image + metadata queued for IPFS pinning (UI simulation).');
  };

  return (
    <div className="page">
      <section className="glass-card">
        <h1>Avatar Generator</h1>
        <p>Layer-based NFT generation with rarity-ready traits and IPFS metadata output.</p>

        <div className="grid-3">
          {Object.entries(traitLayers).map(([trait, options]) => (
            <label key={trait} className="input-group">
              <span>{trait}</span>
              <select value={selection[trait]} onChange={(e) => setSelection((prev) => ({ ...prev, [trait]: e.target.value }))}>
                {options.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          ))}
        </div>

        <div className="row">
          <button className="btn ghost" onClick={randomize}>Randomize Traits</button>
          <button className="btn neon" onClick={mintAvatar} disabled={!appState.hasPrydoId}>Generate NFT</button>
        </div>

        <pre>{JSON.stringify(generated, null, 2)}</pre>
      </section>
    </div>
  );
}
