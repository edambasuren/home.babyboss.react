import React, { ReactElement, FC } from "react";
 
const Footer: FC<any> = (): ReactElement => {
  let year = new Date().getFullYear();
  const tableStyle = {
    width: "770px", 
    height: "50px",
    border: "none",
    boxShadow: "none"
  };
  
  return (
      <div id="bottom_layer">

        <div className="small">
          Copyright @babyboss.com 2003-{year}
        </div>
        <br />

          <table id="footer" style={tableStyle}><tbody>
            <tr>
              <td align="center"><img src='/images/apache2.gif' /></td>
              <td align="center"><img src='/images/php.gif' /></td>
              <td align="center"><img src='/images/mysql.gif' /></td>
            </tr>
          </tbody></table>
          <br />

      </div>
  );
};
 
export default Footer;