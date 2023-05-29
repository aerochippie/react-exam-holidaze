import React, { useEffect, useState } from 'react'
import axios from "../../api/axios"
import { Card } from '../card/Card'
import ReactPaginate from 'react-paginate'
import "./list.css"

export const List = () => {


    const LIST_URL = "/api/v1/holidaze/venues"
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [search, setSearch] = useState("")
    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(data.length / itemsPerPage)
    const pageChange = ({ selected }) => {
        setPageNumber(selected)
    }


    useEffect(() => {
        axios.get(LIST_URL)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
        // console.log(data)

    }, [])

    
    const displayItems = data
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((data) => {
            return (<Card
                key={data.id}
                id={data.id}
                name={data.name}
                country={data.location.country}
                price={data.price}
                wifi={data.meta.wifi}
                parking={data.meta.parking}
                breakfast={data.meta.breakfast}
                pets={data.meta.pets}
                description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description}
                image={data.media[0]}
            />)
        })

    const displayFilteredItems = data
        .filter((data) => {
            return search.toLowerCase() === '' ? data : data.name.toLowerCase().includes(search)
        })
        .map((data) => {
            return (<Card
                key={data.id}
                id={data.id}
                name={data.name}
                country={data.location.country}
                price={data.price}
                wifi={data.meta.wifi}
                parking={data.meta.parking}
                breakfast={data.meta.breakfast}
                pets={data.meta.pets}
                description={data.description.length > 250 ? `${data.description.substring(0, 250)}...` : data.description}
                image={data.media[0]}
            />)
        })


    return (
        <>
            <div className="search-container">
                <div className="input-container">

                    <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />

                </div>
                <div className="meta-filter-container"></div>
            </div>

            <div className="list-container">
                <div className="list">
                    {(() => {
                        if (search === '') {
                            return (
                                <>
                                    {displayItems}
                                    <ReactPaginate

                                        pageCount={pageCount}
                                        onPageChange={pageChange}
                                        containerClassName='pagination-container'
                                        previousLinkClassName='page-button'
                                        nextLinkClassName='page-button'
                                        disabledClassName='page-disabled'
                                        activeClassName='page-active'
                                    />
                                </>)
                        } else {
                            return (
                                <>{displayFilteredItems} </>
                            )
                        }
                    })()}
                </div>
            </div>
        </>
    )
}
