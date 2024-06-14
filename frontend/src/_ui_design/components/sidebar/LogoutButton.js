"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const LogoutButton = () => {
    const logout = () => {
        alert("You are logged out");
    };
    return (<div className='mt-auto'>
			<lucide_react_1.LogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
		</div>);
};
exports.default = LogoutButton;
