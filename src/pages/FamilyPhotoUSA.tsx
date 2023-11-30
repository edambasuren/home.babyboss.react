import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("usa", "label.jpg");
  let pg;

  pg = album.addPage(t('Washington'),45,10,"blue");
  pg.addPicture("dc1.jpg", t('WashingtonDCJune2000'));
  pg.addPicture("dc2.jpg", t('WashingtonDCJune2000'));
  pg.addPicture("dc3.jpg", t('WashingtonDCJune2000'));
  pg.addPicture("dc4.jpg", t('WashingtonDCMay2003'));

  pg = album.addPage(t('Syracuse'),45,10,"blue");
  pg.addPicture("syracuse1.jpg", t('MooreAveSyracuseMarch1999'));
  pg.addPicture("syracuse2.jpg", t('MunkAndAlexSkytopSyracuse1997'));
  pg.addPicture("syracuse3.jpg", t('MunkSyracuse1997'));
  pg.addPicture("syracuse4.jpg", t('FistFishSyracuse1999'));

  pg = album.addPage(t('Ithaca'),45,10,"blue");
  pg.addPicture("ithaca1.jpg", t('TsagaanSarIthacaFebruary2003'));
  pg.addPicture("ithaca2.jpg", t('MuseumOfArtIthacaJanuary2003'));
  pg.addPicture("ithaca3.jpg", t('MuseumOfArtIthacaJanuary2003'));
  pg.addPicture("ithaca4.jpg", t('WinterVacationIthacaJanuary2003'));

  pg = album.addPage(t('Rochester'),45,10,"blue");
  pg.addPicture("rochester1.jpg", t('SeaBreezeRochesterNY2002'));
  pg.addPicture("rochester2.jpg", t('SeaBreezeRochesterNY2002'));
  pg.addPicture("rochester3.jpg", t('SeaBreezeRochesterNY2002'));
  pg.addPicture("rochester4.jpg", t('SeaBreezeRochesterNY2002'));

  pg = album.addPage(t('NewYorkCity'),45,5,"blue");
  pg.addPicture("nyc1.jpg", t('NewYorkFebruary2003'));
  pg.addPicture("nyc2.jpg", t('NewYorkFebruary2003'));
  pg.addPicture("nyc3.jpg", t('LibertyIslandNewYorkJuly26_2003'));
  pg.addPicture("nyc4.jpg", t('DowntownNewYorkJuly26_2003'))

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('InAmerica')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
