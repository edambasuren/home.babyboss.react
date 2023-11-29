import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
 
const Bayar: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  return (
    <div className='main'>

      <div id="header">
        {t('WelcomeToBayarsPage')}
      </div>
      <br />

      <div> 
        <img src='pictures/bayar.jpg' style={{float: "right", marginLeft:"20px"}} />
        {t('MyNameIsBayar')}
      </div>
      <br />

    </div>
  );
};
 
export default Bayar;
