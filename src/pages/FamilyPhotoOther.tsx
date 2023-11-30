import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("family", "label.jpg");
  let pg;

  pg = album.addPage(t('Shay'),45,10,"#0ccdc1");
  pg.addPicture("shay1.jpg", t('ShayIrkutsk1982'));
  pg.addPicture("shay2.jpg", t('ShayUlanbaatar10YearOld'));
  pg.addPicture("shay3.jpg", t('ShayNairamdalSummerCamp1975'));
  pg.addPicture("shay4.jpg", t('Shay3YearOld'));

  pg = album.addPage(t('Bayar'),45,10,"#0ccdc1");
  pg.addPicture("bayar1.jpg", t('Bayar1982'));
  pg.addPicture("bayar2.jpg", t('Bayar1YearOld'));
  pg.addPicture("bayar3.jpg", t('Bayar4YearOld'));
  pg.addPicture("bayar4.jpg", t('BayarMoscow7YearOld'));

  pg = album.addPage(t('Munk'),45,10,"#0ccdc1");
  pg.addPicture("munk1.jpg", t('Munk2004'));
  pg.addPicture("munk2.jpg", t('MunkMongolia3YearOld'));
  pg.addPicture("munk3.jpg", t('Munk1YearOld'));
  pg.addPicture("munk4.jpg", t('MunkSyracuse10YearOld'));

  pg = album.addPage(t('ShaysParents'),45,10,"#0ccdc1");
  pg.addPicture("shay_parents1.jpg", t('ShaysMom'));
  pg.addPicture("shay_parents2.jpg", t('ShaysDad'));

  pg = album.addPage(t('BayarsParents'),45,10,"#0ccdc1");
  pg.addPicture("bayar_parents1.jpg", t('BayarsParents'));
  pg.addPicture("bayar_parents2.jpg", t('BayarsMom'));
  pg.addPicture("bayar_parents3.jpg", t('BayarsDad'))

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('FamilyPictures')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
