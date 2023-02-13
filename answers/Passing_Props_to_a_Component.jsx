// 5.1
import { getImageUrl } from './utils.js';

const Mary = {
  name: "Maria Skłodowska-Curie",
  profession: "physicist and chemist",
  img: {
    classname: "avatar",
    src: 'szV5sdG',
    alt: "Maria Skłodowska-Curie",
    width: 70,
  },
  counterAwards: "4",
  AwardsText: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Meda)l",
  Discovered: "polonium (element)",
}


const Katusho = {
  name: "Katsuko Saruhashi",
  profession: "geochemist",
  img: {
    classname: "avatar",
    src: 'YfeOqp2',
    alt: "Katsuko Saruhashi",
    width: 70,
  },
  counterAwards: "2",
  AwardsText: "(Miyake Prize for geochemistry, Tanaka Prize)",
  Discovered: "a method for measuring carbon dioxide in seawater",
}

const Section = (props) => {
  return (
    <section className="profile">
      <h2>{props.Name.name}</h2>
      <img
        className="avatar"
        src={props.getImageUrl(props.Name.img.src)}
        alt={props.Name.img.alt}
        width={props.Name.img.width}
        height={props.Name.img.width}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.Name.profession}
        </li>
        <li>
          <b>Awards: {props.Name.counterAwards}</b>
          {props.Name.AwardsText}
        </li>
        <li>
          <b>Discovered: </b>
          {props.Name.Discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Section
        Name={Mary}
        img={Mary.img}
        getImageUrl={getImageUrl}
      />
      <Section
        Name={Katusho}
        img={Katusho.img}
        getImageUrl={getImageUrl}
      />
    </div>
  );
}

// 5.2
import { getImageUrl } from './utils.js';

function Avatar(props) {
  const checkSize = () => {
    if (props.size < 90) return "s"
    else return ("b")
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(props.person, checkSize())}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={90}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
  );
}

//5.3
export default function Profile() {



  const Card0 = ({ children }) => {
    return (
      <div className="card">
        <div className="card-content">
          {children}
        </div>
      </div>
    )
  }

  const Card1 = () => {
    return (
      <>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </>
    )
  }

  const Card2 = () => {
    return (
      <>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </>
    )
  }
  return (
    <>
      <Card0>
        <Card1 />
      </Card0>
      <Card0>
        <Card2 />
      </Card0>
    </>
  );
}