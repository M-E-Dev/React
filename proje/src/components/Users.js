import React from 'react'
import UserItem from './UserItem'

const Users = ({students, add}) => {
  console.log('Rendering: Users Comp!')
  return(
    <div className="users">
        {students?.map((student) => {
            return <UserItem key={student.id} student={student} add={add} />
        })}
    </div>
      ) 
}

export default Users;







// import React, {memo} from 'react';
// import UserItem from './UserItem';


// const Users = ({users, add}) => {
//     console.log("Rendering: Users Comp!");
//     return (
//         <div className="users">
//             <button id="add-button" onClick={() => add()}>Add User</button>
//             {users?.map(user => {
//                 return <UserItem key={user.id} user={user} add={null} />
//             })}
//         </div>
//     )
// }

// export default memo(Users);

