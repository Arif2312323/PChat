"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const useConversation_1 = __importDefault(require("../../zustand/useConversation"));
const useGetConversations_1 = __importDefault(require("../../hooks/useGetConversations"));
const SearchInput = () => {
    const [search, setSearch] = (0, react_1.useState)("");
    const { setSelectedConversation } = (0, useConversation_1.default)();
    const { conversations } = (0, useGetConversations_1.default)();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search)
            return;
        if (search.length < 3) {
            return react_hot_toast_1.default.error("Search term must be at least 3 characters long");
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        }
        else
            react_hot_toast_1.default.error("No such user found!");
    };
    return (<form className='flex items-center gap-2' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='input-sm md:input input-bordered rounded-full sm:rounded-full w-full' value={search} onChange={(e) => setSearch(e.target.value)}/>
			<button type='submit' className='btn md:btn-md btn-sm btn-circle bg-sky-500 text-white  '>
				<lucide_react_1.Search className='w-4 h-4 md:w-6 md:h-6 outline-none'/>
			</button>
		</form>);
};
exports.default = SearchInput;
