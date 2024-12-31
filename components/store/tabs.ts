import { create } from 'zustand';

interface TabStore {
  currentTab: string; 
  setTab: (tab: string) => void; 
}

const useTabStore = create<TabStore>((set) => ({
  currentTab: 'blogs', 
  setTab: (tab: string) => set({ currentTab: tab }),
}));

export default useTabStore;
