import React from 'react'
import { fetchData } from '../helper'
import { useLoaderData, Outlet } from 'react-router-dom'
import wave from '../assets/wave.svg'
import Nav from '../components/Nav'
export function mainLoader() {
    const userName = fetchData("userName")
    return {
        userName
    }
}
const Main = () => {
    const { userName } = useLoaderData()
    return (
        <div className='layout'>
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={wave} />
        </div>
    )
}

export default Main