// Conditional Rendering

// 5.1
function Item({ name, isPacked }) {
  return (
    <li className="item">
       {isPacked ? name + '✔' : name}
    </li>
  );
}

// 5.2
function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {(importance > 0) && <span style={{fontStyle: "italic"}}>
        (Importance <b>{importance}</b>)</span>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

// 5.3
function Drink({ name }) {
  let part 
  let caffe
  let old
  if (name === "tea") {
    part ='leaf'
    caffe = '15–70 mg/cup'
    old = '4,000+ years'
  } else {
    part = 'bean'
    caffe = '80–185 mg/cup'
    old = '1,000+ years'
  }

  
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffe}</dd>
        <dt>Age</dt>
        <dd>{old}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}