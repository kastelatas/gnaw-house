import types from '../types'

export const openModal = () => ({
  type: types.modals.OPEN_MODAL
})

export const closeModal = () => ({
  type: types.modals.CLOSE_MODAL,
})
