import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { IconArrowBarDown } from '@tabler/icons-react'

const FileDropZone = ({ id, state, setState }) => {
    const [dragging, setDragging] = useState(false);
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragging(true);
    };
  
    const handleDragLeave = () => {
      setDragging(false);
    };
  
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
    
        const files = Array.from(e.dataTransfer.files);

        const tmp = [...state];
        const extensions = ['.jpg', '.jpeg', '.png', '.svg'];

        var band = false;

        files.map(f => {
          const lastIndex = f.name.lastIndexOf('.');
          const ext = f.name.substring(lastIndex);
                
          if(extensions.includes(ext)) tmp.push(f);
          else{
            if(!band){
              Swal.fire({
                title: "Archivos no permitidos",
                html: "<b>Solo se pueden subir imagenes con formato valido:</b> <ul><li>.jpg</li><li>.jpeg</li><li>.png</li><svg</li></ul>",
                icon: "warning",
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#4D7C0F'
              });
              band = true;
            }
          }
        });

        setState(tmp);
    };

    const handleFileSelect = (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);

        const tmp = [...state];
        files.map(f => tmp.push(f));
        
        setState(tmp);
    }
  
    return (
      <div className='flex flex-col justify-center' style={{
        width: '100%'
      }}>
        <label
            className={`file-drop-zone ${dragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            htmlFor={id}
            style={{
              width: '100%', cursor: 'pointer'
            }}
        >
            <p className=' bg-lime-700 flex gap-3 justify-center border p-3 m-5 py-10 hover:bg-lime-600' >Arrastra y suelta archivos aquí <IconArrowBarDown /></p>
        </label>
        <input id={id} type='file' accept='.jpg, .jpeg, .png, .svg' multiple style={{ display: 'none' }} onChange={handleFileSelect}/>
        
      </div>
    );
  };
  
export default FileDropZone;