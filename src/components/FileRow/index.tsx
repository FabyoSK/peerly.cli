import { Box, Text } from 'ink';
import React, { FC } from 'react';

import { File as FileType } from '../../types';

const FileRow: FC<{ file: FileType }> = ({ file }) => {
  return (
    <Box borderStyle="round" justifyContent='space-between'>
      <Text>{file.name}</Text>
      <Box marginLeft={2}>
        <Text>
          {`${file.totalWrittenInMb}MB/${file.totalInMb}MB`}
          {file.percentage === '100' && (
            <>
              <Text>{" - "}</Text>
              <Text color="green">Completed</Text>
            </>
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default FileRow;