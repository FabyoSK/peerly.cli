import { Box, Text } from 'ink';
import React, { useEffect, useState } from 'react';
import FileRow from '../FileRow';

import { File as FileType } from '../../types';
import { Server } from '@fabyosk/peerly-sdk/lib';

const Receiver: React.FC = () => {
  const [files, setFiles] = useState<FileType[]>([]);
  const [userConnected, setUserConnected] = useState<any>(null);

  useEffect(() => {
    const server = new Server()
      .setUserName('FSK')

    server.start()

    server.on('user-connected', (payload) => {
      setUserConnected(payload)
    });

    server.on('file-upload', (payload: FileType) => {
      setFiles((currentFiles) => [...currentFiles, payload])
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
    <Box flexDirection="column">
      {userConnected ? (
        <Text>{userConnected.username} has connected</Text>
      ) : (
        <Text>Waiting for files...</Text>
      )}
      <Box flexDirection="column">
        {files.map(file => (
          <FileRow key={file.id} file={file} />
        ))}
      </Box>
    </Box>
  );
}

export default Receiver;