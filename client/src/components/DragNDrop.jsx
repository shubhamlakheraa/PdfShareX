import {useDropzone} from "react-dropzone";
import { useCallback } from "react"
import styles from "@/styles/Home.module.css"


// let session

// async function mydata(){
//   session = await getSession()

// }

const DragNDrop = (props) => {

  // const {data : session} = useSession()
  // mydata()

  const onDrop = useCallback((acceptedFiles) => {
    
    // acceptedFiles[0].user_id = session?.user.id
  
    console.log(acceptedFiles[0])
    props.setFile(acceptedFiles[0])
  },[])

  // const onDrop = useCallback((acceptedFiles) => {
  //   const modifiedFile = {
  //     ...acceptedFiles[0],
  //     user_id: session?.user.id,
  //   };
  //   console.log(modifiedFile);
  //   props.setFile(modifiedFile);
  // }, [])

  // const onDrop = useCallback((acceptedFiles) => {
  //   const modifiedFile = acceptedFiles[0]
    
  //   modifiedFile.user_id = session?.user.id;
  //   console.log(modifiedFile);
  //   props.setFile(modifiedFile);
  // }, []);


    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject
      } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
          'application/pdf': [],
          
        }
      });
    
      // const acceptedFileItems = acceptedFiles.map(file => (
      //   <li key={file.path}>
      //     {file.path} - {file.size} bytes
      //   </li>
      // ));
    
      // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      //   <li key={file.path}>
      //     {file.path} - {file.size} bytes
      //     <ul>
      //       {errors.map(e => (
      //         <li key={e.code}>{e.message}</li>
      //       ))}
      //     </ul>
        // </li>
      // ));
    

    return (
        <>
        
      <div {...getRootProps({ className: 'dropzone' })} className={`${styles.dropcontainer} ${isDragReject ? styles.reject : ""}`}>
        <input {...getInputProps()} />
       
        {/* <em>(Only pdfs will be accepted)</em> */}
        <div>
        <img src="/download.png" className={styles.docimage} />
        </div>
        
        
      </div>
      {/* <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside> */}
      
      {
        isDragReject ? (
          <p>Sorry only support pdf files.</p>
        ) :
        (
          <p>Drag and drop  file here or click to select files</p>
        )
      }


    
        </>
    )
}

export default DragNDrop
DragNDrop.auth = true