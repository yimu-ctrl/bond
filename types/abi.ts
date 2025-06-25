export const abiMockUSDT = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export const abiCardNFT = [
  {
    inputs: [
      { internalType: 'string', name: 'baseTokenURI_', type: 'string' },
      { internalType: 'address', name: 'royaltyReceiver_', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'string', name: 'newBaseURI', type: 'string' }],
    name: 'BaseURIUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'CardBurned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'cardNumber', type: 'uint256' }
    ],
    name: 'CardMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'newReceiver', type: 'address' }],
    name: 'RoyaltyReceiverUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ROYALTY_BASIS_POINTS',
    outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'TOTAL_CARDS',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'cardNumbers',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'cardNumber', type: 'uint256' }
    ],
    name: 'getCardCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getCardNumber',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'hasCompleteSet',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'cardNumber', type: 'uint256' }
    ],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'salePrice', type: 'uint256' }
    ],
    name: 'royaltyInfo',
    outputs: [
      { internalType: 'address', name: 'receiver', type: 'address' },
      { internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'royaltyReceiver',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'newBaseURI', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newReceiver', type: 'address' }],
    name: 'setRoyaltyReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userCardCounts',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiMasterCardNFT = [
  {
    inputs: [
      { internalType: 'string', name: 'baseTokenURI_', type: 'string' },
      { internalType: 'address', name: 'royaltyReceiver_', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'string', name: 'newBaseURI', type: 'string' }],
    name: 'BaseURIUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'MasterCardMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'MasterCardUsed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'newReceiver', type: 'address' }],
    name: 'RoyaltyReceiverUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ROYALTY_BASIS_POINTS',
    outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getCardUsedStatus',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'isCardUsed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'markCardAsUsed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'salePrice', type: 'uint256' }
    ],
    name: 'royaltyInfo',
    outputs: [
      { internalType: 'address', name: 'receiver', type: 'address' },
      { internalType: 'uint256', name: 'royaltyAmount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'royaltyReceiver',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'newBaseURI', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newReceiver', type: 'address' }],
    name: 'setRoyaltyReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export const abiCardDistributor = [
  {
    inputs: [
      { internalType: 'address', name: '_cardNFT', type: 'address' },
      { internalType: 'address', name: '_masterCardNFT', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'CardBurned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'cardNumber', type: 'uint256' }
    ],
    name: 'CardDrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256[]', name: 'cardNumbers', type: 'uint256[]' }
    ],
    name: 'CardsDistributed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'DrawEligibilityUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'MasterCardCrafted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'WHITELISTED_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'contractAddress', type: 'address' }],
    name: 'addWhitelistedContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'users', type: 'address[]' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'batchSetDrawEligibility',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cardNFT',
    outputs: [{ internalType: 'contract CardNFT', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'cardProbabilities',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'craftMasterCard', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'count', type: 'uint256' }
    ],
    name: 'distributeCards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }],
    name: 'drawCards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'cardNumber', type: 'uint256' }
    ],
    name: 'getUserCardIds',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'hasDrawEligibility',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'masterCardNFT',
    outputs: [{ internalType: 'contract MasterCardNFT', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'contractAddress', type: 'address' }],
    name: 'removeWhitelistedContract',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'setDrawEligibility',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'cardNumber', type: 'uint256' },
      { internalType: 'uint256', name: 'probability', type: 'uint256' }
    ],
    name: 'updateCardProbability',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userCardIds',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiReferralSystem = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'ReferralAmountUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: true, internalType: 'address', name: 'referrer', type: 'address' }
    ],
    name: 'ReferralSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'contractAddress', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'WhitelistUpdated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MAX_REFERRAL_LEVEL',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'WHITELISTED_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'contractAddress', type: 'address' }],
    name: 'addToWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'directReferrals',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getDirectReferrals',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getReferralAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getReferralChain',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getReferrer',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getSecondLevelReferrer',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'isReferred',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'isWhitelisted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'referralAmounts',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'referrers',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'contractAddress', type: 'address' }],
    name: 'removeFromWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address', name: 'referrer', type: 'address' }
    ],
    name: 'setReferrer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'updateReferralAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export const abiBondToken = [
  {
    inputs: [
      { internalType: 'address', name: '_routerAddress', type: 'address' },
      { internalType: 'address', name: '_usdtAddress', type: 'address' },
      { internalType: 'address', name: '_stakeAddress', type: 'address' },
      { internalType: 'address', name: '_lotteryAddress', type: 'address' },
      { internalType: 'address', name: '_treasuryAddress', type: 'address' },
      { internalType: 'address', name: '_burnAddress', type: 'address' },
      { internalType: 'uint256', name: '_minAirdropAmount', type: 'uint256' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'admin', type: 'address' }],
    name: 'AdminRoleRenounced',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'Approval',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'LPDisabled', type: 'event' },
  { anonymous: false, inputs: [], name: 'LPEnabled', type: 'event' },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }],
    name: 'MinAirdropAmountUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'RandomAirdrop',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'TaxAddressesUpdated', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'burnAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stakeAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'lotteryAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'treasuryAmount', type: 'uint256' }
    ],
    name: 'TaxCollected',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'account', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'TaxExemptUpdated',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'TaxRatesUpdated', type: 'event' },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'totalAmount', type: 'uint256' }],
    name: 'TokensMinted',
    type: 'event'
  },
  { anonymous: false, inputs: [], name: 'TradingEnabled', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'account', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'TradingWhitelistUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'TOTAL_SUPPLY',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'usdtAmount', type: 'uint256' }
    ],
    name: 'addLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'burnAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
    ],
    name: 'decreaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'disableLP', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { inputs: [], name: 'enableLP', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  { inputs: [], name: 'enableTrading', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getTaxInfo',
    outputs: [
      { internalType: 'uint256', name: 'totalBuyTax', type: 'uint256' },
      { internalType: 'uint256', name: 'totalSellTax', type: 'uint256' },
      {
        components: [
          { internalType: 'uint256', name: 'buyBurnRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyStakeRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyLotteryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyTreasuryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellBurnRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellStakeRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellLotteryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellTreasuryRate', type: 'uint256' }
        ],
        internalType: 'struct BondToken.TaxRates',
        name: 'rates',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'addedValue', type: 'uint256' }
    ],
    name: 'increaseAllowance',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'isTaxExempt',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'isTradingWhitelisted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lotteryAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lpEnabled',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minAirdropAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pancakePair',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pancakeRouter',
    outputs: [{ internalType: 'contract IPancakeRouter', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }],
    name: 'removeLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'renounceAdminRole', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'setTaxExempt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'setTradingWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'stakeAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'taxRates',
    outputs: [
      { internalType: 'uint256', name: 'buyBurnRate', type: 'uint256' },
      { internalType: 'uint256', name: 'buyStakeRate', type: 'uint256' },
      { internalType: 'uint256', name: 'buyLotteryRate', type: 'uint256' },
      { internalType: 'uint256', name: 'buyTreasuryRate', type: 'uint256' },
      { internalType: 'uint256', name: 'sellBurnRate', type: 'uint256' },
      { internalType: 'uint256', name: 'sellStakeRate', type: 'uint256' },
      { internalType: 'uint256', name: 'sellLotteryRate', type: 'uint256' },
      { internalType: 'uint256', name: 'sellTreasuryRate', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tradingEnabled',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'treasuryAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_minAirdropAmount', type: 'uint256' }],
    name: 'updateMinAirdropAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_stakeAddress', type: 'address' },
      { internalType: 'address', name: '_lotteryAddress', type: 'address' },
      { internalType: 'address', name: '_treasuryAddress', type: 'address' },
      { internalType: 'address', name: '_burnAddress', type: 'address' }
    ],
    name: 'updateTaxAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'buyBurnRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyStakeRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyLotteryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'buyTreasuryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellBurnRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellStakeRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellLotteryRate', type: 'uint256' },
          { internalType: 'uint256', name: 'sellTreasuryRate', type: 'uint256' }
        ],
        internalType: 'struct BondToken.TaxRates',
        name: 'newRates',
        type: 'tuple'
      }
    ],
    name: 'updateTaxRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'userLiquidity',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiBondPresale = [
  {
    inputs: [
      { internalType: 'address', name: '_usdtToken', type: 'address' },
      { internalType: 'address', name: '_bondToken', type: 'address' },
      { internalType: 'address', name: '_cardDistributor', type: 'address' },
      { internalType: 'address', name: '_referralContract', type: 'address' },
      { internalType: 'uint256', name: '_usdtAmount', type: 'uint256' },
      { internalType: 'uint256', name: '_bondAmount', type: 'uint256' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'usdtAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'bondAmount', type: 'uint256' }
    ],
    name: 'PresalePurchase',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'referrer', type: 'address' },
      { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'rewardAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint8', name: 'level', type: 'uint8' }
    ],
    name: 'ReferralReward',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: 'directRate', type: 'uint16' },
      { indexed: false, internalType: 'uint16', name: 'indirectRate', type: 'uint16' }
    ],
    name: 'RewardRatesUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'WhitelistUpdated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MAX_REWARD_RATE',
    outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'accounts', type: 'address[]' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'batchSetWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondToken',
    outputs: [{ internalType: 'contract BondToken', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cardDistributor',
    outputs: [{ internalType: 'contract CardDistributor', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'checkWhitelist',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'directReferralRate',
    outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'indirectReferralRate',
    outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'referrer', type: 'address' }],
    name: 'purchaseTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'referralContract',
    outputs: [{ internalType: 'contract ReferralSystem', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'setWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'uint256', name: '_usdtAmount', type: 'uint256' },
      { internalType: 'uint256', name: '_bondAmount', type: 'uint256' }
    ],
    name: 'updatePresaleConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_directRate', type: 'uint16' },
      { internalType: 'uint16', name: '_indirectRate', type: 'uint16' }
    ],
    name: 'updateReferralRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'whitelistedAddresses',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'withdrawBOND',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'withdrawUSDT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

export const abiLottery = [
  {
    inputs: [
      { internalType: 'address', name: '_usdtToken', type: 'address' },
      { internalType: 'address', name: '_masterCardNFT', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'masterCardId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'remainingPool', type: 'uint256' }
    ],
    name: 'PrizeClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'masterCardId', type: 'uint256' }],
    name: 'claimPrize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentPrizePool',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLotteryInfo',
    outputs: [
      { internalType: 'uint256', name: 'totalPool', type: 'uint256' },
      { internalType: 'uint256', name: 'totalClaimed', type: 'uint256' },
      { internalType: 'uint256', name: 'winnerCount', type: 'uint256' },
      { internalType: 'uint256', name: 'availablePrize', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'count', type: 'uint256' }],
    name: 'getRecentClaims',
    outputs: [
      { internalType: 'address[]', name: 'users', type: 'address[]' },
      { internalType: 'bytes32[]', name: 'claimHashes', type: 'bytes32[]' },
      { internalType: 'uint256[]', name: 'claimDates', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'claimAmounts', type: 'uint256[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserClaimCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserClaimDetails',
    outputs: [
      { internalType: 'bytes32[]', name: 'claimHashes', type: 'bytes32[]' },
      { internalType: 'uint256[]', name: 'claimDates', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'claimAmounts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'masterCardIds', type: 'uint256[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserClaimHistory',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'masterCardId', type: 'uint256' },
          { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'claimTime', type: 'uint256' },
          { internalType: 'bytes32', name: 'claimHash', type: 'bytes32' }
        ],
        internalType: 'struct Lottery.ClaimRecord[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserTotalClaimed',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'masterCardNFT',
    outputs: [{ internalType: 'contract MasterCardNFT', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalClaimCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalClaimedAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userClaimHistory',
    outputs: [
      { internalType: 'uint256', name: 'masterCardId', type: 'uint256' },
      { internalType: 'uint256', name: 'claimAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'claimTime', type: 'uint256' },
      { internalType: 'bytes32', name: 'claimHash', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiBurnContract = [
  {
    inputs: [
      { internalType: 'address', name: '_bondToken', type: 'address' },
      { internalType: 'address', name: '_usdtToken', type: 'address' },
      { internalType: 'address', name: '_lotteryAddress', type: 'address' },
      { internalType: 'address', name: '_teamWalletAddress', type: 'address' },
      { internalType: 'address', name: '_pancakeRouter', type: 'address' },
      { internalType: 'address', name: '_cardDistributor', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'newDistributor', type: 'address' }],
    name: 'CardDistributorUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newLimit', type: 'uint256' }],
    name: 'HourlyLimitUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'totalReturn', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'investmentId', type: 'uint256' }
    ],
    name: 'InvestmentCompleted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'bool', name: 'isTurbo', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'investmentId', type: 'uint256' }
    ],
    name: 'InvestmentCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }],
    name: 'NormalInvestAmountUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newRate', type: 'uint256' }],
    name: 'NormalReturnRateUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'investmentId', type: 'uint256' }
    ],
    name: 'RewardClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newInterval', type: 'uint256' }],
    name: 'RewardIntervalUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }],
    name: 'TurboInvestAmountUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'newRate', type: 'uint256' }],
    name: 'TurboReturnRateUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEAD_ADDRESS',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'activeInvestments',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cardDistributor',
    outputs: [{ internalType: 'contract CardDistributor', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'investmentId', type: 'uint256' }],
    name: 'claimReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentHourlyInvestment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getInvestmentLimits',
    outputs: [
      { internalType: 'uint256', name: 'normalLimit', type: 'uint256' },
      { internalType: 'uint256', name: 'turboLimit', type: 'uint256' },
      { internalType: 'uint256', name: 'hourlyLimit', type: 'uint256' },
      { internalType: 'uint256', name: 'currentHourlyInvestment', type: 'uint256' },
      { internalType: 'uint256', name: 'remainingHourlyLimit', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getReturnRates',
    outputs: [
      { internalType: 'uint256', name: 'normalRate', type: 'uint256' },
      { internalType: 'uint256', name: 'turboRate', type: 'uint256' },
      { internalType: 'uint256', name: 'rewardIntervalInHours', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'investmentId', type: 'uint256' }
    ],
    name: 'getUserInvestment',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
      { internalType: 'uint256', name: 'claimedAmount', type: 'uint256' },
      { internalType: 'bool', name: 'isTurbo', type: 'bool' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserInvestmentCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserInvestmentDetails',
    outputs: [
      { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'tokenAmounts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'startTimes', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'lastClaimTimes', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'claimedAmounts', type: 'uint256[]' },
      { internalType: 'bool[]', name: 'isTurbos', type: 'bool[]' },
      { internalType: 'bool[]', name: 'isActives', type: 'bool[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserInvestmentStats',
    outputs: [
      { internalType: 'uint256', name: 'totalNormalInvestment', type: 'uint256' },
      { internalType: 'uint256', name: 'totalTurboInvestment', type: 'uint256' },
      { internalType: 'uint256', name: 'totalEarned', type: 'uint256' },
      { internalType: 'uint256', name: 'totalClaimed', type: 'uint256' },
      { internalType: 'uint256', name: 'activeInvestmentsCount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'hourlyInvestmentLimit',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lastHourTimestamp',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lotteryAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'normalBurn', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'normalInvestAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'normalReturnRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pancakeRouter',
    outputs: [{ internalType: 'contract IPancakeRouter', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rewardInterval',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'teamWalletAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'turboBurn', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'turboInvestAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'turboReturnRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: '_lotteryAddress', type: 'address' },
      { internalType: 'address', name: '_teamWalletAddress', type: 'address' }
    ],
    name: 'updateAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_cardDistributor', type: 'address' }],
    name: 'updateCardDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_normalInvestAmount', type: 'uint256' }],
    name: 'updateNormalInvestAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_normalReturnRate', type: 'uint256' }],
    name: 'updateNormalReturnRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_rewardInterval', type: 'uint256' }],
    name: 'updateRewardInterval',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_turboInvestAmount', type: 'uint256' }],
    name: 'updateTurboInvestAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_turboReturnRate', type: 'uint256' }],
    name: 'updateTurboReturnRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userInvestments',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'tokenAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
      { internalType: 'uint256', name: 'claimedAmount', type: 'uint256' },
      { internalType: 'bool', name: 'isTurbo', type: 'bool' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiTreasuryContract = [
  {
    inputs: [
      { internalType: 'address', name: '_bondToken', type: 'address' },
      { internalType: 'address', name: '_usdtToken', type: 'address' },
      { internalType: 'address', name: '_pancakeRouter', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'AssetReceived',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'token', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'AssetTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'BondBurned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'usdtAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'bondAmount', type: 'uint256' }
    ],
    name: 'BondPurchased',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEAD_ADDRESS',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'OPERATOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'burnBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'usdtAmount', type: 'uint256' }],
    name: 'buyBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'getAssetBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'grantOperatorRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pancakeRouter',
    outputs: [{ internalType: 'contract IPancakeRouter', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'revokeOperatorRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transferAsset',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const

export const abiStakingContract = [
  {
    inputs: [
      { internalType: 'address', name: '_bondToken', type: 'address' },
      { internalType: 'address', name: '_usdtToken', type: 'address' },
      { internalType: 'address', name: '_referralSystem', type: 'address' },
      { internalType: 'address', name: '_pancakeRouter', type: 'address' },
      { internalType: 'address', name: '_cardDistributor', type: 'address' },
      { internalType: 'address', name: '_teamWalletAddress', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'referrer', type: 'address' },
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'bool', name: 'isDirect', type: 'bool' }
    ],
    name: 'ReferralRewardPaid',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stakeId', type: 'uint256' }
    ],
    name: 'RewardClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' }
    ],
    name: 'RoleAdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleGranted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' }
    ],
    name: 'RoleRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'bool', name: 'isBondStake', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'stakeId', type: 'uint256' }
    ],
    name: 'StakeCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'penalty', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stakeId', type: 'uint256' }
    ],
    name: 'StakeWithdrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'StudioStatusUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'performance', type: 'uint256' }
    ],
    name: 'TeamRewardPaid',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'adminWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondPurchaseRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'bondToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cardDistributor',
    outputs: [{ internalType: 'contract CardDistributor', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'stakeId', type: 'uint256' }],
    name: 'claimReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cooldownPeriod',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentCycleMaxUSDTStake',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentCycleStakedUSDT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'currentCycleStartTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cycleDuration',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'dailyRewardRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'directReferralRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'firstMonthPenalty',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentCycleInfo',
    outputs: [
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'endTime', type: 'uint256' },
      { internalType: 'uint256', name: 'maxUSDTStake', type: 'uint256' },
      { internalType: 'uint256', name: 'stakedUSDT', type: 'uint256' },
      { internalType: 'uint256', name: 'remainingUSDT', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'periodId', type: 'uint256' }],
    name: 'getPeriodInfo',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'endTime', type: 'uint256' },
          { internalType: 'uint256', name: 'maxUSDTStake', type: 'uint256' },
          { internalType: 'uint256', name: 'stakedUSDT', type: 'uint256' }
        ],
        internalType: 'struct Period',
        name: 'period',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'staker', type: 'address' }],
    name: 'getStakingDetails',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'totalUsdtStaked', type: 'uint256' },
          { internalType: 'uint256', name: 'totalBondStaked', type: 'uint256' },
          { internalType: 'uint256', name: 'totalRewards', type: 'uint256' },
          { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
          { internalType: 'uint256', name: 'activeStakes', type: 'uint256' },
          { internalType: 'bool', name: 'isActive', type: 'bool' }
        ],
        internalType: 'struct StakingDetails',
        name: 'details',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getTeamPerformance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'stakeId', type: 'uint256' }
    ],
    name: 'getUserStake',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'bondAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
      { internalType: 'uint256', name: 'claimedAmount', type: 'uint256' },
      { internalType: 'bool', name: 'isBondStake', type: 'bool' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserStakeCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserStakes',
    outputs: [
      { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'bondAmounts', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'startTimes', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'lastClaimTimes', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'claimedAmounts', type: 'uint256[]' },
      { internalType: 'bool[]', name: 'isBondStakes', type: 'bool[]' },
      { internalType: 'bool[]', name: 'isActives', type: 'bool[]' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getUserSummary',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'totalInvestedUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'totalInvestedBond', type: 'uint256' },
          { internalType: 'uint256', name: 'claimableRewardUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'claimableRewardBond', type: 'uint256' },
          { internalType: 'uint256', name: 'totalRewardsUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'totalRewardsBond', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawnRewardUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawnRewardBond', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawablePrincipalUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawablePrincipalBond', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawnPrincipalUsdt', type: 'uint256' },
          { internalType: 'uint256', name: 'withdrawnPrincipalBond', type: 'uint256' },
          { internalType: 'uint256', name: 'cooldownLeft', type: 'uint256' }
        ],
        internalType: 'struct StakingContract.UserSummary',
        name: 'summary',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'indirectReferralRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'isStudio',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level1RewardRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level1Threshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level2RewardRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level2Threshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level3RewardRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'level3Threshold',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'maxBondInvestment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'maxUsdtInvestment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minBondInvestment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minStakeAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minUsdtInvestment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pancakeRouter',
    outputs: [{ internalType: 'contract IPancakeRouter', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'periods',
    outputs: [
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'endTime', type: 'uint256' },
      { internalType: 'uint256', name: 'maxUSDTStake', type: 'uint256' },
      { internalType: 'uint256', name: 'stakedUSDT', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'referralRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'referralSystem',
    outputs: [{ internalType: 'contract ReferralSystem', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' }
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'secondMonthPenalty',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_direct', type: 'uint256' },
      { internalType: 'uint256', name: '_indirect', type: 'uint256' }
    ],
    name: 'setReferralRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'bool', name: 'status', type: 'bool' }
    ],
    name: 'setStudioStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'referrer', type: 'address' }
    ],
    name: 'stakeBOND',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'referrer', type: 'address' }
    ],
    name: 'stakeUSDT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'stakingDetails',
    outputs: [
      { internalType: 'uint256', name: 'totalUsdtStaked', type: 'uint256' },
      { internalType: 'uint256', name: 'totalBondStaked', type: 'uint256' },
      { internalType: 'uint256', name: 'totalRewards', type: 'uint256' },
      { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
      { internalType: 'uint256', name: 'activeStakes', type: 'uint256' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'stakingPoolRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'studioBonusRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'teamLeaderRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'teamPerformance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'teamWalletAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'teamWalletRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'thirdMonthPenalty',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: '_referralSystem', type: 'address' },
      { internalType: 'address', name: '_cardDistributor', type: 'address' },
      { internalType: 'address', name: '_teamWalletAddress', type: 'address' }
    ],
    name: 'updateAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_cycleDuration', type: 'uint256' },
      { internalType: 'uint256', name: '_maxUSDTStake', type: 'uint256' }
    ],
    name: 'updateCycleConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_bondPurchaseRate', type: 'uint256' },
      { internalType: 'uint256', name: '_referralRate', type: 'uint256' },
      { internalType: 'uint256', name: '_teamLeaderRate', type: 'uint256' },
      { internalType: 'uint256', name: '_stakingPoolRate', type: 'uint256' },
      { internalType: 'uint256', name: '_teamWalletRate', type: 'uint256' }
    ],
    name: 'updateDistributionRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_maxUsdt', type: 'uint256' },
      { internalType: 'uint256', name: '_maxBond', type: 'uint256' }
    ],
    name: 'updateInvestmentLimits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_cooldownPeriod', type: 'uint256' },
      { internalType: 'uint256', name: '_dailyRewardRate', type: 'uint256' },
      { internalType: 'uint256', name: '_minStakeAmount', type: 'uint256' }
    ],
    name: 'updateStakingConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_level1RewardRate', type: 'uint256' },
      { internalType: 'uint256', name: '_level2RewardRate', type: 'uint256' },
      { internalType: 'uint256', name: '_level3RewardRate', type: 'uint256' },
      { internalType: 'uint256', name: '_studioBonusRate', type: 'uint256' },
      { internalType: 'uint256', name: '_level1Threshold', type: 'uint256' },
      { internalType: 'uint256', name: '_level2Threshold', type: 'uint256' },
      { internalType: 'uint256', name: '_level3Threshold', type: 'uint256' }
    ],
    name: 'updateTeamRewardConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'usdtToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    name: 'userStakes',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'bondAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'lastClaimTime', type: 'uint256' },
      { internalType: 'uint256', name: 'claimedAmount', type: 'uint256' },
      { internalType: 'bool', name: 'isBondStake', type: 'bool' },
      { internalType: 'bool', name: 'isActive', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'stakeId', type: 'uint256' }],
    name: 'withdrawStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const
