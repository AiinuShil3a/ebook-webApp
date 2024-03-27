import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-Blue text-White py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <p>มหาวิทยาลัยราชภัฏนครปฐม</p>
            <p>123 ถนนสุโขทัย ตำบลหนองปากโป่ง</p>
            <p>อำเภอเมือง จังหวัดนครปฐม 73000</p>
            <p>โทรศัพท์: 0-1234-5678</p>
            <p>Email: info@npru.ac.th</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">เชื่อมโยง</h3>
            <ul>
              <li><a href="/">หน้าแรก</a></li>
              <li><a href="/about">เกี่ยวกับเรา</a></li>
              <li><a href="/courses">หลักสูตร</a></li>
              <li><a href="/admission">การรับเข้า</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ลิงค์สำคัญ</h3>
            <ul>
              <li><a href="/news">ข่าวสาร</a></li>
              <li><a href="/events">กิจกรรม</a></li>
              <li><a href="/gallery">แกลเลอรี่</a></li>
              <li><a href="/contact">ติดต่อเรา</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดตามเรา</h3>
            <ul>
              <li><a href="https://www.facebook.com/npruofficial" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/npruofficial" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/npruofficial/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com/user/npruchannel" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;