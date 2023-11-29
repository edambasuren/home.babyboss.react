import { ReactElement, FC, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
 
const LeftMenu: FC<any> = (): ReactElement => {

  const { i18n, t } = useTranslation();

  const [source, setSource] = useState("images/bboss_0.jpg");

  const navigate = useNavigate();

  const onClickHandler = (e: MouseEvent<HTMLAreaElement>, loc: string) => {
    e.preventDefault();
    navigate(loc);
  };

  const onMouseOverHandler = (e: MouseEvent<HTMLAreaElement>, t: number) => {
    e.preventDefault();
    setSource('images/bboss_' + t + '.jpg');
  };

  return (
    <div id='left'>

      <ul id='left_menu'>
        <li><a href='/'>{t('Home')}</a></li>
        <li><a href='/shay'>{t('Shay')}</a></li>
        <li><a href='/bayar'>{t('Bayar')}</a></li>
        <li><a href='/munk'>{t('Munk')}</a></li>
        <li><a href='/family_photo'>{t('FamilyPictures')}</a></li>

	      <li id='album'><img src='images/closed.gif' />{t('FamilyAlbum')} </li>
        <ul id='subalbum'>
          <li><a href='family_photo_mongolia.php'>{t('Mongolia')}</a></li>
          <li><a href='family_photo_russia.php'>{t('Russia')}</a></li>
          <li><a href='family_photo_usa.php'>{t('USA')}</a></li>
          <li><a href='family_photo_other.php'>{t('Other')}</a></li>
        </ul>
	
        <li><a href='family_events.php'>{t('FamilyEvents')}</a></li>
        <li><a href='friends.php'>{t('Friends')}</a></li>
        <li><a href='khulan.php'>{t('Khulan')}</a></li>
        <li><a href='naadam_2007.php'>{t('Naadam2007')}</a></li>
	      <li className='last'><a> &nbsp; </a></li>
      </ul>

      <map name='map1'>
        <area shape='circle' title='Bayar' coords='45,30,25' 
          onClick={(e) => onClickHandler(e, '/bayar')} 
          onMouseOver={(e) => onMouseOverHandler(e, 1)} 
          onMouseOut={(e) => onMouseOverHandler(e, 0)} />
        <area shape='circle' title='Shay' coords='105,45,25' 
          onClick={(e) => onClickHandler(e, '/shay')} 
          onMouseOver={(e) => onMouseOverHandler(e, 2)} 
          onMouseOut={(e) => onMouseOverHandler(e, 0)} />
        <area shape='circle' title='Munk' coords='70,80,25' 
          onClick={(e) => onClickHandler(e, '/munk')} 
          onMouseOver={(e) => onMouseOverHandler(e, 3)} 
          onMouseOut={(e) => onMouseOverHandler(e, 0)} />
      </map>

      <img id='ball' src={source} useMap='#map1' />

      <div className='small' >
        {t('UpdatedOn')}
      </div>
    </div>
  );
};
 
export default LeftMenu;