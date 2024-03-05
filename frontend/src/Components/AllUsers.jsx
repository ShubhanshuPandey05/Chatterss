import React from 'react'
import Users from './Users';
import useConversation from '../Hooks/useConversation';

export default function AllUsers({ hidden }) {
    const { loading, User } = useConversation();
    return (

        <div className={`m-4 overflow-y-auto h-[80%] custom-scrollbar ${hidden ?  "hidden" : ""}`}>
            {loading ?? <div className="flex items-center justify-center w-full h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
            </div>}
            {User.map((user, Idx) => (
                <Users key={user._id} conversation={user}
                    lastIdx={Idx === User.length - 1} />
            ))}
        </div>
    )
}
