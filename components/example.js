function Example({ src, name }) {
  return (
    <a href={`/examples/${src.replace(/_/g, '-')}`} style={{ margin: '5%' }}>
      <h2 style={{ textAlign: 'center', margin: 10 }}>{name}</h2>
      <img src={`/images/${src}.png`} alt={name} />
    </a>
  );
}

export default Example;
