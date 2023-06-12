import { useState, useEffect } from "react"
import styles from "@/styles/Home.module.css"
import DragNDrop from "@/components/DragNDrop"
import RenderFile from "@/components/RenderFile"
import axios from "axios"
import DownloadFile from "@/components/DownloadFile"
import nextConfig from "../../next.config"
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function HomePage(){
    const [file, setFile] = useState(null)
    const [id, setId] = useState(null)
    const [downloadPageLink, setDownloadPageLink] = useState(null)
    const [uploadState, setUploadState] = useState("Upload")

    console.log(file)
    const handleUpload = async () => {
        if (uploadState=="Uploading") return
        setUploadState("Uploading")
        const formData = new FormData()
        formData.append('myFile', file)
        try {
            const {data} = await axios({
                method: 'post',
                data: formData,
                url: '/api/files/upload',
                headers:{
                    "Content-Type": 'multipart/form-data',
                }
            })
            setDownloadPageLink(data.downloadPageLink)
            setId(data.id)
        } catch (error) {
            console.log(error.response.data)
            setUploadState("Upload Failed")
        }
    }
    const resetFile = () => {
        setFile(null)
        setDownloadPageLink(null)

    }
    
    return (
        <>
        <div className={styles.dropzone}>
            {/* <h1>
                Welcome
            </h1> */}
            <div className={styles.dropcont}>
            { !downloadPageLink && <DragNDrop setFile={setFile} />}
            </div>
            
            {file && <RenderFile file={file} /> }
            <div>
            {!downloadPageLink && file && <button onClick={handleUpload}>{uploadState}</button>}
            </div>
            
            

            { downloadPageLink && (
                <div> 
            <DownloadFile downloadPageLink={downloadPageLink} /> 
            <button onClick={resetFile}>Upload New File</button>
            </div>
        )}
        </div>
        </>
    )
}