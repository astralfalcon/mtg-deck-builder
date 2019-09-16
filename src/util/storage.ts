import AsyncStorage from '@react-native-community/async-storage'

export const get = (key: string) => {
  try {
    return AsyncStorage.getItem(key)
  } catch (err) {
    console.log('error fetching async data', err)
    return undefined
  }
}

export const set = (key: string, val: string) => {
  try {
    return AsyncStorage.setItem(key, val)
  } catch (err) {
    console.log('error saving async data', err)
    return undefined
  }
}
