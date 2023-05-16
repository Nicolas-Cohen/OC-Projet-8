import './TagsAccomodationStyle.css'


function TagsAccomodation({ tags }) {
  
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p className="tag" key={index}>{tag.trim()} </p> // Afficher chaque tag dans un élément de paragraphe avec une clé unique
      ))}
    </div>
  );
}

export default TagsAccomodation;

