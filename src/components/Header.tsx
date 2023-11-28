import { ReactElement, FC } from "react";
 
const Header: FC<any> = (): ReactElement => {
  let title = 'Welcome to My Family Homepage!'; //,'Манай гэрийн хуудастай танилцана уу!

  //<option value="eng">Англи
  //<option value="mon" selected>Монгол');

  return (
    <div id='top_layer'>

      <div id='logo'>
        <img src= 'images/babyboss.jpg' width='264' height='55' />
      </div>

      <div id='toptitle'>
      {title}
      </div>

      <form id='lang' name='langform'>
	      <select name='lang'>
          <option value="eng" selected>English</option>
          <option value="mon">Mongolian</option>
	      </select>
      </form>

    </div> 
  );
};
 
export default Header;
