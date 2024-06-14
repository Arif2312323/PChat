"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_1 = require("../../dummy_data/dummy");
const Conversation_1 = __importDefault(require("./Conversation"));
const Conversations = () => {
    return (<div className='py-2 flex flex-col overflow-auto'>
			{dummy_1.DUMMY_CONVERSATIONS.map((conversation) => (<Conversation_1.default key={conversation.id} conversation={conversation}/>))}
		</div>);
};
exports.default = Conversations;
