import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("mongolia", "label.jpg");
  let pg;

  pg = album.addPage(t('Family'),45,5,"#f7f755",16);
  pg.addPicture("family1.jpg", '');
  pg.addPicture("family2.jpg", '');
  pg.addPicture("family3.jpg", '');
  pg.addPicture("family4.jpg", '');

  pg = album.addPage(t('Bayangol'),45,5,"#f7f755",16);
  pg.addPicture("bayangol1.jpg", t('Bayar1982'));
  pg.addPicture("bayangol2.jpg", t('Bayar1YearOld'));
  pg.addPicture("bayangol3.jpg", t('Bayar4YearOld'));

  pg = album.addPage(t('BataaOyunFamily'),70,5,"#f7f755",16);
  pg.addPicture("bataa1.jpg", '');

  pg = album.addPage(t('BaatarAriunaaFamily'),70,5,"#f7f755",16);
  pg.addPicture("baatar1.jpg", '');
  pg.addPicture("baatar2.jpg", '');
  pg.addPicture("baatar3.jpg", '');

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('InMongolia')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
