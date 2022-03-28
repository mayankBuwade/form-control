import React, { useState, createContext } from "react";

export const AllData = createContext();

export const InfoProvider = (props) => {
  const [page, setPage] = useState(1);
  const [formOneData, setFormOneData] = useState([]);
  const [formTwoData, setFormTwoData] = useState([]);
  const [formThreeData, setFormThreeData] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [finalPageVisited, setFinalPageVisited] = useState(false);
  const [pageOneVisited, setPageOneVisited] = useState(false);
  const [pageTwoVisited, setPageTwoVisited] = useState(false);
  const [allFormData, setAllFormData] = useState();

  return (
    <AllData.Provider
      value={{
        page,
        setPage,
        formOneData,
        setFormOneData,
        formTwoData,
        setFormTwoData,
        formThreeData,
        setFormThreeData,
        lastPage,
        setLastPage,
        finalPageVisited,
        setFinalPageVisited,
        pageOneVisited,
        setPageOneVisited,
        pageTwoVisited,
        setPageTwoVisited,
      }}
    >
      {props.children}
    </AllData.Provider>
  );
};

export default InfoProvider;
