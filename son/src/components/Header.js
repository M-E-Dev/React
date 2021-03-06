import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

const Header = ({img}) => {
  console.log("Rendering: Header Component");
  return(
    <div className="header">
      <img src={img ? img : cw} alt="cw_logo" style={{margin:"1rem", maxHeight: "200px"}} />
    </div>
  )
}
// yukarda mem import edildiği için başına React yazmadık
export default memo(Header);

// const Header = ({img}) => {
//   console.log("Rendering: Header Component");
//   return(
//     <div className="header">
//       <img src={img ? img : cw} alt="cw_logo" style={{margin:"1rem", maxHeight: "200px"}} />
//     </div>
//   )
// }
// export default React.memo(Header);

// const Header = React.memo(({img}) => {
//   console.log("Rendering: Header Component");
//   return(
//     <div className="header">
//       <img src={img ? img : cw} alt="cw_logo" style={{margin:"1rem", maxHeight: "200px"}} />
//     </div>
//   )
// })
// export default Header;












// import React, {memo} from "react";
// import cw from "../assets/cw_logo.png";

// // const Header = React.memo(({ img }) => {
// //   console.log("Rendering: Header Comp!");
// //   return (
// //     <div className="header">
// //       <img
// //         src={img ? img : cw}
// //         alt="CW_logo"
// //         style={{ margin: "1rem", maxHeight: "200px" }}
// //       />
// //     </div>
// //   );
// // });

// // export default Header;

// // const Header = ({ img }) => {
// //   console.log("Rendering: Header Comp!");
// //   return (
// //     <div className="header">
// //       <img
// //         src={img ? img : cw}
// //         alt="CW_logo"
// //         style={{ margin: "1rem", maxHeight: "200px" }}
// //       />
// //     </div>
// //   );
// // };

// // export default React.memo(Header);

// const Header = ({ img }) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// };

// export default memo(Header);


