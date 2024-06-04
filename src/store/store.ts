import { create } from 'zustand'
import { createUserSlice, UserSlice } from './userStore'
import { createQuestSlice, QuestSlice } from './questStore'
import { createSquadSlice, SquadSlice } from './squadStore'
import { createBoardSlice, BoardSlice } from './boardStore'

export { type UserSlice, type QuestSlice, type SquadSlice, type BoardSlice }

export interface CombinedSlice extends UserSlice, QuestSlice, SquadSlice, BoardSlice {}

export const useBoundStore = create<CombinedSlice>()((...a) => ({
  ...createUserSlice(...a),
  ...createQuestSlice(...a),
  ...createSquadSlice(...a),
  ...createBoardSlice(...a),
}))

export default useBoundStore