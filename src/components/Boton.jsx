const Boton = () => {
  const botones = ['Button 1', 'Button 2'];

    return (
    <div>
    {botones.map((boton, index) => (
    <button key={index}>{boton}</button>
    ))}
    </div>
    );
    };

export default Boton;