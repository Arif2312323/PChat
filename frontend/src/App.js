"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const SignUp_1 = __importDefault(require("./pages/SignUp"));
const Login_1 = __importDefault(require("./pages/Login"));
const AuthContext_1 = require("./context/AuthContext");
const react_hot_toast_1 = require("react-hot-toast");
function App() {
    const { authUser, isLoading } = (0, AuthContext_1.useAuthContext)();
    if (isLoading)
        return null;
    return (<div className='p-4 h-screen flex items-center justify-center'>
			<react_router_dom_1.Routes>
				<react_router_dom_1.Route path='/' element={authUser ? <Home_1.default /> : <react_router_dom_1.Navigate to={"/login"}/>}/>
				<react_router_dom_1.Route path='/signup' element={!authUser ? <SignUp_1.default /> : <react_router_dom_1.Navigate to={"/"}/>}/>
				<react_router_dom_1.Route path='/login' element={!authUser ? <Login_1.default /> : <react_router_dom_1.Navigate to={"/"}/>}/>
			</react_router_dom_1.Routes>
			<react_hot_toast_1.Toaster />
		</div>);
}
exports.default = App;
