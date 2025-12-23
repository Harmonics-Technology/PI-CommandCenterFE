export const getTableStatusColors = (active: boolean) => {
 return {
  bg: active ? '#BFF1DF' : '#F9C3CD',
  color: active ? '#2EB67D' : '#E45771',
  text: active ? 'Active' : 'Inactive',
 };
};

export const getTableStateColors = (state: string | undefined | null) => {
 const s = state?.toLowerCase();

 if (s === 'active' || s === 'approved' || s === 'completed') {
  return { bg: '#BFF1DF', color: '#2EB67D' }; // Preserving existing behavior
 }
 if (s === 'pending' || s === 'inactive' || s === 'inprogress') {
  return { bg: '#FFC1485C', color: '#F0997A' };
 }
 if (s === 'reviewed' || s === 'submitted') {
  return { bg: 'brand.600', color: 'brand.600' };
 }
 if (s === 'invoiced') {
  return { bg: '#28a3ef', color: '#28a3ef' };
 }
 if (s === 'in progress' || s === 'inprogress') {
  return { bg: 'gray.400', color: 'gray.400' };
 }

 // Default / Canceled
 return { bg: '#F9C3CD', color: '#E45771' };
};

export const getTableDataColor = (name: any, isSolid?: boolean, isRed?: boolean) => {
 if (isRed) return '#FF5B79';
 if (name === 'ONSHORE') return 'brand.400';
 if (isSolid) return '#073367';
 return 'black';
};

export const getShiftDateColor = (name: any) => {
 if (name === 'OFFSHORE') return 'brand.700';
 if (name === 'ONSHORE') return 'brand.400';
 return 'black';
};
