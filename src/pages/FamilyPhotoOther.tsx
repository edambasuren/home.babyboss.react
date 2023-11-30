import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("other", "label.jpg");
  let pg;

  pg = album.addPage(t('Italy'),45,10,"blue",18);
  pg.addPicture("italy1.jpg", t('BayarAndPetreTriesteItaly1994'));
  pg.addPicture("italy2.jpg", t('VeniceItaly1995'));
  pg.addPicture("italy3.jpg", t('VeniceItaly1995'));
  pg.addPicture("italy4.jpg", t('MongolGerForSaleTriesteItaly1995'));
  pg.addPicture("italy5.jpg", t('TriesteItaly1994'));
  pg.addPicture("italy6.jpg", t('VeniceItaly1995'));
  pg.addPicture("italy7.jpg", t('MiramareCastleTriesteItaly1994'));
  pg.addPicture("italy8.jpg", t('At_ICTP_TriesteItaly1994'));
  pg.addPicture("italy9.jpg", t('HomeTriesteItaly1994'));
  pg.addPicture("italy10.jpg", t('DiplomaCourseICTP_TriesteItaly1994'));

  pg = album.addPage(t('Austria'),45,10,"blue",18);
  pg.addPicture("austria1.jpg", t('AtJargalHomeViennaAustria1994'));
  pg.addPicture("austria2.jpg", t('AtJargalHomeViennaAustria1994'));
  pg.addPicture("austria3.jpg", t('AtJargalHomeViennaAustria1994'));

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('InOtherCountries')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
