import { create } from 'zustand'

type Id = string;
type Address = string;
type ActionType = "RINGS" | "PREMIUM" | "MISC";
type RewardType = "OPEN_LINK" | "JOIN_COMMUNITY" | "JOIN_SQUAD";
type Status = "AVAILABLE" | "RUNNING" | "COMPLETED" | "FAILED";

interface Displayable {
    title?: string,
    subtitle?: string,
    description?: string,
    image?: string,
}

type BoardData = {
    [key: string]: any
}

export type Board = {
    id: Id,
    address: Address
    boardData: BoardData 
};

type Reward = {
    type: RewardType,
    details?: string,
    amount: number
    // ...
};


export interface QuestSection extends Displayable {
    id: Id,
    quests: Array<Quest['id']>
    // ...
};

export interface Quest extends Displayable {
    id: Id,
    section: QuestSection['id'],

    reward: Array<Reward>,
    questSteps: Array<QuestStep['id']>
    // ...
};

export interface QuestStep extends Displayable {
    id: Id,

    partial?: string,
    actions: Array<QuestStepAction>
}

export type QuestStepAction = {
    type: string,
    action: ActionType
    // ...
};

export interface User {
    id: Id,
    mooliId?: Id,

    rings: number,
    quests: Array<UserQuest>,
    boards: Array<Board>,
    followedBoards: Array<Board>,
    refferals: Array<User['id']>
}

type UserQuest = {
    id: Quest['id'],
    status: Status,
    steps: Array<UserQuestStep>
}
type UserQuestStep = {
    id: Id,
    status: Status
}

export interface Squad extends Displayable {
    id: Id,

    participants: Array<User['id']>
}








type State = {
    squad: Id,
    rings: number,
    isInfluencer: boolean,
    followers: Array<Id>,
    boards: Array<Board>,
    followedBoards: Array<Board>
}

interface Action {
    followBoard: (board: State['followedBoards']) => void
    // unfollowBoard: (board: State['followedBoards']) => void
    // followBoard: (board: State['followedBoards']) => void
    // unfollowBoard: (board: State['followedBoards']) => void
  }

// export const useStore = create<State & Action>((set) => ({
//     boards: [],
//     followedBoards: [],
//     followBoard: (board: object) => set((state) => [...state.followedBoards, board]),
//     // unfollowBoard: (board: object) => set((state) => state.followedBoards),
    
//     // removeAllBears: () => set({ bears: 0 }),
//     // updateBears: (newBears) => set({ bears: newBears }),
// }))