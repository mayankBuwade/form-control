import React, { useContext, useEffect } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AllData } from "../../providers/InfoProvider";

const rawValues = {
  jobTitle: "",
  jobDescription: "",
  jobLocation: "",
};

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Required"),
  jobDescription: Yup.string().required("Required"),
  jobLocation: Yup.string().required("Required"),
});

export const JobDetails = () => {
  const {
    page,
    setPage,
    formTwoData,
    setFormTwoData,
    lastPage,
    setLastPage,
    setPageOneVisited,
    pageTwoVisited,
  } = useContext(AllData);

  if (pageTwoVisited) {
    var initialValues = formTwoData;
  } else {
    var initialValues = rawValues;
  }
  

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        //setUserFinalData({ ...userFinalData, formTwoData });
        console.log("page2 Submitted");
        //console.log(userFinalData);
        setPage(3);
      },
    });

  useEffect(() => {
    setFormTwoData({ ...formTwoData, ...values });
  }, [values]);

  return (
    <Box as="form" width="697px" height="553px" onSubmit={handleSubmit}>
      <Box height="553px">
        <VStack spacing="16px">
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="jobTitle"
            >
              Job Title
            </Text>
            <Input
              bg="white"
              height="49px"
              id="jobTitle"
              type="text"
              onChange={handleChange}
              value={values.jobTitle}
              onBlur={handleBlur}
            />
            {errors.jobTitle && touched.jobTitle ? (
              <Text color="red.500">{errors.jobTitle}</Text>
            ) : null}
          </VStack>

          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="jobDescription"
            >
              Job Description
            </Text>
            <Input
              bg="white"
              height="77px"
              id="jobDescription"
              type="text"
              as="textarea"
              onChange={handleChange}
              value={values.jobDescription}
              onBlur={handleBlur}
            />
            {errors.jobDescription && touched.jobDescription ? (
              <Text color="red.500">{errors.jobDescription}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="jobLocation"
            >
              Job Location
            </Text>
            <Input
              bg="white"
              height="49px"
              id="jobLocation"
              type="text"
              onChange={handleChange}
              value={values.jobLocation}
              onBlur={handleBlur}
            />
            {errors.jobLocation && touched.jobLocation ? (
              <Text color="red.500">{errors.jobLocation}</Text>
            ) : null}
          </VStack>
        </VStack>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="78px"
        position="relative"
        left="395px"
        width="301px"
        height="45px"
      >
        <Button
          fontWeight="medium"
          fontSize="12px"
          width="143px"
          height="38px"
          bg="gray.500"
          type="button"
          onClick={() => {
            setPageOneVisited(true), setPage(1);
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
