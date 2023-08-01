import { useEffect } from 'react';

const DocsPage = () => {
  useEffect(() => {
    console.log('进入到第二个iframe');
    window.parent.postMessage({ isShowIframe: false }, 'http://localhost:8000');
  }, []);
  return (
    <div>
      <h2>我是第二个iframe</h2>
    </div>
  );
};

export default DocsPage;
