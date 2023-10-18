import React, { useContext, useState } from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
import { moviesContext } from '../../Context/moviesContext';

export default function Pagination({getAllPages,pageCount ,airTodayPages,getAllSeriesPages}) {
 
 
 function handlePages({selected}){
  if(getAllPages){
    getAllPages(selected+1)
  }else if(getAllSeriesPages){

    getAllSeriesPages(selected+1)
  }else if(airTodayPages){
    airTodayPages(selected+1)
  }
 }
  return <>
        {/* <Items currentItems='{}' /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePages}
        pageClassName='page-item'
        pageLinkClassName="page-link"
        containerClassName={"pagination justify-content-center my-5"}
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        pageRangeDisplayed={2}
        pageCount={pageCount}
        activeClassName="active"

        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

  </>
}
