import { useNavigate } from 'umi';

const DocsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>我是第一个iframe</h2>

      <button
        onClick={() => {
          navigate('/sub2Iframe');
          // window.location.href = 'http://localhost:8000/sub2Iframe';
        }}
      >
        跳转第二个iframe
      </button>
    </div>
  );
};

export default DocsPage;
