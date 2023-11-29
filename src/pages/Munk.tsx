import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import Flipflop from "../components/Flipflop";
 
const Munk: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  return (
    <div id="munk" className='main'>

      <div id="header">
        {t('WelcomeToBayarsPage')}
      </div>
      <br />

      <div> 
        <table><tbody>
        <tr>
          <td align="right">
            {t('MyNameIsMunk')}
          </td>
          <td>
            <img src='pictures/munk_bike.jpg' style={{marginLeft: "20px",float:"right",}} />
          </td>
	      </tr>
        <tr>
          <td align="right">
            June 18, 2006
          </td>
          <td>
            <img src='pictures/06-18-2006_munk1.jpg' style={{marginLeft: "20px",float:"right",}} />
          </td>
        </tr>
        </tbody></table>
      </div>
      <br />
      <br />

      <div>
        {t('SomeJavaScriptExamples')}:
      </div>
      <br />

      <table id="t1"><tbody>
        <tr style={{width:"120", height:"120"}}>
          <td>
	          
            <Flipflop />
            
          </td>
        </tr>
      </tbody></table>
      <br />

      <table id="t2" style={{width:"100", height:"300"}} ><tbody>
	      <tr>
          <td colSpan={2} align="center">
            <b> {t('ClickToSeeScripts')} </b>
          </td>
        </tr>
   	    <tr>
		      <td align="center">

            <img src="images/basketball_5.jpg" onClick={() => window.location.href='basketball.html'} />
          </td>
		      <td align="center">
            <img src="images/soc_animated.gif" onClick={() => window.location.href='soccer_Munk.html'} />
          </td>
	      </tr>
        </tbody></table>
      <br />

    </div>
  );
};

export default Munk;
