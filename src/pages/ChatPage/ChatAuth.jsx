import React from 'react'
import axios from 'axios'

const ChatAuth = (props) => {
    const user = props
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('https://planout.herokuapp.com/api/chat/authenticate', {username: value} )
        .then(res => props.onAuth({ username: value, secret: value }));
      };
return (

<form onSubmit={onSubmit}>
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
                            <input className="hidden auth-input p-1 h-12 px-4 text-lg" name="username" defaultValue={user.user.name} readOnly/>
						    <div className="relative">
                            <br />
							<button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Enter the Chatroom</button>
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
