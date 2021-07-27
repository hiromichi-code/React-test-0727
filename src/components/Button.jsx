export const Button = ({ button, change }) => {
  return (
    <div>
      <button onClick={change}>{button}</button>
    </div>
  );
};
