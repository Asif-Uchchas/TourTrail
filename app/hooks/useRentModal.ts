import { create } from "zustand";

export interface RentModalStore {
    isOpen: boolean
    onOpen: ()=> void
    onClose: ()=> void
}

const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useRentModal;