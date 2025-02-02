import { stat } from "fs";
import {create} from "zustand";

interface addBookmarkModal {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const useAddBookmarkModal = create<addBookmarkModal>((set) => ({
    isOpen: false,
    setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));