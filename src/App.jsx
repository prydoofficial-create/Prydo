import { useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import HomePage from './pages/HomePage';
import MintPage from './pages/MintPage';
import CreateIdentityPage from './pages/CreateIdentityPage';
import AvatarGeneratorPage from './pages/AvatarGeneratorPage';
import CreatorDashboardPage from './pages/CreatorDashboardPage';
import DaoGovernancePage from './pages/DaoGovernancePage';
import MarketplacePlaceholderPage from './pages/MarketplacePlaceholderPage';

const truncateAddress = (address = '') => (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '');

export default function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [hasPrydoId, setHasPrydoId] = useState(false);
  const [mintCount, setMintCount] = useState(46);
  const [createdNfts, setCreatedNfts] = useState([]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask is required to continue.');
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    setWalletAddress(accounts[0] || '');
  };

  const appState = useMemo(
    () => ({
      walletAddress,
      hasPrydoId,
      mintCount,
      createdNfts,
      connectWallet,
      mintPrydoId: () => {
        if (!walletAddress || hasPrydoId) return false;
        setHasPrydoId(true);
        setMintCount((prev) => prev + 1);
        return true;
      },
      addCreatedNft: (nft) => setCreatedNfts((prev) => [...prev, nft])
    }),
    [walletAddress, hasPrydoId, mintCount, createdNfts]
  );

  return (
    <div className="app-shell">
      <header className="glass-nav">
        <Link to="/" className="brand">Prydo</Link>
        <nav>
          {[
            ['/', 'Home'],
            ['/mint-prydo-id', 'Mint Prydo ID'],
            ['/create-identity', 'Create Identity'],
            ['/avatar-generator', 'Avatar Generator'],
            ['/creator-dashboard', 'Dashboard'],
            ['/dao-governance', 'DAO'],
            ['/marketplace', 'Marketplace']
          ].map(([path, label]) => (
            <NavLink key={path} to={path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button className="btn neon" onClick={connectWallet}>
          {walletAddress ? truncateAddress(walletAddress) : 'Connect Wallet'}
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage appState={appState} />} />
          <Route path="/mint-prydo-id" element={<MintPage appState={appState} />} />
          <Route path="/create-identity" element={<CreateIdentityPage appState={appState} />} />
          <Route path="/avatar-generator" element={<AvatarGeneratorPage appState={appState} />} />
          <Route path="/creator-dashboard" element={<CreatorDashboardPage appState={appState} />} />
          <Route path="/dao-governance" element={<DaoGovernancePage appState={appState} />} />
          <Route path="/marketplace" element={<MarketplacePlaceholderPage />} />
        </Routes>
      </main>
    </div>
  );
}
