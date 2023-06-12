import styles from "@/styles/Home.module.css"

const DownloadFile = (props) => {
    return (
        <>
        <div>
            <h1>
                You can now share the link
            </h1>
            <div className={styles.uploadcontainer}>
                <span>{ props.downloadPageLink  }</span>
                <img src="./copy.png" alt="" className={styles.copyimg}
                onClick={() => navigator.clipboard.writeText(props.downloadPageLink)}
                />
            </div>
        </div>
        </>
    )
}
export default DownloadFile