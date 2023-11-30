import { ReactElement, FC } from "react";
import { useTranslation } from "react-i18next";
import AlbumData from "../utils/AlbumData";
import Album from "../components/Album";
 
const FamilyPhoto: FC<any> = (): ReactElement => {
  
  const { i18n, t } = useTranslation();

  let album = new AlbumData("events", "label.jpg", "blue");
  let pg;

  pg = album.addPage(t('MunkGraduationLeviMiddleSchool2000'),95,10);
  pg.addPicture("m_grad1.jpg", t('GraduationCeremonyLeviMiddleSchoolSyracuse2000'));
  pg.addPicture("m_grad2.jpg", t('GraduationCeremonyLeviMiddleSchoolSyracuse2000'));
  pg.addPicture("m_grad3.jpg", t('GraduationCeremonyLeviMiddleSchoolSyracuse2000'));

  pg = album.addPage(t('BayarGraduationSyracuseUniversity2001'),95,10);
  pg.addPicture("b_grad1.jpg", t('GraduationCeremonySyracuseUniversityMay2001'));
  pg.addPicture("b_grad2.jpg", t('GraduationCeremonySyracuseUniversityMay2001'));
  pg.addPicture("b_grad3.jpg", t('GraduationCeremonySyracuseUniversityMay2001'));
  pg.addPicture("b_grad4.jpg", t('GraduationCeremonySyracuseUniversityMay2001'));

  pg = album.addPage(t('VisitNewYorkCity2003'),70,10);
  pg.addPicture("nyc1.jpg", t('LibertyIslandNY2003'));

  pg = album.addPage(t('CampingTremanStateParkJune27_2003'),85,10);
  pg.addPicture("treman1.jpg", t('VeryFirstCampingInOurFamilyHistory'));

  pg = album.addPage(t('LetchworthStateParkJuly13_2003'),85,10);
  pg.addPicture("letchworth1.jpg", t('TheUpperFallAndRailroadBridge'));
  pg.addPicture("letchworth2.jpg", t('ViewFromTheBridge'));

  pg = album.addPage(t('ShayGraduationSyracuseUniversityMay2004'),95,10);
  pg.addPicture("shay_grad1.jpg", t('ShayGraduationSchoolOfInformationStudies'));
  pg.addPicture("shay_grad2.jpg", t('ShayGraduationMay8_2004'));

  pg = album.addPage(t('MunkGraduationIthacaHighSchoolJune2004Br'),95,10);
  pg.addPicture("munk_grad1.jpg", t('MunkGraduationIthacaHighSchoolJune2004'));
  pg.addPicture("munk_grad2.jpg", t('MunkGraduationIthacaHighSchoolJune2004'));

  pg = album.addPage(t('WashingtonDCZooMay7_2006'),95,10);
  pg.addPicture("may-07-2006_zoo.jpg", t('AtTheWashingtonDCZooMay7_2006'));
  pg.addPicture("may-07-2006_zoo1.jpg", t('AtTheWashingtonDCZooMay7_2006'));
  pg.addPicture("may-07-2006_zoo2.jpg", t('AtTheWashingtonDCZooMay7_2006'));
  pg.addPicture("may-07-2006_zoo3.jpg", t('AtTheWashingtonDCZooMay7_2006'))

  pg = album.addPage(t('NewYearDecember31_2006Br'),95,10);
  pg.addPicture("new-year-2007_1.jpg", t('NewYearDecember31_2006'));
  pg.addPicture("new-year-2007_2.jpg", t('NewYearDecember31_2006'));
  pg.addPicture("new-year-2007_3.jpg", t('NewYearDecember31_2006'))
  pg.addPicture("new-year-2007_4.jpg", t('NewYearDecember31_2006'));
  pg.addPicture("new-year-2007_5.jpg", t('BayarsMoNewYearDecember31_2006m'));
  pg.addPicture("new-year-2007_6.jpg", t('NewYearDecember31_2006'))
  pg.addPicture("new-year-2007_7.jpg", t('NewYearDecember31_2006'));
  pg.addPicture("new-year-2007_8.jpg", t('NewYearDecember31_2006'));

  pg = album.addPage(t('SixFlagsSummer2006Br'),95,10);
  pg.addPicture("Six-flags_2006_1.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_2.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_3.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_4.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_5.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_6.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_7.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_8.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_9.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_10.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_11.jpg", t('SixFlagsSummer2006'));
  pg.addPicture("Six-flags_2006_12.jpg", t('SixFlagsSummer2006'));

  pg = album.addPage(t('WashingtonDCJuly2006'),95,10);
  pg.addPicture("DC-july-06_1.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_2.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_3.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_4.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_5.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_6.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_7.jpg", t('WashingtonDCJuly2006'));
  pg.addPicture("DC-july-06_8.jpg", t('WashingtonDCJuly2006'));

  pg = album.addPage(t('WashingtonDCNaadamJuly15_2007Br'),95,10);
  pg.addPicture("July-15-2007_1.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_2.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_3.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_4.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_5.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_6.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_7.jpg", t('WashingtonDCNaadamJuly15_2007'));
  pg.addPicture("July-15-2007_8.jpg", t('WashingtonDCNaadamJuly15_2007'));

  pg = album.addPage(t('ChicagoMay13_2007Br'),95,10);
  pg.addPicture("May-13-2007_chicago_1.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_2.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_3.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_4.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_5.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_6.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_7.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_8.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_9.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_10.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_11.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_12.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_13.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_14.jpg", t('ChicagoMay13_2007'));
  pg.addPicture("May-13-2007_chicago_15.jpg", t('ChicagoMay13_2007'));

return (
    <div id='main_album' className='main'>

      <div id="title">
        {t('FamilyEvents')}
      </div>

      <hr  color = "#000077" style={{width:"100%"}} />
      <p><b>{t('ClickToSeeLargerPictures')}</b></p>

      <Album album={album} />

    </div>
  );
};
 
export default FamilyPhoto;
