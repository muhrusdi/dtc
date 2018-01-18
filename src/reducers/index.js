import { combineReducers } from 'redux'

const globalnavState = {
  toggle: false,
  toggleSearch: false
}

const globalnav = (state = globalnavState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV': {
      return { ...state, toggle: action.payload }
    }
    case 'TOGGLE_SEARCH': {
      return { ...state, toggleSearch: action.payload }
    }
    default:
      return state
  }
}

export default combineReducers({
  globalnav
})
