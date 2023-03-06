import './CharacterTags.css';

const CharacterTags = ({ tags }) => {
  const content = tags.map(([tag, color]) => (
    <span 
      key={tag}
      className={`tags__tag tags__tag_color_${color}`}>
        {tag}
    </span>
  ))

  return (
    <div className='tags'>
      {content}
    </div>
  );
};

export default CharacterTags;