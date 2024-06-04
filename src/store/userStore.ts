import { StateCreator } from 'zustand'

import { User } from '../models/interfaces'
import { CombinedSlice } from './store'

export interface UserSlice {
    user: User | undefined
    users: Array<User>
    // addUser: (user: User) => void
  }

export const createUserSlice: StateCreator<CombinedSlice, [], [], UserSlice> = (set) => ({
    user: undefined,
    users: [],
    // addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
})