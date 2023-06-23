import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function FetchData() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch("/api/v1/student/auth/register")
        .then(response => response.json())
        .then(data => setRecords({records: data}))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {records.map((list, index)=> (
                    <li key={index}>{list.id} | {list.name}</li>
                ))}
            </ul>
        </div>
    )
}