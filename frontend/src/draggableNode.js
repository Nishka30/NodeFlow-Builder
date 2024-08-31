export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#2f4f7f', 
        border: '3px solid rgba(255, 255, 255, 0.7)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        transition: 'background-color 0.3s ease, transform 0.3s ease', 
        zIndex: 1,
        
      }}
      draggable
    >
      <span
        style={{
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {label}
      </span>
    </div>
  );
};