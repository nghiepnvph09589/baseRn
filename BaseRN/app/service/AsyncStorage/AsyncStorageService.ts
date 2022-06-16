import AsyncStorage from '@react-native-community/async-storage'
import reactotron from 'reactotron-react-native'

class AsyncStoreService {
  private TOKEN_KEY = 'token'
  private ROLE_KEY = 'role'

  async putToken(token: string) {
    try {
      await AsyncStorage.setItem(this.TOKEN_KEY, token)
    } catch (e) {
      __DEV__ && reactotron.log!(e)
    }
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem(this.TOKEN_KEY)
    } catch (e) {
      __DEV__ && reactotron.log!(e)
    }
  }

  /**
   * Saves a string to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async saveString(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch {
      return false
    }
  }

  /**
   * Saves an object to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async save(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  }

  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch {}
  }

  /**
   * Burn it all to the ground.
   */
  async clear() {
    try {
      await AsyncStorage.clear()
    } catch {
      return null
    }
  }
}

export default new AsyncStoreService()
