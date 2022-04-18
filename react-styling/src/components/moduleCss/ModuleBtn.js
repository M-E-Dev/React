import styles from './moduleBtn.module.css'

// const ModuleBtn = (props) => {
//     return(
//         <div className={styles.main}>
//             <button className={styles[props.btnClass]}>{props.btnName}</button>
//         </div>
//     )
// }

const ModuleBtn = ({btnClass, btnName}) => {
    return(
        <div className={styles.main}>
            <button className={styles[btnClass]}>{btnName}</button>
        </div>
    )
}

export default ModuleBtn;