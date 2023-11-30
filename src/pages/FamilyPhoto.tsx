import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("family", "label.jpg");

  let pg = album.addPage(t('Shay'),45,10,"#0ccdc1");


//  pg.add("shay2.jpg", ($_SESSION['lang']!='mon')?"Shay, Ulanbaatar, 10 year old":"Ишээ, Улаанбаатар, 10 настай");
//  pg.add("shay3.jpg", ($_SESSION['lang']!='mon')?"Shay, Nairamdal summer camp, 1975":"Ишээ, Найрамдал зуслан, 1975");
//  pg.add("shay4.jpg", ($_SESSION['lang']!='mon')?"Shay, 3 year old":"Ишээ, 3 настай")

  pg.addPicture("bayar_parents3.jpg", t('ShayИркутск1982'));
  pg.addPicture("shay1.jpg", t('ShayИркутск1982'));
  pg.addPicture("shay1.jpg", t('ShayИркутск1982'));
  pg.addPicture("shay1.jpg", t('ShayИркутск1982'));
  pg.addPicture("shay1.jpg", t('ShayИркутск1982'));

//  $pg->add("bayar_parents3.jpg", ($_SESSION['lang']!='mon')?"Bayar\s dad":"Баярын аав");
  /*



;

$pg = $alb->add(($_SESSION['lang']!='mon')?"Bayar":"Баяраа",45,10,"#0ccdc1");
$pg->add("bayar1.jpg", ($_SESSION['lang']!='mon')?"Bayar, 1982":"Баяраа, 1982");
$pg->add("bayar2.jpg", ($_SESSION['lang']!='mon')?"Bayar, 1 year old":"Баяраа, 1 настай");
$pg->add("bayar3.jpg", ($_SESSION['lang']!='mon')?"Bayar, 4 year old":"Баяраа, 4 настай");
$pg->add("bayar4.jpg", ($_SESSION['lang']!='mon')?"Bayar, Moscow, 7 year old":"Баяраа, Москва, 7 настай");

$pg = $alb->add(($_SESSION['lang']!='mon')?"Munk":"Мөнхөө",45,10,"#0ccdc1");
$pg->add("munk1.jpg", ($_SESSION['lang']!='mon')?"Munk, 2004":"Мөнхөө 2004");
$pg->add("munk2.jpg", ($_SESSION['lang']!='mon')?"Munk, Mongolia, 3 year old":"Мөнхөө, Монгол, 3 настай");
$pg->add("munk3.jpg", ($_SESSION['lang']!='mon')?"Munk, 1 year old":"Мөнхөө, 1 настай");
$pg->add("munk4.jpg", ($_SESSION['lang']!='mon')?"Munk, Syracuse, 10 year old":"Мөнхөө, Сиракуз, 10 настай");

$pg = $alb->add(($_SESSION['lang']!='mon')?"Shay\'s Parents":"Ишээгийн эцэг эх",45,10,"#0ccdc1");
$pg->add("shay_parents1.jpg", ($_SESSION['lang']!='mon')?"Shay\s mom":"Ишээгийн ээж");
$pg->add("shay_parents2.jpg", ($_SESSION['lang']!='mon')?"Shay\s dad":"Ишээгийн аав");

$pg = $alb->add(($_SESSION['lang']!='mon')?"Bayar\'s Parents":"Баярын <br>эцэг эх",45,10,"#0ccdc1");
$pg->add("bayar_parents1.jpg", ($_SESSION['lang']!='mon')?"Bayar\s parents":"Баярын эцэг эх");
$pg->add("bayar_parents2.jpg", ($_SESSION['lang']!='mon')?"Bayar\s mom":"Баярын ээж");
$pg->add("bayar_parents3.jpg", ($_SESSION['lang']!='mon')?"Bayar\s dad":"Баярын аав");
*/


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
