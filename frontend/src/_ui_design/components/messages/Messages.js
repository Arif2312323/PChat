"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dummy_1 = require("../../dummy_data/dummy");
const Message_1 = __importDefault(require("./Message"));
const Messages = () => {
    return (<div className='px-4 flex-1 overflow-auto'>
			{dummy_1.DUMMY_MESSAGES.map((message) => (<Message_1.default key={message.id} message={message}/>))}
		</div>);
};
exports.default = Messages;
