import localforage from 'localforage';

export const saveDevices = async (devices) => {
  await localforage.setItem('mesh-devices', devices);
};

export const loadDevices = async () => {
  return await localforage.getItem('mesh-devices');
};
