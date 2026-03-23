import { useState } from 'react';

export default function CreateIdentityPage({ appState }) {
  const [type, setType] = useState('Face NFT');
  const [uploadedName, setUploadedName] = useState('');

  return (
    <div className="page">
      <section className="glass-card">
        <h1>Create Identity NFT</h1>
        <p>Choose your identity mode after minting Prydo ID.</p>

        <div className="row">
          {['Face NFT', 'Avatar NFT'].map((item) => (
            <button key={item} className={`btn ${type === item ? 'neon' : 'ghost'}`} onClick={() => setType(item)}>
              {item}
            </button>
          ))}
        </div>

        {type === 'Face NFT' ? (
          <div className="glass-inner">
            <h3>Upload Face Photo</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setUploadedName(event.target.files?.[0]?.name || '')}
            />
            <p className="small">AI stylization pipeline placeholder. Selected: {uploadedName || 'None'}</p>
          </div>
        ) : (
          <div className="glass-inner">
            <h3>Use Trait Generator</h3>
            <p>Create layered avatars with rarity-based traits in the avatar generator page.</p>
          </div>
        )}

        <p className="small">Identity creation unlocks after Prydo ID mint: {appState.hasPrydoId ? 'Unlocked' : 'Locked'}</p>
      </section>
    </div>
  );
}
