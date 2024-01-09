import React, { useState } from 'react'
import { IconX, IconTrashX, IconFileTypePng, IconFileTypeSvg, IconFileTypeJpg, IconFileUnknown } from '@tabler/icons-react'

const FilesViewer = ({ state, setState }) => {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const convertBytes = (bytes) => {
        if(bytes > 1024)
            return (bytes/1024).toFixed(2).endsWith('.00') ? parseInt((bytes/1024).toFixed(2)) + ' KB' : (bytes/1024).toFixed(2)  + ' KB';
        else if(bytes > 1048576)
            return (bytes/1048576).toFixed(2).endsWith('.00') ? parseInt((bytes/1048576).toFixed(2)) + ' MB' : (bytes/1048576).toFixed(2)  + ' MB';
        else if(bytes > 1073741824)
            return (bytes/1073741824).toFixed(2).endsWith('.00') ? parseInt((bytes/1073741824).toFixed(2)) + ' GB' : (bytes/1073741824).toFixed(2)  + ' GB'
        else
            return (bytes).toFixed(2).endsWith('.00') ? parseInt((bytes).toFixed(2)) + ' Bytes' : (bytes).toFixed(2)  + ' Bytes'
    }

    const handleDelete = (e, index, setState) => {
        e.preventDefault();

        const tmp = [...state];
        tmp.splice(index, 1);
        setState(tmp);
    }

    const handleDeleteAll = (e) => {
        e.preventDefault();

        setState([]);
    }

    const renderFileType = (file) => {
        const { type } = file;

        switch (type) {
            case "image/jpeg": return <IconFileTypeJpg/>;
            case "image/png": return <IconFileTypePng/>;
            case "image/svg+xml": return <IconFileTypeSvg/>;
            default: return <IconFileUnknown/>;
        }
    }

    const setImgSrcFromFile = (f) => {
        const url = URL.createObjectURL(f);

        console.log(url);
        setImgSrc(url);
    }

    const changeModalActive = (bool) => {
        document.body.style.overflow = bool ? 'hidden' : '';
        setModalActive(bool);
    }

    return (
        <div>
            {
                state.map((f, index) => (
                    <div 
                    key={'div-files-viewer-'+index} 
                    className='flex m-2 px-5'>
                        <div className='w-12 flex items-center'>{renderFileType(f)}</div>
                        <p 
                        className='w-2/3 flex content-center items-center text-start hover:text-lime-400 hover:cursor-pointer'
                        title='Haz click para vizualizar la imagen' 
                        onClick={() => { changeModalActive(!modalActive); setImgSrcFromFile(f) }}>
                            {f.name} | {convertBytes(f.size)}
                        </p>
                        <div className='w-1/3 flex justify-end items-center'>
                            <button 
                            className='border p-1 text-red-600 w-fit h-fit hover:bg-red-700 hover:text-white'
                            onClick={(event, index) => { handleDelete(event, index, setState) }}><IconX /></button>
                        </div>
                    </div>
                ))
            }

            {
                state.length === 0
                ? <></>
                : <button className='border p-2 flex gap-2 m-auto my-3 text-red-600 hover:bg-red-700 hover:text-white' onClick={handleDeleteAll}>Borrar todo <IconTrashX /></button>
            }

            {
                modalActive
                    ? <div className='div-modal-img'>
                        <div className='div-modal-img-w100-h15' onClick={() => changeModalActive(false)} title='Haz click aqui para cerrar'></div>
                        <div className='div-modal-img-w15-h70' onClick={() => changeModalActive(false)} title='Haz click aqui para cerrar'></div>


                        <div className='div-modal-img-main'>
                            <img src={imgSrc} alt='Previzualizacion de imagen'/>
                        </div>


                        <div className='div-modal-img-w15-h70' onClick={() => changeModalActive(false)} title='Haz click aqui para cerrar'></div>
                        <div className='div-modal-img-w100-h15' onClick={() => changeModalActive(false)} title='Haz click aqui para cerrar'></div>
                    </div>
                    : <></>
            }
        </div>
    )
}

export default FilesViewer
