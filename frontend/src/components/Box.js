import './Box.css'; 

const Box = (props) => {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
};

export default Box;