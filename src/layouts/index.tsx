import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/subIframe">第一个 iframe 页面</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
