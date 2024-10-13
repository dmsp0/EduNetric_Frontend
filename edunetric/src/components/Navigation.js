// src/components/Navigation.js
import React from 'react';

const Navigation = ({ userRole }) => {
  const renderLinks = () => {
    switch (userRole) {
      case 'admin':
        return (
          <>
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/notices" className="hover:text-gray-300">공지사항</a>
            <a href="/students" className="hover:text-gray-300">학생</a>
            <a href="/teachers" className="hover:text-gray-300">강사</a>
            <a href="/classes" className="hover:text-gray-300">수업</a>
            <a href="/payments" className="hover:text-gray-300">수납</a>
            <a href="/counseling" className="hover:text-gray-300">상담</a>
          </>
        );
      case 'teacher':
        return (
          <>
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/notices" className="hover:text-gray-300">공지사항</a>
            <a href="/attendance" className="hover:text-gray-300">출결</a>
            <a href="/grades" className="hover:text-gray-300">성적</a>
            <a href="/students" className="hover:text-gray-300">학생</a>
            <a href="/resources" className="hover:text-gray-300">자료</a>
            <a href="/questions" className="hover:text-gray-300">질문게시판</a>
            <a href="/counseling-schedule" className="hover:text-gray-300">상담일정</a>
          </>
        );
      case 'student':
        return (
          <>
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/notices" className="hover:text-gray-300">공지사항</a>
            <a href="/attendance" className="hover:text-gray-300">출결</a>
            <a href="/grades" className="hover:text-gray-300">성적조회</a>
            <a href="/resources" className="hover:text-gray-300">자료</a>
            <a href="/questions" className="hover:text-gray-300">질문게시판</a>
          </>
        );
      case 'parent':
        return (
          <>
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/notices" className="hover:text-gray-300">공지사항</a>
            <a href="/attendance" className="hover:text-gray-300">출결</a>
            <a href="/grades" className="hover:text-gray-300">성적</a>
            <a href="/resources" className="hover:text-gray-300">자료</a>
            <a href="/questions" className="hover:text-gray-300">질문게시판</a>
            <a href="/counseling-request" className="hover:text-gray-300">상담신청</a>
            <a href="/payment-management" className="hover:text-gray-300">결제관리</a>
          </>
        );
      default:
        return null; // 기본적으로 아무 것도 렌더링하지 않음
    }
  };

  return (
    <nav className="flex space-x-6">
      {renderLinks()}
    </nav>
  );
};

export default Navigation;
