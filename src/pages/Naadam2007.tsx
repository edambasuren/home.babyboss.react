import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("naadam_2007", "label.jpg", "black");
  let pg;

  pg = album.addPage(t('NaadamWashingtonDCJuly15_2007Br'),75,5);
  pg.addPicture("naadam_1.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_2.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_3.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_4.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_5.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_6.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_7.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_8.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_9.jpg", t('NaadamWashingtonDCJuly15_2007'));

  pg.addPicture("naadam_10.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_11.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_12.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_13.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_14.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_15.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_16.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_17.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_18.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_19.jpg", t('NaadamWashingtonDCJuly15_2007'));

  pg.addPicture("naadam_20.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_21.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_22.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_23.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_24.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_25.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_26.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_27.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_28.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_29.jpg", t('NaadamWashingtonDCJuly15_2007'));

  pg.addPicture("naadam_30.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_31.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_32.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_33.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_34.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_35.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_36.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_37.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_38.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_39.jpg", t('NaadamWashingtonDCJuly15_2007'));

  pg.addPicture("naadam_40.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_41.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_42.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_43.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_44.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_45.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_46.jpg", t('NaadamWashingtonDCJuly15_2007'));
  pg.addPicture("naadam_47.jpg", t('NaadamWashingtonDCJuly15_2007'));

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('NaadamWashingtonDCJuly15_2007')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
