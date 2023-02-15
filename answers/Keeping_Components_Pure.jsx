// Keeping Components Pure
// 7.1
//  NO

// 7.2
import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile(props) {
  return (
    <Panel>
      <Header person={props.person} />
      <Avatar person={props.person} />
    </Panel>
  )
}

function Header(props) {
  return <h1>{props.person.name}</h1>;
}

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={50}
      height={50}
    />
  );
}


// 7.3
export default function StoryTray({ stories }) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
      <li>Create Story</li>
    </ul>
  );
}
