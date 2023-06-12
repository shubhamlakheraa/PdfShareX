import RenderFile from "@/components/RenderFile"
import axios from "axios"
import styles from "@/styles/Home.module.css"
import fileDownload from "js-file-download"
export async function getServerSideProps(context){

    const{id} = context.query
    let file
    try {
        const {data} = await axios.get(`http://localhost:8000/api/files/${id}`)
        file = data
    } catch (error) {
        console.log(error.response.data)
        file = {}
    }

    return {
        props: {
            file,
        }
    }
}
const DownloadPage = (props) => {

    const handledownload = async() => {
        const { data } = await axios.get(
            `http://localhost:8000/api/files/${props.file.id}/download`,
            {
                responseType: 'blob'
            }
        )
        fileDownload(data, props.file.name)
    }


    return (
        <>
        <div className={styles.downloadcontainer}>

            {!props.file.id ? (
                <span>oops! The file does not exist</span>
            ) : (
                <>
                <h1>Your file is ready to be downloaded</h1>
                <img src="./file-download.png" alt="" />
                {/* <h2>{props.file.name ? props.file.name : "Nothing"}</h2> */}
                <RenderFile file={props.file} />
                <div className={styles.downloadbutton}>
                <button onClick={handledownload}>Download</button>
                </div>
                
                </>
            )}
            
        </div>
        </>
    )
}
export default DownloadPage

