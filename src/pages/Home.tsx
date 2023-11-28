import { ReactElement, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
 
const Home: FC<any> = (): ReactElement => {

  const { i18n, t } = useTranslation();

  const COLORS = ["red", "blue", "green", "black"];
  const [colorIndex, setColorIndex] = useState(0);

  const DIR = "images\\rotate_image\\";
  const ROTATE_IMAGES = ["dc2000_1.jpg", "dc2000_2.jpg", "family1.jpg", "family3.gif"];
  let imageIndex = Math.floor(Math.random() * ROTATE_IMAGES.length + 1) - 1;

  const [source, setSource] = useState(DIR + ROTATE_IMAGES[imageIndex] );

  useEffect(() => {
    const interval = setInterval(()=> {
      if (colorIndex < COLORS.length-1) {
          setColorIndex(colorIndex+1); 
        } else {  
          setColorIndex(0);
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [colorIndex]);

return (
    <div className="main">

      <p style={{padding: "20px 0px",fontFamily: "times", fontSize: "18px",color: "#000077",}}>
        {t('UpdateHelloWorldBabybossComFamilyHomepagedOn')}
      </p>
      <br />

      <p>
        <img src={source} style={{float: "right",width:'360px',height:'253px',marginLeft: "20px",border: "1px solid black",}} />
        {t('WeLivedInUSAforLast13Years')}
      </p>
      <br />

      <div id="ctext" style={{color: COLORS[colorIndex], textAlign: "center",fontFamily: "arial",fontSize:"25px",fontWeight: "bold",}}>
        {t('HaveFun')}
      </div>


    </div >
  );
};
 
export default Home;
