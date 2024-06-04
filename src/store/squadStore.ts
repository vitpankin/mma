import { StateCreator } from 'zustand'

import { Squad } from '../models/interfaces'
import { CombinedSlice } from './store'

export interface SquadSlice {
  squads: Array<Squad>

  // addUser: (user: User) => void
}

export const createSquadSlice: StateCreator<CombinedSlice, [], [], SquadSlice> = (set) => ({
  squads: [],
  // questSections: [],
  // addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
})