// Rendering Lists
// 6.2
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {

  const chemists = people.filter(person => person.profession === 'chemist')

  const chemistListItem = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );



  const NOchemists = people.filter(person => person.profession !== 'chemist')

  const NOchemistListItem = NOchemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );


  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists chemists</h1>
      <ul>{chemistListItem}</ul>
      <h1>Others</h1>
      <ul>{NOchemistListItem}</ul>
    </article>
  );
}





// 6.2
import { recipes } from './data.js';

const List = recipes.map(recipe =>
  <>
    <h1 key={recipe.id}>{recipe.name}</h1>
    <ul>{
      recipe.ingredients.map(item => <li key={item.id}>{item}</li>)
    }
    </ul>
  </>
)


export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <div>{List}</div>
    </div>
  );
}




// 6.3
import { recipes } from './data.js';

const Recipe = (props) => {
  return (
    <div>
      <div key={props.id}>
        <h2>{props.name}</h2>

        <ul key={props.ingredients}>
          {props.ingredients}
        </ul>
        <br></br>
      </div>
    </div>
  )
}


export default function RecipeList() {
  return (
    <>
      <h1>Recipes</h1>
      {recipes.map((elem) => {
        return (
          <Recipe
            name={elem.name}
            key={elem.id}
            ingredients={elem.ingredients.map(el =>
              <li key={el.id}>
                {el}
              </li>
            )}
          />
        )
      })}
    </>
  );
}


// 6.4
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
    'A poppy blooms.',
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
      (poem.lines[index+1]) ? (
      <>
        <p key={index}>
          {line}
        </p>
        <hr/>
      </>) : (
          <p key={index}>{line}</p>)
      )}
    </article>
  );
}