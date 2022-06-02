import create from "zustand"

const useStore = create((set) => ({
	addUser: (user) => set((state) => ({users: [...state.people, user]})),
	users: ['John Doe', 'Jane Doe'],
}))

export default useStore
