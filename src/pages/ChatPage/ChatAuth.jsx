import React from 'react'
import axios from 'axios'

const ChatAuth = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('http://localhost:3000/api/chat/authenticate', {username: value} )
        .then(r => props.onAuth({ username: value, secret: value }));
      };
return (

<form onSubmit={onSubmit}>
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Enter A Username To Join The Chat</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
                            <input className="auth-input" name="username" />
						    <div className="relative">
                            <br />
							<button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </form>
);
};
  
export default ChatAuth;
