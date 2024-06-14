"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocketContext = void 0;
const react_1 = require("react");
const AuthContext_1 = require("./AuthContext");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const SocketContext = (0, react_1.createContext)(undefined);
const useSocketContext = () => {
    const context = (0, react_1.useContext)(SocketContext);
    if (context === undefined) {
        throw new Error("useSocketContext must be used within a SocketContextProvider");
    }
    return context;
};
exports.useSocketContext = useSocketContext;
const socketURL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";
const SocketContextProvider = ({ children }) => {
    const socketRef = (0, react_1.useRef)(null);
    const [onlineUsers, setOnlineUsers] = (0, react_1.useState)([]);
    const { authUser, isLoading } = (0, AuthContext_1.useAuthContext)();
    (0, react_1.useEffect)(() => {
        if (authUser && !isLoading) {
            const socket = (0, socket_io_client_1.default)(socketURL, {
                query: {
                    userId: authUser.id,
                },
            });
            socketRef.current = socket;
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
            return () => {
                socket.close();
                socketRef.current = null;
            };
        }
        else if (!authUser && !isLoading) {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            }
        }
    }, [authUser, isLoading]);
    return (<SocketContext.Provider value={{ socket: socketRef.current, onlineUsers }}>{children}</SocketContext.Provider>);
};
exports.default = SocketContextProvider;