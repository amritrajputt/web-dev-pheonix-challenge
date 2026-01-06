import React from 'react'

function Card({username = "amrit"}) {
    return (
        <div>
            <img src="https://imgs.search.brave.com/bq0laWd3N0eXyvdBZIx0eJX5e46DV-N6AP_r_vAilFM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL184/eU9QZEtmZFF3aDJj/VDNOQ1gtdEt6a1JK/YWtuWnJaWF9Kc1RJ/eWJUd0x0c0lVVnMt/RGUzWGRiclJQeXdC/VFE5R3hvZ0lEVzMy/MElaYk04dVh6d0ZD/NzhSbzdPM0xMcERm/c01VRWZ0U2c9dzE0/NDAtaDgxMC1uLW51" alt="" />
            <h1 className='text-2xl bg-green-500 p-3 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum id dignissimos soluta reprehenderit necessitatibus voluptatum aliquam sequi rerum magnam. Quaerat fugiat placeat delectus ratione corrupti. Sed natus placeat nulla.</h1>
            {username}
        </div>
    )
}

export default Card
