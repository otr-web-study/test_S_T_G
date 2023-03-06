import './CharacterAttribute.css';

const CharacterAttribute = ({value, label}) => {
  return (
    <div className='attribute'>
      <p className='attribute__text'>
        { value }
      </p>
      <p className='attribute__label'>
        { label }
      </p>
    </div>
  );
};

export default CharacterAttribute;