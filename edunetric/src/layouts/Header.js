import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/edunetric_logo_white.png';
import Navigation from '../components/Navigation';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
    const [userRole, setUserRole] = useState(null); // 사용자 역할 (admin, teacher, student, parent)
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); //로고 클릭 시 홈으로 이동
    }

    const handleLoginClick = () => {
        navigate('/login'); // 로그인 페이지로 이동
    };
    
    const handleSignupClick = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setUserRole(null);
        navigate('/'); // 로그아웃 후 홈으로 이동
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4 max-h-28">

            {/* 로고 섹션 */}
            <div>
                <img
                src={logo}
                alt="MyLogo"
                className="w-50 h-32 cursor-pointer" // 이미지 크기와 클릭 가능하도록 설정
                onClick={handleLogoClick} // 로고 클릭 시 홈으로 이동
                />
            </div>
            
            {/* 네비게이션 링크 */}
            {isLoggedIn ? (
                <>
                    <Navigation userRole={userRole} />
                    <div className="flex space-x-4">
                        <a href="/mypage" className="hover:text-gray-300">마이페이지</a>
                        <button onClick={handleLogoutClick} className="hover:text-gray-300">로그아웃</button>
                    </div>
                </>
            ) : (
                <div className="flex space-x-4">
                    <button onClick={handleLoginClick} className="hover:text-gray-300">로그인</button>
                    <button onClick={handleSignupClick} className="hover:text-gray-300">회원가입</button>
                </div>
            )}
    
            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
          </div>
        </header>
      );
    };
export default Header;
