import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("khulan", "label.jpg", "black");
  let pg;

  pg = album.addPage(t('КhulansBirthday'),45,5);
  pg.addPicture("khulan_birthday1.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday2.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday3.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday4.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday5.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday6.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday7.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday8.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday9.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday10.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday11.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday12.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday13.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday14.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday15.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday16.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday17.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday18.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday19.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday20.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday21.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday22.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday23.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday24.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday25.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday26.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday27.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday28.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday29.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday30.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday31.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday32.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday33.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday34.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday35.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday36.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday37.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday38.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday39.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday40.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday41.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday42.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday43.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday44.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday45.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday46.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday47.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday48.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday49.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday50.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday51.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday52.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday53.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday54.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday55.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday56.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday57.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday58.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday59.jpg", t('TorontoCanadaApril20_2008'));

  pg.addPicture("khulan_birthday60.jpg", t('TorontoCanadaApril20_2008'));
  pg.addPicture("khulan_birthday61.jpg", t('TorontoCanadaApril20_2008'));

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('Khulan')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
