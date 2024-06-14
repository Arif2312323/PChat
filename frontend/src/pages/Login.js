"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useLogin_1 = __importDefault(require("../hooks/useLogin"));
const Login = () => {
    const [inputs, setInputs] = (0, react_1.useState)({
        username: "",
        password: "",
    });
    const { loading, login } = (0, useLogin_1.default)();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        login(inputs.username, inputs.password);
    };
    return (<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmitForm}>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { username: e.target.value }))}/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { password: e.target.value }))}/>
					</div>
					<react_router_dom_1.Link to='/signup' className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</react_router_dom_1.Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? "Loading..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>);
};
exports.default = Login;