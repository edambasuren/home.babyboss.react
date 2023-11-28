import { ReactElement, FC, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
 
const LeftMenu: FC<any> = (): ReactElement => {

  const [source,setSource] = useState("images/bboss_0.jpg");
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
        <li><a href='index.php'>Home</a></li>
        <li><a href='shay.php'>Shay</a></li>
        <li><a href='bayar.php'>Bayar</a></li>
        <li><a href='munk.php'>Munk</a></li>
        <li><a href='family_photo.php'>Family Pictures</a></li>

	      <li id='album'><img src='images/closed.gif' />Family album</li>
        <ul id='subalbum'>
          <li><a href='family_photo_mongolia.php'>Mongolia</a></li>
          <li><a href='family_photo_russia.php'>Russia</a></li>
          <li><a href='family_photo_usa.php'>USA</a></li>
          <li><a href='family_photo_other.php'>Other</a></li>
        </ul>
	
        <li><a href='family_events.php'>Family events</a></li>
        <li><a href='friends.php'>Friends</a></li>
        <li><a href='khulan.php'>Khulan</a></li>
        <li><a href='naadam_2007.php'>Naadam 2007</a></li>
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
        Updated on May 1, 2008
      </div>
    </div>
  );
};
 
export default LeftMenu;