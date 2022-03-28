import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AllData } from "../../providers/InfoProvider";
import { Draft } from "../draft/Draft";
import { InterviewDetails } from "../interviewDetails/InterviewDetails";
import { JobDetails } from "../jobDetails/JobDetails";
import { RequisitionDetails } from "../requisitionDetails/RequisitionDetails";

function showStep(step) {
  switch (step) {
    case 1:
      return <RequisitionDetails />;
    case 2:
      return <JobDetails />;
    case 3:
      return <InterviewDetails />;
    default:
      return null;
  }
}

export const DashboardLayout = () => {
  const { page } = useContext(AllData);

  return (
    <Flex justifyContent="center">
      <Box width="1192px">
        <VStack alignItems="flex-start" spacing={"23px"} m={0} p={0} mt="40px">
          <Text fontFamily={"Sora"} fontSize="24px" fontWeight={"bold"}>
            Create Candidate Requisition
          </Text>
          <HStack pl={5} spacing={20}>
            <VStack>
              <Text
                fontFamily={"Noto Sans"}
                fontSize={"15px"}
                color={page === 1 ? "black" : "customGray"}
                fontWeight={page === 1 ? "bold" : "normal"}
              >
                Requisition Details
              </Text>
              <Box
                position="fixed"
                left="375px"
                top="122px"
                width="1192px"
                height="2px"
                bg="gray.200"
              />
              <Box
                width="full"
                position="relative"
                height="2px"
                bg={page === 1 ? "#FF8282" : "gray.200"}
              />
            </VStack>
            <VStack>
              <Text
                fontFamily={"Noto Sans"}
                fontSize={"15px"}
                color={page === 2 ? "black" : "customGray"}
                fontWeight={page === 2 ? "bold" : "normal"}
              >
                Job Details
              </Text>
              <Box
                width="full"
                position="relative"
                height="2px"
                bg={page === 2 ? "#FF8282" : "gray.200"}
              />
            </VStack>
            <VStack>
              <Text
                fontFamily={"Noto Sans"}
                fontSize={"15px"}
                color={page === 3 ? "black" : "customGray"}
                fontWeight={page === 3 ? "bold" : "normal"}
              >
                Interview Details
              </Text>
              <Box
                width="full"
                position="relative"
                height="2px"
                bg={page === 3 ? "#FF8282" : "gray.200"}
              />
            </VStack>
          </HStack>
          <Flex width="full" justifyContent="space-between" pt="36px">
            {showStep(page)}
            <Draft />
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};
