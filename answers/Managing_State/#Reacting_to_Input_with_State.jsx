// Reacting to Input with State
// 14.1 (no #)
import {useState} from 'react'
export default function Picture() {
  
const [checkq, setCheckq] = useState(false)
const backgroundNone = "background"
const backgroundPurple = "background--active"
  
  const handleChange = () => {
    setCheckq(!checkq)
  }
  
  return (
    <div className= 
      {"background" + checkq ? backgroundPurple : "null"} 
      onClick={handleChange}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          handleChange()
        }}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
    
  );
}



// 14.2
import {useState} from 'react'
export default function EditProfile() {
const [first, setFirst] = useState("Jane")
const [second, setSecond] = useState("Jacobs")
const [edit, setEdit] = useState(true)


  const handleChangeName = (h) => {
    setEdit(!edit)
  }
  
  
  return (
    <form onSubmit={e => {
      e.preventDefault();
        
    }}>
      <label>
        First name:{' '}
        {edit ? (
       <b>{first}</b>
        ) : (
      <input onChange={(e) => {
      setFirst(e.target.value)
        }}/>
        )}
      </label>
      <label>
        Last name:{' '}
        {edit ? (
      <b>{second}</b>
        ) : (
              <input onChange={(e) => {
        setSecond(e.target.value)
        }}/>
        )}
      </label>
      <button type="submit" onClick={(e) => {
        // e.preventDefault();
        handleChangeName(e.target.value);
      }}>
        {edit ? 'Edit name' : 'Save name'}
      </button>
      <p><i>Hello, {first} {second}!</i></p>
    </form>
  );
}


// 14.3
import {useState} from 'react'
export default function Picture() {
  
const [checkq, setCheckq] = useState(false)
const backgroundNone = "background"
const backgroundPurple = "background--active"
  
  const handleChange = () => {
    setCheckq(!checkq)
  }
  
  return (
    <div className= 
      {"background" + checkq ? backgroundPurple : "null"} 
      onClick={handleChange}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          handleChange()
        }}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
    
  );
}
