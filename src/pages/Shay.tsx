import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import Jseyes from "../components/Jseyes";

const Shay: FC<any> = (): ReactElement => {

  const { i18n, t } = useTranslation();

  return (
    <div id='shay' className='main'>

      <div id="header">
        {t('WelcomeToShaysPage')}
      </div>

      <table align="center"><tbody>
      <tr>
	      <td width="129">
          <img src="/pictures/ishe.jpg" width="129" height="129" />
        </td>
	      <td align="center" valign="top">
          <br />
          <span className="myname">
            {t('IshkhandTumaatsagaan')}
          </span><br />

          <b>{t('Homepage')}:</b> <a href="http://www.babyboss.com">www.babyboss.com</a>
          <br />
          <br />

          {t('ContactInformation')}:<br />
          <b>{t('Email')}: </b><a href="mailto:itumaa@yahoo.com">itumaa@yahoo.com</a><br />
          <b>{t('Phone')}: </b> (703) 286 - 5272<br />
          <b>{t('Cell')}: </b> (703) 786 - 2545<br />

        </td>
        <td align="center" width="150">
          <Jseyes />
        </td>
      </tr>
      </tbody></table>

      <h2>{t('Resume')}</h2>
      <ul>
	      <li>{t('ResumeIn')}<a href="shay/resume.html"> {t('HTML')} </a> {t('Format')} </li>
	      <li>{t('ResumeIn')}<a href="shay/resume.doc"> {t('MSWord')}  </a> {t('Format')} </li>
	      <li>{t('ResumeIn')}<a href="shay/resume.txt"> {t('PlainText')} </a> {t('Format')} </li>
      </ul>

      <h2>{t('FewWordsAboutMe')}</h2>

      <p>
        {t('IAmWebDeveloper')}
      </p>

      <p>
        {t('SomeExamplesOfProjects')}:
      </p>

      <ul>
	      <li> {t('Online')} <a href="music/index.html">{t('MusicStore')} </a> {t('PasswordProtected')} {t('FrontEnd')}</li>
	      <li> {t('OnlineMusicStore')} <a href="music_admin/admin_login_form.html">{t('AdministrativePages')}</a> ({t('PasswordProtected')})</li>
	      <li> {t('OnlineDiscussion')} <a href="forum/forum.html"> {t('Forum')} </a></li>
      </ul>

    </div>
  );
};
 
export default Shay;
