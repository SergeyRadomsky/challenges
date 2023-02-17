// Updating Arrays in State
// 13.1
const handleIncreaseClick = (productId) => {
  setProducts(
    products.map(product => {
        if (product.id === productId) { 
      return ({
        ...product,
        count: product.count + 1})
        } else return product
    }))
}


// 13.2
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

const handleMinus = (productId) => {
  setProducts(
    products.map(product => {
      if (product.id === productId && product.count > 0) {
        return ({
          ...product,
          count: product.count - 1
        })
      } else return product
    })
  )
}
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleMinus(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}




// 13.3
function handleAddTodo(title) {
  setTodos([
    ...todos,
    {
    id: nextId++,
    title: title,
    done: false
  }]);
}

function handleChangeTodo(nextTodo) {
  setTodos(
    todos.map(elem => {
      if(elem.id === nextTodo.id) {
        return ({
          ...elem,
          title: nextTodo.title
        })
      } else return elem
    })
  )

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(elem => {
        if (elem.id !== todoId) return elem
      })
    )
  }