export default function Device({ x, y }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '24px',
        height: '24px',
        backgroundColor: '#ef4444',
        borderRadius: '50%',
        border: '2px solid white',
        left: x - 12,
        top: y - 12
      }}
    >
      <span style={{ fontSize: '0.75rem', color: 'white' }}>D</span>
    </div>
  );
}
