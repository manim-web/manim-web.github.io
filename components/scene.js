function Scene({ src }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
        frameBorder="0"
      />
    </div>
  );
}

export default Scene;
