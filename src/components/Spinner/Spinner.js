import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
      <div className='lds-cover'></div>
    </div>
  );
};

export default Spinner;