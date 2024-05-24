import { create } from 'zustand'


const useStore = create((set) => ({
    isDebug: window.location.hash === '#debug',
    setIsDebug: (isDebug) => set(() => ({ isDebug })),
}))

export default useStore
