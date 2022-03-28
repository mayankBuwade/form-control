import React, { useContext, useEffect } from "react";
import { Input, VStack, Box, HStack, Text, Button } from "@chakra-ui/react";
import { AllData } from "../../providers/InfoProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

export const InterviewDetails = () => {
  const {
    setPage,
    lastPage,
    setLastPage,
    formThreeData,
    setFormThreeData,
    finalPageVisited,
    setFinalPageVisited,
    setFormOneData,
    setFormTwoData,
    setPageTwoVisited,

  } = useContext(AllData);

  const rawValues = {
    initerviewMode: "",
    interviewDescription: "",
    interviewLanguage: "",
  };

  const validationSchema = Yup.object({
    initerviewMode: Yup.string().required("Required"),
    interviewDescription: Yup.string().required("Required"),
    interviewLanguage: Yup.string().required("Required"),
  });

  if (finalPageVisited) {
    var initialValues = formThreeData;
  } else {
    var initialValues = rawValues;
  }

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log("3rd Page Submitted");
        setFormOneData([]);
        setFormTwoData([]);
        setFormThreeData([]);
        setFinalPageVisited(false);
      },
    });

  useEffect(() => {
    setFormThreeData({ ...formThreeData, ...values });
  }, [values]);

  return (
    <Box as="form" width="697px" height="553px" onSubmit={handleSubmit}>
      <Box overflow="hidden">
        <VStack spacing="16px">
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              htmlFor="initerviewMode"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
            >
              Interview Mode
            </Text>
            <Input
              bg="white"
              height="49px"
              id="initerviewMode"
              type="text"
              onChange={handleChange}
              value={values.initerviewMode}
              onBlur={handleBlur}
            />
            {errors.initerviewMode && touched.initerviewMode ? (
              <Text color="red.500">{errors.initerviewMode}</Text>
            ) : null}
          </VStack>

          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              htmlFor="interviewDescription"
              color={"customGray"}
              fontSize={"sm"}
            >
              Interview Description
            </Text>
            <Input
              bg="white"
              height="49px"
              id="interviewDescription"
              type="text"
              onChange={handleChange}
              value={values.interviewDescription}
              onBlur={handleBlur}
            />
            {errors.interviewDescription && touched.interviewDescription ? (
              <Text color="red.500">{errors.interviewDescription}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              htmlFor="interviewLanguage"
              color={"customGray"}
              fontSize={"sm"}
            >
              Interview Language
            </Text>
            <Input
              bg="white"
              height="49px"
              id="interviewLanguage"
              type="text"
              onChange={handleChange}
              value={values.interviewLanguage}
              onBlur={handleBlur}
            />
            {errors.interviewLanguage && touched.interviewLanguage ? (
              <Text color="red.500">{errors.interviewLanguage}</Text>
            ) : null}
          </VStack>
        </VStack>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="78px"
        position="fixed"
        left="760px"
        bottom="41px"
        width="301px"
        height="45px"
      >
        <Button
          fontWeight="medium"
          fontSize="12px"
          width="143px"
          height="38px"
          bg="gray.500"
          onClick={() => {
            setPageTwoVisited(true);
            setFinalPageVisited(true);
            setPage(2);
          }}
        >
          Previous
        </Button>
        <Button
          fontWeight="medium"
          fontSize="12px"
          width="143px"
          height="38px"
          bg={"#E74861"}
          type="submit"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
