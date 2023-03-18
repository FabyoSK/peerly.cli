import { Client } from '@fabyosk/peerly-sdk/lib/index';
import { Box, Text } from 'ink';
import React, { useEffect } from 'react';
// import FileRow from '../FileRow';

// import { File as FileType } from '../../types';
// import { Client } from '@fabyosk/peerly-sdk/lib';
import TextInput from '../TextInput';
import * as fs from 'node:fs'

const Sender: React.FC = () => {
  // const [files, setFiles] = useState<FileType[]>([]);
  const client = new Client().setUserName('fsk-client')

  useEffect(() => {
    client.start().then(() => {
      // client.on('ready', () => setIsConnected(true))
    })

    // client.on('file-upload', (payload: FileType) => {
    //   setFiles([...files, payload])
    // })

    // client.on('update-progress', (payload: FileType) => {
    //   setFiles(
    //     (currentFiles) => currentFiles.map(
    //       file => {
    //         if (file.id === payload.id) {
    //           return { ...file, ...payload }
    //         }
    //         return file;
    //       }
    //     )
    //   )
    // })
  }, [])

  const handleSubmit = async (path: string) => {
    const file = fs.createReadStream(path)
    const stats = await fs.promises.stat(path)
    await client.send({ file, fileLength: stats.size })
  };

  return (
    <Box flexDirection="column">
      <Text>Waiting for files...</Text>
      {/* <Box flexDirection="column">
        {files.map(file => (
          <FileRow key={file.id} file={file} />
        ))} 
      </Box> */}
      <TextInput 
        placeholder={'File to send:'}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

export default Sender;