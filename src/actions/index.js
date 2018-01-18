
export const globalnavToggle = (toggle) => {
  return {
    type: 'TOGGLE_NAV',
    payload: toggle
  }
}


export const globalnavToggleSearch = (toggle) => {
  return {
    type: 'TOGGLE_SEARCH',
    payload: toggle
  }
}
