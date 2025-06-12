import { useState, useEffect } from 'react';
import { saveDevices, loadDevices } from '../utils/storage';

export default function useSimulation() {
  const [devices, setDevices] = useState([]);
  const [messagePath, setMessagePath] = useState([]);

  // Load emergency network state
  useEffect(() => {
    const initializeEmergencyNetwork = async () => {
      try {
        const savedDevices = await loadDevices();
        if (savedDevices) setDevices(savedDevices);
      } catch (error) {
        console.error('Emergency network restore failed:', error);
      }
    };
    initializeEmergencyNetwork();
  }, []);

  // Persist network state for disaster recovery
  useEffect(() => {
    const persistNetworkState = async () => {
      try {
        await saveDevices(devices);
      } catch (error) {
        console.error('Emergency state backup failed:', error);
      }
    };
    persistNetworkState();
  }, [devices]);

  // Add emergency node to network
  const addDevice = (position) => {
    const newDevice = {
      id: crypto.randomUUID(),
      x: position.x,
      y: position.y,
      range: 300,
      status: 'active',
      lastUpdated: new Date().toISOString()
    };
    setDevices(prev => [...prev, newDevice]);
  };

  // Move node during network reconfiguration
  const moveDevice = (deviceId, newPosition) => {
    setDevices(devices.map(d => 
      d.id === deviceId ? { 
        ...d, 
        x: newPosition.x, 
        y: newPosition.y,
        lastUpdated: new Date().toISOString()
      } : d
    ));
    clearPathIfAffected(deviceId);
  };

  // Remove failed node from network
  const deleteDevice = (deviceId) => {
    setDevices(devices.filter(d => d.id !== deviceId));
    clearPathIfAffected(deviceId);
  };

  // Clear path if modified node was part of current path
  const clearPathIfAffected = (deviceId) => {
    if (messagePath.some(device => device.id === deviceId)) {
      setMessagePath([]);
    }
  };

  // Emergency network status report
  const getNetworkStatus = () => ({
    nodeCount: devices.length,
    activeNodes: devices.filter(d => d.status === 'active').length,
    lastUpdated: new Date().toISOString()
  });

  return {
    devices,
    messagePath,
    addDevice,
    moveDevice,
    deleteDevice,
    setMessagePath,
    getNetworkStatus
  };
}
