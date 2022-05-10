import React from 'react';

const UserItem = ({ student, add }) => {
  console.log("Rendering: User Item Comp!");
  return(
    <div className='useritem' onClick={()=> add(student)}>
      <img src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
      alt="random-avatar" />
      {student?.name}
    </div>
  )
}
export default UserItem;







// import React from 'react';


// const UserItem = ({ user, add }) => {
//   console.log("Rendering: User Item Comp!");
//   return (
//     <div className="useritem" onClick={() => null}>
//       <img
//         src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
//         alt="random-avatar"
//       />
//       {user?.name}
//     </div>
//   );
// };

// export default UserItem;
