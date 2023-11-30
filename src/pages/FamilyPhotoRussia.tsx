import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("russia", "label.jpg", "#f7f755");
  let pg;

  pg = album.addPage(t('Itkutsk'),45,5);
  pg.addPicture("irkutsk1.jpg", '');
  pg.addPicture("irkutsk2.jpg", '');

  pg = album.addPage(t('Moscow'),45,5);
  pg.addPicture("moscow1.jpg", '');
  pg.addPicture("moscow2.jpg", '');
  pg.addPicture("moscow3.jpg", '');
  pg.addPicture("moscow4.jpg", '');
  pg.addPicture("moscow5.jpg", '');
  pg.addPicture("moscow6.jpg", '');
  pg.addPicture("moscow7.jpg", '');
  pg.addPicture("moscow8.jpg", '');
  pg.addPicture("moscow9.jpg", '');
  pg.addPicture("moscow10.jpg", '');

  pg = album.addPage(t('Abramtsevo'),45,5);
  pg.addPicture("abramtsevo1.jpg", '');
  pg.addPicture("abramtsevo2.jpg", '');
  pg.addPicture("abramtsevo3.jpg", '');

  pg = album.addPage(t('Hemelnitsk'),45,5);
  pg.addPicture("hemelnitsk1.jpg", '');

  pg = album.addPage(t('StPetersburg'),45,5);
  pg.addPicture("petersburg1.jpg", '');
  pg.addPicture("petersburg2.jpg", '');

  pg = album.addPage(t('UstIlimsk'),45,5);
  pg.addPicture("ust_ilimsk1.jpg", '');
  pg.addPicture("ust_ilimsk2.jpg", '');

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('InRussia')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
