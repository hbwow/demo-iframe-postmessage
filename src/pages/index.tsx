import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isShowIframe, setIsShowIframe] = useState(true);

  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (event.origin === 'http://localhost:8000') {
        console.log('🚀🚀🚀 ~ Message from iframe:', event.data);
        const { isShowIframe: _isShowIframe } = event.data;
        if (typeof _isShowIframe === 'boolean') {
          setIsShowIframe(_isShowIframe);
        }
      }
    });
  }, []);

  return (
    <div>
      <h2>我是根页面</h2>

      <div style={{ border: '1px solid' }}>
        {isShowIframe && (
          <iframe src="http://localhost:8000/subIframe"></iframe>
        )}
      </div>
    </div>
  );
}
