import { Box, Center, Container, Flex } from '@chakra-ui/react';
import { DashboardLayout } from '../containers/dashboard/DashboardLayout';


const Home = () => {

return (
    <Box bg="#F8F9FB" w="full" h="100vh">
      <DashboardLayout />
    </Box>
);
}

export default Home;