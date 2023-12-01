import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("friends", "label.jpg", "black");
  let pg;

  pg = album.addPage(t('DorjsurenFamily'),45,5);
  pg.addPicture("dorjsuren1.jpg", t('CornellUniversityIthacaNY_July2003'));
  pg.addPicture("dorjsuren2.jpg", t('CornellUniversityIthacaNY_July2003'));
  pg.addPicture("dorjsuren3.jpg", t('NiagaraFallsNY_September2001'));
  pg.addPicture("dorjsuren4.jpg", t('NiagaraFallsNY_September2001'));
  pg.addPicture("dorjsuren5.jpg", t('NiagaraFallsNY_September2001'));
  pg.addPicture("dorjsuren6.jpg", t('FrederickMarylandNovember2001'));
  pg.addPicture("dorjsuren7.jpg", t('FrederickMarylandNovember2001'));

  pg = album.addPage(t('BattogtokhFamily'),45,5);
  pg.addPicture("battogtokh1.jpg", t('WashingtonDC_May2003'));
  pg.addPicture("battogtokh2.jpg", t('WashingtonDC_May2003'));
  pg.addPicture("battogtokh3.jpg", t('MoscowStateUniversity1983'));
  pg.addPicture("battogtokh4.jpg", t('MoscowStateUniversity1983'));

  pg = album.addPage(t('BayaraaChimgee'),45,5);
  pg.addPicture("bayaraach1.jpg", t('UlaanbaatarMongoliaDecember1994'));
  pg.addPicture("bayaraach2.jpg", t('Moscow1984'));
  pg.addPicture("bayaraach3.jpg", t('UlaanbaatarMongolia2001'));
  pg.addPicture("bayaraach4.jpg", t('Moscow1984'));

  pg = album.addPage(t('Boldoo'),35,5);
  pg.addPicture("boldoo1.jpg", t('UlaanbaatarMongolia1992'));
  pg.addPicture("boldoo2.jpg", t('SeventhGrade'));
  pg.addPicture("boldoo3.jpg", t('Moscow1985'));

  pg = album.addPage(t('MendeeFamily'),45,5);
  pg.addPicture("mendee1.jpg", t('UlaanbaatarMongolia1994'));
  pg.addPicture("mendee2.jpg", t('Moscow1983'));
  pg.addPicture("mendee3.jpg", t('UlaanbaatarMongolia1983'));
  pg.addPicture("mendee4.jpg", t('UlaanbaatarMongoliaJuly2001'));

  pg = album.addPage(t('GambaaFamily'),45,5);
  pg.addPicture("gambaa1.jpg", t('UlaanbaatarMongolia2001'));
  pg.addPicture("gambaa2.jpg", t('UlaanbaatarMongolia2001'));
  pg.addPicture("gambaa3.jpg", t('UlaanbaatarMongolia2001'));

  pg = album.addPage(t('Baigalaa'),35,5);
  pg.addPicture("baigalaa1.jpg", t('WashingtonDC_Summer2000'));
  pg.addPicture("baigalaa2.jpg", t('WashingtonDC_Summer2000'));
  pg.addPicture("baigalaa3.jpg", t('WashingtonDC_Summer2000'));

  pg = album.addPage(t('Serge'),35,5);
  pg.addPicture("serge1.jpg", t('UlaanbaatarMongolia2001'));
  pg.addPicture("serge2.jpg", t('Mongolia2001'));
  pg.addPicture("serge3.jpg", t('NiagaraFallsNY_May2002'));
  pg.addPicture("serge4.jpg", t('IthacaNY_May2002'));
  pg.addPicture("serge5.jpg", t('NiagaraFallsNY_May2002'));
  pg.addPicture("serge6.jpg", t('NiagaraFallsNY_May2002'));
  pg.addPicture("serge7.jpg", t('SergeSonNewZealand2004'));

  pg = album.addPage(t('Petre'),35,5);
  pg.addPicture("petre1.jpg", t('PetreMassaAndMunkSyracuseNY_Winter1996'));
  pg.addPicture("petre2.jpg", t('PetreSyracuseNY_Summer1996'));
  pg.addPicture("petre3.jpg", t('SyracuseUniversityNY1997'));
  pg.addPicture("petre4.jpg", t('ThanksgivingSyracuseNY1998'));

  pg = album.addPage(t('Tav'),35,5);
  pg.addPicture("tav1.jpg", t('SyracuseSummer2000'));
  pg.addPicture("tav2.jpg", t('SyracuseSummer2000'));
  pg.addPicture("tav3.jpg", t('SyracuseSummer2000'));
  pg.addPicture("tav4.jpg", t('SyracuseSummer2000'));

  pg = album.addPage(t('Liz_Bahri'),45,5);
  pg.addPicture("liz_bahri1.jpg", t('MariaLizAndShaySyracuseSummer2002'));
  pg.addPicture("liz_bahri2.jpg", t('Bahri_MariaAndShayChristmas2002Syracuse'));
  pg.addPicture("liz_bahri3.jpg", t('Christmas2002Syracuse'));
  pg.addPicture("liz_bahri4.jpg", t('ElizabethAndMariaAugust2002'));

  pg = album.addPage(t('Maria_Jose'),45,5);
  pg.addPicture("maria1.jpg", t('MariaAndJoseChristmas2002Syracuse'));
  pg.addPicture("maria2.jpg", t('BayarsParents'));
  pg.addPicture("maria3.jpg", t('BahriJoseShayAndJosesSonAtMariasHouseWinter2002'));
  pg.addPicture("maria4.jpg", t('JoseShayAndMariaChristmas2002Syracuse'));

  pg = album.addPage(t('Julan'),35,5);
  pg.addPicture("julan1.jpg", t('JulanAndEvanSyracuseUniversityJune2003FS'));
  pg.addPicture("julan2.jpg", t('JulanAndEvanSyracuseUniversityJune2003'));

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('OurFriends')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
