import './index.css';

export default (props) => {
  const { color = '#4c93ff' } = props;
  return (
    <div className="lds-ellipsis">
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
    </div>
  );
};
