import { useState } from 'react';
import useSimulation from './hooks/useSimulation';
import Grid from './components/Grid';
import Controls from './components/Controls';
import SimulationResults from './components/SimulationResults';
import { calculatePathBFS } from './utils/simulation';

function App() {
  const simulation = useSimulation();
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');

  const runSimulation = () => {
    if (startNode && endNode) {
      const path = calculatePathBFS(simulation.devices, startNode, endNode);
      
      if (path.length > 0) {
        const pathDevices = path
          .map(id => simulation.devices.find(d => d.id === id))
          .filter(Boolean);
        simulation.setMessagePath(pathDevices);
      } else {
        alert('Emergency path not found! Devices out of range');
        simulation.setMessagePath([]);
      }
    } else {
      alert('Please select both start and end nodes');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb', 
      padding: '1rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: '800', 
          marginBottom: '1.5rem',
          color: '#1e293b',
          textAlign: 'center'
        }}>
          Disaster Mesh Relay Simulator
        </h1>
        
        <Controls
          devices={simulation.devices}
          startNode={startNode}
          setStartNode={setStartNode}
          endNode={endNode}
          setEndNode={setEndNode}
          runSimulation={runSimulation}
        />

        <div style={{ 
          marginTop: '2rem', 
          border: '4px dashed #cbd5e1', 
          borderRadius: '0.75rem',
          position: 'relative'
        }}>
          <Grid
            devices={simulation.devices}
            onAddDevice={simulation.addDevice}
            messagePath={simulation.messagePath}
            onMoveDevice={simulation.moveDevice}
            onDeleteDevice={simulation.deleteDevice}
          />
        </div>

        <SimulationResults 
          messagePath={simulation.messagePath}
          style={{ marginTop: '1.5rem' }}
        />
      </div>
    </div>
  );
}

export default App;
