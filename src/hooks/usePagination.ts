import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const usePagination = (currentPage: number) => {
  const [page, setPage] = useState({
    cPage: currentPage,
    pPage: currentPage,
  });

  const navigate = useNavigate({ from: '/' });

  const handlePrevPage = () => {
    setPage({
      cPage: page.cPage - 1,
      pPage: page.cPage
    })
    navigate({
      search: () => ({ p: page.cPage - 1 }),
    });
  }

  const handleNextPage = () => {
    setPage({
      cPage: page.cPage + 1,
      pPage: page.cPage
    })
    navigate({
      search: () => ({ p: page.cPage + 1 }),
    });
  }

  return {
    page,
    handlePrevPage,
    handleNextPage
  }
}

export default usePagination;