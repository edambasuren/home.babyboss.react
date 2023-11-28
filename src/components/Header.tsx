import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";
import "../i18n";
 
const Header: FC<any> = (): ReactElement => {

  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div id='top_layer'>

      <div id='logo'>
        <img src= 'images/babyboss.jpg' width='264' height='55' />
      </div>

      <div id='toptitle'>
      {t('WelcomeToMyFamilyHomepage')}
      </div>

      <form id='lang' name='langform'>
        <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {t(label)}
          </option>
        ))}
      </select>
      </form>

    </div> 
  );
};

export default Header;
