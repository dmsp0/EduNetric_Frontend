import React from 'react';
// import { useNavigate } from 'react-router-dom';
import EduNetricLogo from '../assets/img/EduNetricLogo2.png'

const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-cover text-5xl">
            <img src={EduNetricLogo}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"  
                // 배경처럼 화면을 가득 채우는 Tailwind 클래스
            />
        </div>
    );
};

export default Home;
