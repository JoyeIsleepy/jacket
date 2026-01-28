import styles from './index.module.scss';

export default () => {
  return (
    <div className={styles.notFoundBox}>
      <span>Page Not Found</span>
      <span>页面没找到</span>
    </div>
  );
};
