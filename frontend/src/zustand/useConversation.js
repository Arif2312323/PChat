"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = require("zustand");
const useConversation = (0, zustand_1.create)((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages: messages }),
}));
exports.default = useConversation;
// JS VERSION
// import { create } from "zustand";
// const useConversation = create((set) => ({
// 	selectedConversation: null,
// 	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
// 	messages: [],
// 	setMessages: (messages) => set({ messages }),
// }));
// export default useConversation;
