import styles from './Layout.module.scss';

type LayoutProp = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className={styles.container}>
      <header>
        <nav>
          <h1>USER DASHBOARD</h1>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
