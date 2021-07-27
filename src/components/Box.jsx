export const Box = ({ box, name }) => {
  return (
    <div className="box">
      <img src={box} width="160px" alt=""></img>
      <p>{name}</p>
    </div>
  );
};
