import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const ResourceCard = ({ title, description, uploadDate, downloadLink }) => {
  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <Heading as="h5" size="md">{title}</Heading>
      <Text>{description}</Text>
      <Text fontSize="sm">Uploaded: {uploadDate}</Text>
      {downloadLink && <Link href={downloadLink} isExternal>Download</Link>}
    </Box>
  );
};

export default ResourceCard;
