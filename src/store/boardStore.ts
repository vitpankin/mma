import { StateCreator } from 'zustand'

import { Board } from '../models/interfaces'
import { CombinedSlice } from './store'

export interface BoardSlice {
  boards: Array<Board>
  // addUser: (user: User) => void
}

export const createBoardSlice: StateCreator<CombinedSlice, [], [], BoardSlice> = (set) => ({
  boards: [],
  // questSections: [],
  // addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
})