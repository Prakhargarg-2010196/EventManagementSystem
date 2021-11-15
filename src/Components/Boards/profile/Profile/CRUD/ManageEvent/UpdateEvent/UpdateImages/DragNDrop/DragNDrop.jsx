import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import styles from './DragNDrop.module.css'
import {useDropzone} from 'react-dropzone';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 6px;
  border-radius: 4px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fff;
  color: #000;
  outline: none;
  transition: border .24s ease-in-out;
`;

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 7,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 100,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export const DragNDrop=(props)=> {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/jpeg, image/png ,image/jpg',
    maxFiles:(10-props.imagesLength),
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
       
      })));
      
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        alt=""
        />
        
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    props.onGet(files);
  }, );
  
  return (
    <div className={styles.container}>
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag & drop maximum of {10-props.imagesLength} files here, or click to select  multiple files at a time </p>
      </Container>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>  
    </div>
  );
}

