import styles from "./AppLayout.module.css";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}

export default AppLayout;
