import types from '../types'

const initialState = {
  modalOpen: false,
  loadingOpen: false,
}

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.modals.OPEN_MODAL:
      return { ...state, modalOpen: true}
    case types.modals.CLOSE_MODAL:
      return { ...state, modalOpen: false }

    default:
      return { ...state }
  }
}

export default modalsReducer
