import './Fireflies.css';

const Fireflies = () => {
 const ballsCount = 15;
  const arrBalls = [];
  for (let i = 0; i < ballsCount; i++) {
    arrBalls.push(i);
  }

  return (
    <div className="fireflies">
      {arrBalls.map((el) => (
        <span key={el} className={`fireball fireball--${el}`}></span>
      ))}
    </div>
  );
};

export default Fireflies;
