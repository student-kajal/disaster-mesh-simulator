export default function Controls({
  devices,
  startNode,
  setStartNode,
  endNode,
  setEndNode,
  runSimulation,
}) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <button
        onClick={runSimulation}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          border: 'none'
        }}
      >
        Run Simulation
      </button>
      <select
        value={startNode}
        onChange={e => setStartNode(e.target.value)}
        style={{
          border: '1px solid #d1d5db',
          padding: '0.5rem',
          borderRadius: '0.25rem'
        }}
      >
        <option value="">Start Node</option>
        {devices.map(d => (
          <option key={d.id} value={d.id}>{d.id.slice(0, 4)}</option>
        ))}
      </select>
      <select
        value={endNode}
        onChange={e => setEndNode(e.target.value)}
        style={{
          border: '1px solid #d1d5db',
          padding: '0.5rem',
          borderRadius: '0.25rem'
        }}
      >
        <option value="">End Node</option>
        {devices.map(d => (
          <option key={d.id} value={d.id}>{d.id.slice(0, 4)}</option>
        ))}
      </select>
    </div>
  );
}
