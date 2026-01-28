import Ellipsis from './ellipsis';
import styles from './index.module.scss';

export default (prop) => {
  const { text = '加载中', color, loading = true, children } = prop;
  if (!loading) {
    return children;
  }
  return (
    <div className={styles.loadingBox}>
      <Ellipsis color={color} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
