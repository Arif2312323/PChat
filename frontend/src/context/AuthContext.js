"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthContextProvider = exports.useAuthContext = void 0;
const react_1 = require("react");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const AuthContext = (0, react_1.createContext)({
    authUser: null,
    setAuthUser: () => { },
    isLoading: true,
});
// eslint-disable-next-line react-refresh/only-export-components
const useAuthContext = () => {
    return (0, react_1.useContext)(AuthContext);
};
exports.useAuthContext = useAuthContext;
const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    // logic will go here
    (0, react_1.useEffect)(() => {
        const fetchAuthUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const res = yield fetch("/api/auth/me");
                const data = yield res.json();
                if (!res.ok) {
                    throw new Error(data.error);
                }
                setAuthUser(data);
            }
            catch (error) {
                console.error(error);
                react_hot_toast_1.default.error(error.message);
            }
            finally {
                setIsLoading(false);
            }
        });
        fetchAuthUser();
    }, []);
    return (<AuthContext.Provider value={{
            authUser,
            isLoading,
            setAuthUser,
        }}>
			{children}
		</AuthContext.Provider>);
};
exports.AuthContextProvider = AuthContextProvider;
