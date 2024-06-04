import { StateCreator } from 'zustand'

import { Quest, QuestSection } from '../models/interfaces'
import { CombinedSlice } from './store'

export interface QuestSlice {
  quests: Array<Quest>
  questSections: Array<QuestSection>
  // addUser: (user: User) => void
}

export const createQuestSlice: StateCreator<CombinedSlice, [], [], QuestSlice> = (set) => ({
  quests: [],
  questSections: [],
  // addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
})