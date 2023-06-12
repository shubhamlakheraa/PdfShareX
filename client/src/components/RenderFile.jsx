import { sizeInMb } from "@/libs/fileSize"
import styles from "@/styles/Home.module.css"

const RenderFile = (props) => {
    return (
        <>
        <div className={styles.filerender} >
            { props.file.type ? (
                <img src={`./${props.file.type.split('/')[1]}.png`} alt="" width={24} height={24}/>
            ) : (
                <img src={`/${props.file.format}.png`} alt="" width={24} height={24}/>
            )}
            
            <span>{`${props.file.name}  ` } </span>
            
            <span> { sizeInMb(props.file.size ? props.file.size : props.file.sizeInBytes)}</span>

        </div>
        </>
    )
}

export default RenderFile