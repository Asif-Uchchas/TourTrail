import { create } from "zustand";

export interface SearchModalStore {
    isOpen: boolean
    onOpen: ()=> void
    onClose: ()=> void
}

const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSearchModal;