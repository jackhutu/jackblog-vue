import { STORAGE_KEY } from './index'
import { createLogger } from 'vuex'

const localStorageMiddleware = {
  onMutation (mutation, { todos }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]
