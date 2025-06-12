export default function Grid({ 
  devices, 
  onAddDevice, 
  messagePath, 
  onMoveDevice,
  onDeleteDevice 
}) {
  return (
    <div
      style={{
        position: 'relative',
        height: '500px',
        backgroundColor: '#f3f4f6',
        cursor: 'crosshair',
        border: '2px dashed #9ca3af'
      }}
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        onAddDevice({ x, y });
        
      }}
    >
      {/* SVG Path Lines */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {messagePath.map((device, index) => {
          if (index === 0) return null;
          const prevDevice = messagePath[index - 1];
          return (
            <line
              key={`line-${index}`}
              x1={prevDevice.x}
              y1={prevDevice.y}
              x2={device.x}
              y2={device.y}
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="4"
            />
          );
        })}
      </svg>

      {/* Devices */}
      {devices.map(device => (
        <div
          key={device.id}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('text/plain', device.id);
            e.currentTarget.style.opacity = '0.5';
          }}
          onDragEnd={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const draggedId = e.dataTransfer.getData('text/plain');
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            onMoveDevice(draggedId, x, y);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            onDeleteDevice(device.id);
          }}
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            border: '2px solid white',
            left: device.x - 12,
            top: device.y - 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            cursor: 'grab',
            transition: 'transform 0.2s'
          }}
        >
          <span style={{ 
            fontSize: '0.75rem', 
            color: 'white', 
            fontWeight: 'bold',
            pointerEvents: 'none' 
          }}>
            {device.id.slice(0, 2)}
          </span>
        </div>
      ))}

      {/* Path Nodes */}
      {messagePath.map((device, index) => (
        device && (
          <div
            key={'path-' + index}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: '#3b82f6',
              borderRadius: '50%',
              left: device.x - 4,
              top: device.y - 4,
              zIndex: 10,
              pointerEvents: 'none'
            }}
          />
        )
      ))}
    </div>
  );
}
