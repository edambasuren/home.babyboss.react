import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";

const Layout: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />

      <div id='body_bg'>
        <div id='body'>
 
        <LeftMenu />

        <Outlet />

        </div> 
      </div>

      <div id="body_bottom"></div>

      <Footer />
    </>
  );
}

export default Layout;


/* export interface Props {
    columnOne: React.ReactElement;
    columnTwo: React.ReactElement;
}

const TwoColsLayoutThemeWrapper: React.FC<Props> = (props) => 
  (<ThemeProvider theme={theme}>
    <TwoColsLayout {...props} />
   </ThemeProvider>
);

const TwoColsLayout: React.FC<Props> = (props) => {
    const styles = useStyles();
    return (
      <div className={styles.twoColumns}>
        <div className={styles.firstColumn}>{props.columnOne} </div>.   
        <div className={styles.secondColumn}>{props.columnTwo}</div>
      </div>
    );
};

export default TwoColsLayoutThemeWrapper; */


/*
// components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

// define interface to represent component props
interface Props {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
  children: ReactNode;
}

// functional component
const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        open={open}
        handleMenuOpen={toggle}
        toggleTheme={toggleTheme}
        useDefaultTheme={useDefaultTheme}
      />
      <Navigation open={open} handleMenuClose={toggle} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
 
export default Layout;
*/