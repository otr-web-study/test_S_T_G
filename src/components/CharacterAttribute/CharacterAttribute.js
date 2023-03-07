import './CharacterAttribute.css';

const CharacterAttribute = ({value, label, detail = false}) => {
  return (
    <div className={`attribute ${detail ? 'attribute_type_detail' : ''}`}>
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