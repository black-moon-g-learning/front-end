import React from 'react';

const UseOnChangePage = () => {
  const [pageId, setPageId] = React.useState(1);
  const NextPage = () => {
    if (pageId === 6) {
      setPageId(1);
    } else {
      setPageId(prevPageid => prevPageid + 1);
    }
  };
  return {
    setPageId,
    pageId,
    NextPage,
  };
};

export default UseOnChangePage;
