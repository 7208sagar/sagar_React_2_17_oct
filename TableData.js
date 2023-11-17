import React, { useState, useEffect } from 'react'
import '../Components/TableData.css'
function TableData() {
    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        console.log("In use effect")
        getUserDetails()
    }, [])


    async function getUserDetails() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then((response) => response.json())
            .then((data) => {
                setAlldata(data)
            });
    }
    console.log("tableData===", alldata)
    return (
        <div className='container mt-5 p-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th className='th_first' scope="col">Id</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Total Volume</th>
                        <th scope="col">Image</th>
                        <th className='th_last' scope="col">Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {alldata.map((e, idx) => {
                        return (
                            <tr>
                                <th scope="row">{e.id}</th>
                                <td>{e.symbol}</td>
                                <td>{e.name}</td>
                                <td>{e.current_price}</td>
                                <td>{e.total_volume}</td>
                                <td className='img-tag'><img src={e.image} alt={e.name} className='w-25'></img> </td>
                                <td>{e.last_updated}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TableData