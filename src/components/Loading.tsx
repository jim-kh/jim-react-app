import { FunctionComponent, useContext } from "react";
import styles from "../loading.module.css";
import { SiteTheme } from "../theme/theme";

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
    const theme = useContext(SiteTheme);

    return (
        <main style={{ backgroundColor: theme.background }}>
            <div className={styles.loader}>
                Loading
                <span></span>
            </div>
        </main>
    );
};

export default Loading;
