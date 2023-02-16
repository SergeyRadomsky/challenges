// Queueing a Series of State Updates
// 11.1
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


// 11.2 (NO)
export function getFinalState(baseState, queue) {
  let finalState = baseState;
  
  for (let i = 0; i < queue.length; i++) {
    if (typeof(queue[i]) === "function") {
      // baseState
      finalState = queue[i](baseState)
      i++
      finalState = i
      // ++finalState
      // return finalState
      // i++
    }
    finalState = queue[i]
    // console.log(finalState)
    // finalState = perem
    // return finalState
  }
console.log(finalState)
  return finalState;
}

