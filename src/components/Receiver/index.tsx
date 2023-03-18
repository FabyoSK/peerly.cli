import { Box, Text } from 'ink';
import React, { useEffect, useState } from 'react';
import FileRow from '../FileRow';

import { File as FileType } from '../../types';
import { Server } from '@fabyosk/peerly-sdk/lib';

const Receiver: React.FC = () => {
  const [files, setFiles] = useState<FileType[]>([]);

  useEffect(() => {
    const server = new Server()
    server.start().then(() => {
      // server.on('ready', () => setIsConnected(true))
    })

    server.on('file-upload', (payload: FileType) => {
      setFiles([...files, payload])
    })

    server.on('update-progress', (payload: FileType) => {
      setFiles(
        (currentFiles) => currentFiles.map(
          file => {
            if (file.id === payload.id) {
              return { ...file, ...payload }
            }
            return file;
          }
        )
      )
    })
  }, [])

  return (
    <Box>
      <Text>Waiting for files...</Text>
      <Box flexDirection="column">
        {files.map(file => (
          <FileRow key={file.id} file={file} />
        ))}
      </Box>
    </Box>
  );
}

export default Receiver;