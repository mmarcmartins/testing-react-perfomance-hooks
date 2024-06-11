import { create } from 'zustand'

export const useStore = create((set) => ({
  countries: [],
  setCountries: (countries) => set(() => ({ countries })),
  waitTime: 300,  
}))