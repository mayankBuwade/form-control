import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AllData } from "../../providers/InfoProvider";

export const Draft = () => {
  const { formOneData, formTwoData, formThreeData } = useContext(AllData);

  console.log("line 17: ", formOneData);

  return (
    <VStack
      shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      width="442px"
      height="558px"
      borderRadius="lg"
    >
      <HStack justifyContent="space-between" width={"100%"}>
        <Heading
          fontStyle={"italic"}
          color="customBlue"
          ml={6}
          mt={2.5}
          fontSize={"sm"}
          fontWeight={"normal"}
        >
          Draft{" "}
        </Heading>
        <Box
          borderTopEndRadius={"lg"}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          mt={2.5}
          bg={"#E74861"}
          minWidth={"121px"}
          height={"28px"}
        >
          <Heading
            fontStyle={"italic"}
            color="white"
            fontSize={"sm"}
            fontWeight={"normal"}
          >
            Preview
          </Heading>
        </Box>
      </HStack>
      <HStack pt="44px">
        <Box
          display={"flex"}
          bg={"blue.900"}
          color="white"
          width={"391px"}
          height={"63px"}
          borderRadius={"lg"}
        >
          <Flex width="full" alignItems="center" justifyContent="space-around">
            <Text as="text">{formOneData.requestTitle}</Text>
            <HStack alignSelf="left">
              <Text>Opening</Text>
              <Text>{formOneData.numberOfOpening}</Text>
            </HStack>
          </Flex>
        </Box>
      </HStack>
      <Box overflow="auto">
      <HStack pt="28px">
        <Box
          display={"flex"}
          bg={"white"}
          color="blue.900"
          width={"392px"}
          height={"193px"}
          borderRadius={"lg"}
        >
          <VStack w="full" h="full" mx="17px" mt={"23px"} spacing={5}>
            <HStack width={"full"} alignContent={"flex-start"}>
              <Text fontFamily={"Noto sans"}>REQUISITION DETAILS</Text>
            </HStack>
            <HStack width={"full"} justifyContent={"space-between"}>
              <VStack>
                <Text fontSize={"10px"} fontWeight={"thin"}>
                  OWNER
                </Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formOneData.owner}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>URGENCY</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formOneData.urgency}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>EMPLOYEMENT TYPE</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formOneData.employmentType}</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    

      <HStack pt="28px">
        <Box
          display={"flex"}
          bg={"white"}
          color="blue.900"
          width={"392px"}
          height={"193px"}
          borderRadius={"lg"}
        >
          <VStack w="full" h="full" mx="17px" mt={"23px"} spacing={5}>
            <HStack width={"full"} alignContent={"flex-start"}>
              <Text fontFamily={"Noto sans"}>JOB DETAILS</Text>
            </HStack>
            <HStack width={"full"} justifyContent={"space-between"}>
              <VStack>
                <Text fontSize={"10px"} fontWeight={"thin"}>
                    JOB TITLE
                </Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formTwoData.jobTitle}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>JOB DESCTRIPTION</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formTwoData.jobDescription}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>JOB LOCATION</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formTwoData.jobLocation}</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </HStack>


      <HStack pt="28px">
        <Box
          display={"flex"}
          bg={"white"}
          color="blue.900"
          width={"392px"}
          height={"193px"}
          borderRadius={"lg"}
        >
          <VStack w="full" h="full" mx="17px" mt={"23px"} spacing={5}>
            <HStack width={"full"} alignContent={"flex-start"}>
              <Text fontFamily={"Noto sans"}> INTERVIEW DETAILS</Text>
            </HStack>
            <HStack width={"full"} justifyContent={"space-between"}>
              <VStack>
                <Text fontSize={"10px"} fontWeight={"thin"}>
                INTERVIEW MODE
                </Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formThreeData.initerviewMode}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>INTERVIEW DESCTRIPTION</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formThreeData.interviewDescription}</Text>
              </VStack>
              <VStack>
                <Text fontSize={"10px"}>INTERVIEW LANGUAGE</Text>
                <Text fontFamily={"Noto Sans"} fontSize={"13px"} fontStyle={"italic"}>{formThreeData.interviewLanguage}</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </HStack>
      </Box>
    </VStack>
  );
};
