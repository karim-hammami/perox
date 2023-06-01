"use client";
import React, { useState } from 'react';

function CTA() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        const data = { email, message };

        const res = await fetch('http://localhost:3000/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const body = await res.json()
        console.log(body)
    };

    return (
        <div id="contact" className="flex md:flex-row flex-col items-center m-0 justify-center h-screen py-10 w-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="text-4xl md:text-8xl font-bold text-[#FFFF00]">Contact Me</div>
                <input
                    type="email"
                    required
                    placeholder="Email"
                    className="px-4 py-2 mt-10 outline-none w-2/3 m-5 h-[45px] rounded-lg"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Type your message here"
                    className="px-4 outline-none py-2 w-2/3 h-[180px] m-5 rounded-lg"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                    className="bg-[#FFFF00] hover:bg-[#d3d36f] outline-none font-bold w-2/3 h-[45px] m-5 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="text-4xl md:text-8xl font-bold text-[#FFFF00]">Booking</div>
                <a href="tel:+21654443650" className="text-4xl md:text-8xl text-white">
                    +216 58 612 477
                </a>
            </div>
        </div>
    );
}

export default CTA;
