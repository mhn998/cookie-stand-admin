import React from 'react'
import Link from 'next/link'

export default function OverView() {
    return (
        <div className="flex justify-between py-2 bg-green-500 px-50">
            <button className="bg-white"><Link href="/">Overview</Link></button>
        </div>
    )
}