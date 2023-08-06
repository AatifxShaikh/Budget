import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div className='error'>
            <h1>Uh oh! We have got a problem.</h1>
            <p>{error.message || error.statustText}</p>
            <div className='flex-md'>
                <button className='btn btn--dark'
                    onClick={() => navigate(-1)}>
                    <ArrowUturnLeftIcon width={20} />
                    <span>Go back</span>
                </button>
                <Link
                    to="/"
                    className='btn btn--dark'>
                    <HomeIcon width={20} />
                    <span>Go Home</span>
                </Link>

            </div>
        </div>
    )
}

export default Error