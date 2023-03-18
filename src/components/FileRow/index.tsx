import { Box, Text } from 'ink';
import React, { FC } from 'react';

import { File as FileType } from '../../types';

const FileRow: FC<{ file: FileType }> = ({ file }) => {
  return (
    <Box borderStyle="single" justifyContent='space-between'>
      <Text>{file.name}-{file.id}</Text>
      <Box marginLeft={2}>
        <Text>
          {`${file.totalWrittenInMb}MB/${file.totalInMb}MB`}
        </Text>
      </Box>
    </Box>
  );
}

export default FileRow;