import { useReducer } from 'react'

const initialState = {
  count: 0,
  userName: '',
  address: {
    street: '',
    city: '',
  },
}

type State = {
  count: number
  userName: string
  address: {
    street: string
    city: string
  }
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'resetState' }
  | { type: 'updateUserName'; name: string }
  | {
      type: 'updateAddress'
      data: {
        street: string
        city: string
      }
    }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'resetState':
      return initialState
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'updateUserName':
      return {
        ...state,
        userName: action.name,
      }
    case 'updateAddress':
      return {
        ...state,
        address: action.data,
      }
    default:
      return state
  }
}

export default function UseReducerHook() {
  const [{ count, userName }, dispatch] = useReducer(reducer, initialState)

  function updateAddress() {
    dispatch({
      type: 'updateAddress',
      data: {
        street: 'Rua 1',
        city: 'São Paulo',
      },
    })
  }

  return (
    <>
      <h1>Use Reducer</h1>
      <p>
        The counter is: <span>{count}</span>
      </p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'resetState' })}>Reset</button>
      <input
        type="text"
        value={userName}
        onChange={(ev) => {
          dispatch({ type: 'updateUserName', name: ev.target.value })
        }}
      />
    </>
  )
}
