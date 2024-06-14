"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_tsx_1 = require("./context/AuthContext.tsx");
const SocketContext_tsx_1 = __importDefault(require("./context/SocketContext.tsx"));
client_1.default.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
<react_router_dom_1.BrowserRouter>
		<AuthContext_tsx_1.AuthContextProvider>
			<SocketContext_tsx_1.default>
				<App_tsx_1.default />
			</SocketContext_tsx_1.default>
		</AuthContext_tsx_1.AuthContextProvider>
	</react_router_dom_1.BrowserRouter>
// </React.StrictMode>
);
