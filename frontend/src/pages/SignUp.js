"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const GenderCheckbox_1 = __importDefault(require("../components/GenderCheckbox"));
const react_1 = require("react");
const useSignup_1 = __importDefault(require("../hooks/useSignup"));
const SignUp = () => {
    const [inputs, setInputs] = (0, react_1.useState)({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const { loading, signup } = (0, useSignup_1.default)();
    const handleCheckboxChange = (gender) => {
        setInputs(Object.assign(Object.assign({}, inputs), { gender }));
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        signup(inputs);
    };
    return (<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmitForm}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' value={inputs.fullName} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { fullName: e.target.value }))}/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { username: e.target.value }))}/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { password: e.target.value }))}/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e) => setInputs(Object.assign(Object.assign({}, inputs), { confirmPassword: e.target.value }))}/>
					</div>

					<GenderCheckbox_1.default selectedGender={inputs.gender} onCheckboxChange={handleCheckboxChange}/>

					<react_router_dom_1.Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'>
						Already have an account?
					</react_router_dom_1.Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? "Loading..." : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>);
};
exports.default = SignUp;
