import React, { FC, useEffect, useState } from 'react';
// Icons
import UploadFileIcon from '../../../icons/uploadFile';
// Styles
import styles from './UploadFile.module.css';

/**
 * RefObject type interface
 */
interface RefObject<T> {
  readonly current: T | null;
}

/**
 * UploadFile interface
 */
interface UploadFile {
  /**
   * Function passes the Item selected
   * @param value
   */
  handleFile(any): void;
}

/**
 * UploadFile Functional component implementation
 */
const UploadFile: FC<UploadFile> = ({ handleFile }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const hiddenFileInput: RefObject<any> = React.useRef(null);
  const dropRef: RefObject<any> = React.createRef();

  // Drag&Drop methods
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Event handling
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  // Set and remove eventListeners during mount and unmount
  useEffect(() => {
    const div: HTMLDivElement = dropRef.current;
    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
    return function cleanup() {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };
  });
  return (
    <div
      data-testid="container"
      className={isDragging ? styles.draggedContainer : styles.container}
      ref={dropRef}
    >
      <div className={styles.uploadButtonContainer}>
        <UploadFileIcon />
      </div>
      <p className={styles.text}>Drag and drop files here</p>
      <button className={styles.selectFileButton} onClick={handleClick}>
        Select File
      </button>
      <input
        data-testid="fileInput"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default UploadFile;
