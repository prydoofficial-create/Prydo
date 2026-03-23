export const mintPhases = [
  { name: 'Phase 1 (Genesis)', supply: 100, freeRate: 1, price: '0 MATIC' },
  { name: 'Phase 2 (Early Users)', supply: 900, freeRate: 0.7, price: '0.01 MATIC (30%)' },
  { name: 'Phase 3 (Growth)', supply: 10000, freeRate: 0.5, price: '0.01 MATIC (50%)' },
  { name: 'Phase 4 (Public)', supply: null, freeRate: 0.2, price: '0.01 MATIC (80%)' }
];

export const traitLayers = {
  Background: ['Neon City', 'Galaxy', 'Matrix', 'Cyber Grid'],
  Skin: ['Human', 'Chrome', 'Holographic', 'Synthwave'],
  Hair: ['Short Hair', 'Neon Hair', 'Cyber Spikes'],
  Eyes: ['Normal Eyes', 'Laser Eyes', 'Robot Eyes'],
  Mouth: ['Neutral', 'Cyber Smile', 'Mask'],
  Outfit: ['Hoodie', 'Hacker Jacket', 'Armor'],
  Accessories: ['Glasses', 'VR Headset', 'Crown'],
  Aura: ['Fire Aura', 'Lightning Aura', 'Cosmic Aura']
};

export const rarityWeights = {
  common: 0.55,
  rare: 0.3,
  epic: 0.12,
  legendary: 0.03
};

export const proposalsSeed = [
  { id: 1, title: 'Add new creator features', forVotes: 120, againstVotes: 24 },
  { id: 2, title: 'Upgrade creator tools', forVotes: 92, againstVotes: 11 },
  { id: 3, title: 'Launch new NFT collections', forVotes: 71, againstVotes: 39 }
];
