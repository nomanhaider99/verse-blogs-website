import { create } from "zustand";

interface OnBoardingStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOnBoarding = create<OnBoardingStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useOnBoarding;