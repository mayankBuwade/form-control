import React, { useContext, useEffect, useState } from "react";
import { Box, Button, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { AllData } from "../../providers/InfoProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RequisitionDetails = () => {
  const { page, setPage, formOneData, setFormOneData, lastPage, pageOneVisited } =
    useContext(AllData);

  const rawValues = {
    requestTitle: "",
    owner: "",
    hiringManager: "",
    numberOfOpening: "",
    urgency: "",
    employmentType: "",
  };

  if (pageOneVisited) {
    var initialValues = formOneData;
  } else {
    var initialValues = rawValues;
  }

  const validationSchema = Yup.object({
    requestTitle: Yup.string().required("Required"),
    owner: Yup.string().required("Required"),
    hiringManager: Yup.string().required("Required"),
    numberOfOpening: Yup.number()
      .typeError("Should be a number")
      .required("Required")
      .positive("Should be a positive number")
      .integer("Should be a whole number"),
    urgency: Yup.string().required("Required"),
    employmentType: Yup.string().required("Required"),
  });

  //console.log("line 33 data check", userData);

  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        //setUserFinalData({ ...userFinalData, userData });
        console.log("Submitted");
        //console.log(userFinalData);
        setPage(2);
      },
    });

  useEffect(() => {
    setFormOneData({ ...formOneData, ...values });
  }, [values]);

  return (
    <Box as="form" width="697px" height="553px" onSubmit={handleSubmit}>
      <Box height="553px" overflow="auto">
        <VStack spacing="16px">
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="requestTitle"
            >
              Request Title
            </Text>
            <Input
              bg="white"
              height="49px"
              id="requestTitle"
              type="text"
              onChange={handleChange}
              value={values.requestTitle}
              onBlur={handleBlur}
            />
            {errors.requestTitle && touched.requestTitle ? (
              <Text color="red.500">{errors.requestTitle}</Text>
            ) : null}
          </VStack>

          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="owner"
            >
              Owner
            </Text>
            <Input
              bg="white"
              height="49px"
              id="owner"
              type="text"
              onChange={handleChange}
              value={values.owner}
              onBlur={handleBlur}
            />
            {errors.owner && touched.owner ? (
              <Text color="red.500">{errors.owner}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="hiringManager"
            >
              Hiring Manager
            </Text>
            <Input
              bg="white"
              height="49px"
              id="hiringManager"
              type="text"
              onChange={handleChange}
              value={values.hiringManager}
              onBlur={handleBlur}
            />
            {errors.hiringManager && touched.hiringManager ? (
              <Text color="red.500">{errors.hiringManager}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="numberOfOpening"
            >
              Number of opening
            </Text>
            <Input
              bg="white"
              height="49px"
              id="numberOfOpening"
              type="text"
              onChange={handleChange}
              value={values.numberOfOpening}
              onBlur={handleBlur}
            />
            {errors.numberOfOpening && touched.numberOfOpening ? (
              <Text color="red.500">{errors.numberOfOpening}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="urgency"
            >
              Urgency
            </Text>
            <Input
              bg="white"
              height="49px"
              id="urgency"
              type="text"
              onChange={handleChange}
              value={values.urgency}
              onBlur={handleBlur}
            />
            {errors.urgency && touched.urgency ? (
              <Text color="red.500">{errors.urgency}</Text>
            ) : null}
          </VStack>
          <VStack alignItems="flex-start" width="full">
            <Text
              as="label"
              fontWeight={"normal"}
              color={"customGray"}
              fontSize={"sm"}
              htmlFor="employmentType"
            >
              Employment Type
            </Text>
            <Input
              bg="white"
              height="49px"
              id="employmentType"
              type="text"
              onChange={handleChange}
              value={values.employmentType}
              onBlur={handleBlur}
            />
            {errors.employmentType && touched.employmentType ? (
              <Text color="red.500">{errors.employmentType}</Text>
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
