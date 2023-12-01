import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          English: "English",
          Mongolian: "Mongolian",
          WelcomeToMyFamilyHomepage: "Welcome to My Family Homepage!",
          /* menu */
          Home: "Home",
          Shay: "Shay",
          Bayar: "Bayar",
          Munk: "Munk",
          FamilyPictures: 'Family Pictures',
          FamilyAlbum: 'Family album',
          Mongolia : 'Mongolia',
          Russia: 'Russia',
          USA: 'USA',
          Other: 'Other',
          FamilyEvents: 'Family Events',
          Friends: 'Friends',
          Khulan: 'Khulan',
          Naadam2007: 'Naadam 2007',
          UpdatedOn: 'Updated on Nov 28, 2023',
          /* home */
          UpdateHelloWorldBabybossComFamilyHomepagedOn: 'Hello World! Babyboss.com is a family homepage. Thanks for finding us. My name is Shay (nick name). Here are my baby boy Munk and my husband Bayar.',
          WeLivedInUSAforLast13Years: 'We lived in USA for last 13 years (Syracuse, NY and Ithaca, NY, Alexandria VA.) Now we just moved in Toronto Canada. This homepage has been published in 1999. Currently I am working on it to improve its disign and content. Please visit us more often.',
          HaveFun: 'Have fun!',
          /* shay */
          WelcomeToShaysPage: 'Welcome to Shay\'s page',
          IshkhandTumaatsagaan: 'Ishkhand Tumaatsagaan',
          Homepage: 'Homepage',
          ContactInformation: 'Contact information',
          Email: 'Email',
          Phone: 'Phone',
          Cell: 'Cell',
          Resume: 'Resume',
          ResumeIn: 'Resume in',
          HTML: 'HTML',
          MSWord: 'MS Word',
          PlainText: 'plain text',
          Format: 'format',
          FewWordsAboutMe: 'A few words about me',
          IAmWebDeveloper: 'I am a web developer. I graduated from Syracuse University in 2004 with masters degree in Information Management. Currently I am looking for a web developer position. I have experience with developing dynamic pages using technologies such as PHP, ASP, SQL, and MySQL. Please browse resume links for more information.',
          SomeExamplesOfProjects: 'Some examples of previous projects',
          Online: 'Online',
          OnlineMusicStore: 'Online music store',
          OnlineDiscussion: 'Online discussion',
          MusicStore: 'Music store',
          AdministrativePages: 'Administrative pages',
          Forum: 'Forum',
          FrontEnd: '(front end)',
          PasswordProtected: 'password protected',
          /* bayar */
          WelcomeToBayarsPage: 'Welcome to Bayar\'s page',
          MyNameIsBayar: 'My name is Bayar. I am physicist. I like teaching and programming. Currently this page is under development. Please come back soon for more information.',
          /* munk */
          WelcomeToMunksPage: 'Welcome to Munk\'s page',
          MyNameIsMunk: 'My name is Munk. My hobby is bicycling. I also like to play soccer.',
          SomeJavaScriptExamples: 'Some JavaScript Examples',
          ClickToSeeScripts: 'Click to see scripts',
          /* albums  */
          ClickToSeeLargerPictures: 'Click to see larger pictures',

          ShayIrkutsk1982: "Shay, Irkutsk, 1982",
          ShayUlanbaatar10YearOld: "Shay, Ulanbaatar, 10 year old",
          ShayNairamdalSummerCamp1975: "Shay, Nairamdal summer camp, 1975",
          Shay3YearOld: "Shay, 3 year old",

          Bayar1982: "Bayar, 1982",
          Bayar1YearOld: "Bayar, 1 year old",
          Bayar4YearOld: "Bayar, 4 year old",
          BayarMoscow7YearOld: "Bayar, Moscow, 7 year old",
        
          Munk2004: "Munk, 2004",
          MunkMongolia3YearOld: "Munk, Mongolia, 3 year old",
          Munk1YearOld: "Munk, 1 year old",
          MunkSyracuse10YearOld: "Munk, Syracuse, 10 year old",

          ShaysParents: "Shay\'s parents",
          ShaysMom: "Shay\s mom",
          ShaysDad: "Shay\s dad",
          
          BayarsParents: "Bayar\'s parents",
          BayarsMom: "Bayar\'s mom",
          BayarsDad: "Bayar\'s dad",

          InMongolia: 'In Mongolia',
          Family: "Family",
          Bayangol: "Bayangol",
          BataaOyunFamily: "Bataa & Oyun family",
          BaatarAriunaaFamily: "Baatar & Ariunaa family",

          InRussia: 'In Russia',
          Itkutsk: "Itkutsk",
          Moscow: "Moscow",
          Abramtsevo: "Abramtsevo",
          Hemelnitsk: "Hemelnitsk",
          StPetersburg: "St Petersburg",
          UstIlimsk: "Ust-Ilimsk",

          InAmerica: 'In America',
          Washington: "Washington",
          Syracuse: "Syracuse",
          Ithaca: "Ithaca",
          Rochester: "Rochester",
          NewYorkCity: "New York city",
          WashingtonDCJune2000: "Washington DC, June 2000",
          WashingtonDCMay2003: "Washington DC, May 2003",
          MooreAveSyracuseMarch1999: "Moore Ave Apt, Syracuse, March 1999",
          MunkAndAlexSkytopSyracuse1997: "Munk and Alex, Skytop, Syracuse 1997",
          MunkSyracuse1997: "Munk, Syracuse 1997",
          FistFishSyracuse1999: "Fist fish, Syracuse 1999",
          TsagaanSarIthacaFebruary2003:"Tsagaan sar, Ithaca, February 2003",
          MuseumOfArtIthacaJanuary2003: "Museum of Art, Ithaca, January 2003",
          WinterVacationIthacaJanuary2003: "Winter vacation, Ithaca, January 2003",
          SeaBreezeRochesterNY2002: "Sea Breeze, Rochester NY, 2002",
          NewYorkFebruary2003: "New York, February 2003",
          LibertyIslandNewYorkJuly26_2003: "Liberty Island, New York, July 26 2003",
          DowntownNewYorkJuly26_2003: "Downtown, New York, July 26 2003",

          InOtherCountries: 'In Other Countries',
          Italy: "Italy",
          BayarAndPetreTriesteItaly1994: "Bayar and Petre, Trieste, Italy 1994",
          MongolGerForSaleTriesteItaly1995: "\"Mongol ger for sale\", Trieste, Italy 1995",
          TriesteItaly1994: "Trieste, Italy 1994",
          VeniceItaly1995: "Venice, Italy 1995",
          MiramareCastleTriesteItaly1994: "Miramare Castle, Trieste, Italy 1994",
          At_ICTP_TriesteItaly1994: "At ICTP, Trieste, Italy 1994",
          HomeTriesteItaly1994: "Home, Trieste, Italy 1994",
          DiplomaCourseICTP_TriesteItaly1994: "Diploma Course, ICTP, Trieste, Italy 1994",
          Austria: "Austria",
          AtJargalHomeViennaAustria1994:"At Jargal\' home, Vienna, Austria, 1994",

          MunkGraduationLeviMiddleSchool2000: "Munk's graduation<br/>Levi middle school<br/> 2000",
          GraduationCeremonyLeviMiddleSchoolSyracuse2000: "Graduation ceremony, Levi middle school, Syracuse, 2000",
          BayarGraduationSyracuseUniversity2001: "Bayar's graduation<br>Syracuse University 2001",
          GraduationCeremonySyracuseUniversityMay2001: "Graduation ceremony, Syracuse University, May 2001",
          VisitNewYorkCity2003: "Visit to<br>New York City 2003",
          LibertyIslandNY2003: "Liberty Island, NY, 2003",
          CampingTremanStateParkJune27_2003: "Camping, Treman State Park, June 27th 2003",
          VeryFirstCampingInOurFamilyHistory: "This was the very first camping in our family history",
          LetchworthStateParkJuly13_2003: "Letchworth State Park, July 13th 2003",
          TheUpperFallAndRailroadBridge: "The upper fall and a railroad bridge",
          ViewFromTheBridge: "View from the bridge",
          ShayGraduationSyracuseUniversityMay2004: "Shay's graduation<br>Syracuse University<br> May 2004",
          ShayGraduationSchoolOfInformationStudies: "Shay\'s graduation, School of Information Studies",
          ShayGraduationMay8_2004: "Shay\'s graduation, May 8 2004",
          MunkGraduationIthacaHighSchoolJune2004Br: "Munk's graduation<br>Ithaca high school<br> June 2004",
          MunkGraduationIthacaHighSchoolJune2004: "Munk\'s graduation, Ithaca high school, June 2004",
          WashingtonDCZooMay7_2006: "Washington DC Zoo<br>May 7th, 2006",
          AtTheWashingtonDCZooMay7_2006: "At the Washington DC Zoo, May 7th, 2006",
          NewYearDecember31_2006Br: "New Year<br>December 31, 2006",
          NewYearDecember31_2006: "New Year, December 31, 2006",
          SixFlagsSummer2006Br: "Six Flags<br>Summer 2006",
          SixFlagsSummer2006: "Six Flags, Summer 2006",
          WashingtonDCJuly2006: "Washington DC<br>July 2006",
          WashingtonDCNaadamJuly15_2007Br: "Washington DC<br>Naadam<br>July 15, 2007",
          WashingtonDCNaadamJuly15_2007: "Washington DC Naadam July 15, 2007",
          ChicagoMay13_2007Br: "Chicago<br>May 13, 2007",
          ChicagoMay13_2007: "Chicago May 13, 2007",
          
          OurFriends: 'Our Friends',
          DorjsurenFamily: "Dorjsuren's<br> family",
          CornellUniversityIthacaNY_July2003: "Cornell University, Ithaca NY, July 2003",
          NiagaraFallsNY_September2001: "Niagara Falls, NY, September 2001",
          FrederickMarylandNovember2001: "Frederick, Maryland, November 2001",
          BattogtokhFamily: "Battogtokh's<br> family",
          WashingtonDC_May2003: "Washington DC, May 2003",
          MoscowStateUniversity1983: "Moscow State University, 1983",
          BayaraaChimgee: "Bayaraa &<br> Chimgee",
          UlaanbaatarMongoliaDecember1994: "Ulaanbaatar, Mongolia, December 1994",
          Moscow1984: "Moscow, 1984",
          UlaanbaatarMongolia2001: "Ulaanbaatar, Mongolia, 2001",
          Boldoo: "Boldoo",
          UlaanbaatarMongolia1992: "Ulaanbaatar, Mongolia, 1992",
          SeventhGrade: "7th grade",
          Moscow1985: "Moscow, 1985",
          MendeeFamily: "Mendee's<br> family",
          UlaanbaatarMongolia1994: "Ulaanbaatar, Mongolia, 1994",
          Moscow1983: "Moscow, 1983",
          UlaanbaatarMongolia1983: "Ulaanbaatar, Mongolia, 1983",
          UlaanbaatarMongoliaJuly2001: "Ulaanbaatar, Mongolia, July 2001",
          GambaaFamily: "Gambaa's<br> family",
          Baigalaa: "Baigalaa",
          WashingtonDC_Summer2000: "Washington DC, Summer 2000",
          Serge: "Serge",
          Mongolia2001: "Mongolia, 2001",
          NiagaraFallsNY_May2002: "Niagara Falls, NY, May 2002",
          IthacaNY_May2002: "Ithaca NY, May 2002",
          SergeSonNewZealand2004: "Serge\'s son, New Zealand, 2004",
          Petre: "Petre",
          PetreMassaAndMunkSyracuseNY_Winter1996: "Petre, Massa, and Munk, Syracuse NY, Winter 1996",
          PetreSyracuseNY_Summer1996: "Petre, Syracuse, NY, Summer 1996",
          SyracuseUniversityNY1997: "Syracuse University, NY, 1997",
          ThanksgivingSyracuseNY1998: "Thanksgiving, Syracuse NY, 1998",
          Tav: "Tav",
          SyracuseSummer2000: "Syracuse, Summer 2000",
          Liz_Bahri: "Liz &<br> Bahri",
          MariaLizAndShaySyracuseSummer2002: "Maria, Liz, and Shay, Syracuse, Summer 2002",
          Christmas2002Syracuse: "Christmas 2002, Syracuse",
          ElizabethAndMariaAugust2002: "Elizabeth and Maria, August 2002",
          Maria_Jose: "Maria &<br> Jose",
          MariaAndJoseChristmas2002Syracuse: "Maria and Jose, Christmas 2002, Syracuse",
          Bahri_MariaAndShayChristmas2002Syracuse: "Bahri, Maria, and Shay, Christmas 2002, Syracuse",
          BahriJoseShayAndJosesSonAtMariasHouseWinter2002: "Bahri, Jose, Shay, and Jose\'s son, at Maria\'s house, Winter 2002",
          JoseShayAndMariaChristmas2002Syracuse: "Jose, Shay, and Maria, Christmas 2002, Syracuse",
          Julan: "Julan",
          JulanAndEvanSyracuseUniversityJune2003FS: "Julan and Evan (in the front seat), Syracuse University, June 2003",
          JulanAndEvanSyracuseUniversityJune2003: "Julan and Evan, Syracuse University, June 2003",







        },
      },
      mn: {
        translation: {
          English: "Англи",
          Mongolian: "Монгол",
          WelcomeToMyFamilyHomepage: "Манай гэрийн хуудастай танилцана уу!",
          Home: "Нүүр хуудас",
          Shay: "Ишээ",
          Bayar: "Баяр",
          Munk: "Мөнхөө",
          FamilyPictures: 'Гэр бүлийн зургууд',
          FamilyAlbum: 'Гэрийн альбом',
          Mongolia : 'Монгол',
          Russia: 'Орос улс',
          USA: 'АНУ',
          Other: 'Бусад',
          FamilyEvents: 'Гэрийн Үйл Явдал',
          Friends: 'Найз нөхөд',
          Khulan: 'Хулан',
          Naadam2007: 'Наадам 2007',
          UpdatedOn: '2023 оны 11-р сарын 28нд шинэчлэв',
          UpdateHelloWorldBabybossComFamilyHomepagedOn: 'Та бүхэнд мэнд хүргэе! Babyboss.com бол манай гэрийн хуудас. Энд ирсэнд баярлалаа. Миний нэр Ишээ (товчхоноор). Доорхи зурагт миний хүү Мөнх болон миний нөхөр Баяр байна.',
          WeLivedInUSAforLast13Years: 'Бид өнгөрсөн 13 жил АНУ-д (Сиракуз, Итака, Александриа хотуудад) амъдарч байгаад саяхан Канад улсын Торонто хотод нүүж ирлээ. Уг веб хуудсыг анх 1999 онд гаргасан юм. Одоогоор би үүнийг сайжруулахаар ажиллаж байна. Та манай веб хуудсыг оип ойрхон үсаж байгаарай.',
          HaveFun: 'Тавтай сонирхоно уу!',
          WelcomeToShaysPage: 'Ишээгийн хуудсанд тавтай морилоно уу.',
          IshkhandTumaatsagaan: 'Ишханд Тумаацагаан',
          Homepage: 'Гэрийн хуудас',
          ContactInformation: 'Холбоо барих хаяг',
          Email: 'Емайл',
          Phone: 'Утас',
          Cell: 'Гар',
          Resume: 'Резюме',
          ResumeIn: 'Резюме',
          HTML: 'ЧТМЛ',
          MSWord: 'МС ВОРД',
          PlainText: 'жирийн текст',
          Format: 'форматаар',
          FewWordsAboutMe: 'Миний тухай хэдэн үг',
          IAmWebDeveloper: 'Би веб зохион бүтээгч. Би Сиракузын Их Сургуулийн Мэдээлэл Технологийн ангийг 2004 онд мастер зэрэгтэйгээр төгссөн. Би ПЧП, АСП, СКЛ зэрэг технологуудыг ашиглан динамик веб хуудсуудыг зохион бүтээх туршлагатай.Дэлгэрэнгүй мэдээлэлийг миний резюмегээс уншна уу',
          SomeExamplesOfProjects: 'Миний бүтээлийн зарим жишээ',
          Online: 'Онлайн',
          OnlineMusicStore: 'Онлайн хөгжмийн дэлгүүрийн',
          OnlineDiscussion: 'Онлайн хэлэлцэлэгийн',
          MusicStore: 'Хөгжмийн дэлгүүр',
          AdministrativePages: 'Захиргааны хуудсууд',
          Forum: 'Форум',
          FrontEnd: '',
          PasswordProtected: 'пасвордоор хамгаалалттай',
          WelcomeToBayarsPage: 'Баярын хуудсанд тавтай морилоно уу.',
          MyNameIsBayar: 'Миний нэр Баяр. Би физикч. Би багшлах ба програмчлах дуртай. Энэ хуудас одоохондоо дуусаагүй байгаа. Дараа дахин ирж үзнэ үү.',
          WelcomeToMunksPage: 'Мөнхөөгийн хуудсанд тавтай морилоно уу.',
          MyNameIsMunk: 'Миний нэр Мөнхөө. Би дугуй унах дуртай. Би мөн хөл бөмбөг тоглох дуртай.',
          SomeJavaScriptExamples: 'Зарим Жаваскрипт Жишээнүүд',
          ClickToSeeScripts: 'Скриптүүд харахий тулд товч дарна уу',
          ClickToSeeLargerPictures: 'Зурган дээр дарж томсгоно уу',
          ShayIrkutsk1982: "Ишээ, Эрхүү хот, 1982",
          ShayUlanbaatar10YearOld: "Ишээ, Улаанбаатар, 10 настай",
          ShayNairamdalSummerCamp1975: "Ишээ, Найрамдал зуслан, 1975",
          Shay3YearOld: "Ишээ, 3 настай",
          Bayar1982: "Баяраа, 1982",
          Bayar1YearOld: "Баяраа, 1 настай",
          Bayar4YearOld: "Баяраа, 4 настай",
          BayarMoscow7YearOld: "Баяраа, Москва, 7 настай",
          Munk2004: "Мөнхөө 2004",
          MunkMongolia3YearOld: "Мөнхөө, Монгол, 3 настай",
          Munk1YearOld: "Мөнхөө, 1 настай",
          MunkSyracuse10YearOld: "Мөнхөө, Сиракуз, 10 настай",
          ShaysParents: "Ишээгийн эцэг эх",
          ShaysMom: "Ишээгийн ээж",
          ShaysDad: "Ишээгийн аав",
          BayarsParents: "Баярын эцэг эх",
          BayarsMom: "Баярын ээж",
          BayarsDad: "Баярын аав",
          InMongolia: 'Монголд',
          Family: "Төрөл садан",
          Bayangol: "Баянгол",
          BataaOyunFamily: "Батаа Оюуны гэр бүл",
          BaatarAriunaaFamily: "Баатар Ариунаагийн гэр бүл",
          InRussia: 'Оросод',
          Itkutsk: "Эрхүү",
          Moscow: "Москва",
          Abramtsevo: "Абрамцево",
          Hemelnitsk: "Хмелницкий",
          StPetersburg: "Петербург",
          UstIlimsk: "Усть-Илимск",
          InAmerica: 'Америкд',
          Washington: "Вашингтон",
          Syracuse: "Сиракуз",
          Ithaca: "Итака",
          Rochester: "Рочестер",
          NewYorkCity: "Ню Йорк",
          WashingtonDCJune2000: "Вашингтон, АНУ, 2000 оны 6 сар",
          WashingtonDCMay2003: "Вашингтон, АНУ, 2003 оны 5 сар",
          MooreAveSyracuseMarch1999: "Моор гудамж дахь гэр, Сиракуз, 1999",
          MunkAndAlexSkytopSyracuse1997: "Мөнх Алех хоёр, Сиракуз, 1997",
          MunkSyracuse1997: "Мөнх, Сиракуз, 1997",
          FistFishSyracuse1999: "Анхны загас, Сиракуз, 1999",
          TsagaanSarIthacaFebruary2003: "Цагаан сар, Итака, 2003 оны 2 сар",
          MuseumOfArtIthacaJanuary2003: "Дүрслэх Урлагийн музей, Итака, 2003 оны 1 сар",
          WinterVacationIthacaJanuary2003: "Өвлийн амралтаар, Итака, 2003 оны 1 сар",
          SeaBreezeRochesterNY2002: "Си Бриз парк, 2002 он",
          NewYorkFebruary2003: "Ню Йорк, 2003 оны 2 сар",
          LibertyIslandNewYorkJuly26_2003: "Эрх Чөлөөний Арал, Ню Йорк, 2003 оны 7 сарын 26",
          DowntownNewYorkJuly26_2003: "Хотын төв, Ню Йорк, 2003 оны 7 сарын 26",
          InOtherCountries: 'Бусад Оронд',
          Italy: "Итали",
          BayarAndPetreTriesteItaly1994: "Баяр Петрээ хоёр, Триест, Итали 1994",
          MongolGerForSaleTriesteItaly1995: "Монгол гэр, Триест, Итали 1995",
          TriesteItaly1994: "Триест, Итали 1994",
          VeniceItaly1995: "Венеци, Итали 1995",
          MiramareCastleTriesteItaly1994: "Мирамар Ордон, Триест, Итали 1994",
          At_ICTP_TriesteItaly1994: "Триест, Итали 1994",
          HomeTriesteItaly1994: "Гэрийн гадаа, Триест, Итали 1994",
          DiplomaCourseICTP_TriesteItaly1994: "Ангийхан, Триест, Итали 1994",
          Austria: "Австри",
          AtJargalHomeViennaAustria1994: "Жаргалынд, Виен, Австри, 1994",
          MunkGraduationLeviMiddleSchool2000: "Мөнхөөгийн төгсөлт<br>Леви дунд сургууль<br> 2000",
          GraduationCeremonyLeviMiddleSchoolSyracuse2000: "Төгсөлтийн ёслол, Леви дунд сургууль, 2000 он",
          BayarGraduationSyracuseUniversity2001: "Баярын төгсөлт<br>Сиракузын Их Сургууль 2001",
          GraduationCeremonySyracuseUniversityMay2001: "Төгсөлтийн ёслол, Сиракузын Их Сургууль, 2001 оны 5 сар",
          VisitNewYorkCity2003: "Ню Йоркын аялал<br> 2001",
          LibertyIslandNY2003: "Эрх чөлөөний арал, Ню Йоркын, 2001",
          CampingTremanStateParkJune27_2003: "Хээр хонуут, Треман Парк<br> 2003 оны 6 сарын 27",
          VeryFirstCampingInOurFamilyHistory: "Энэ бол манай гэрийн ахны хээр хонуут явсан нь",
          LetchworthStateParkJuly13_2003: "Летчворв Парк<br> 2001 оны 7 сарын 13",
          TheUpperFallAndRailroadBridge: "Дээд хүрхрээ ба төмөр замын гүүр",
          ViewFromTheBridge: "Гүүрэн дээрээс",
          ShayGraduationSyracuseUniversityMay2004: "Ишээгийн төгсөлт<br>Сиракузын Их Сургууль<br> 2004 оны 5 сар",
          ShayGraduationSchoolOfInformationStudies: "Ишээгийн төгсөлт<br>Мэдээлэл Технологийн Сургууль",
          ShayGraduationMay8_2004: "Ишээгийн төгсөлт<br>Мэдээлэл Технологийн Сургууль, 2004 оны 5 сарын 8",
          MunkGraduationIthacaHighSchoolJune2004Br: "Мөнхөөгийн төгсөлт<br>Итака дунд сургууль<br> 2004 оны 6 сар",
          MunkGraduationIthacaHighSchoolJune2004: "Мөнхөөгийн төгсөлт, Итака дунд сургууль, 2004 оны 6 сар",
          WashingtonDCZooMay7_2006: "Вашингтоны амьтны хүрээлэн<br>2006 оны 5 сарын 7нд",
          AtTheWashingtonDCZooMay7_2006: "Вашингтоны амьтны хүрээлэнд 2006 оны 5 сарын 7нд",
          NewYearDecember31_2006Br: "Шинэ жил<br>2006 оны 12 сарын 31нд",
          NewYearDecember31_2006: "Шинэ жил 2006 оны 12 сарын 31нд",
          SixFlagsSummer2006Br: "Six Flags<br>2006 оны зун",
          SixFlagsSummer2006: "Six Flags 2006 оны зун",
          WashingtonDCJuly2006: "Вашингртон<br>2006 оны<br>7 сар",
          WashingtonDCNaadamJuly15_2007Br: "Вашингртоны Наадам<br>2007 оны<br>7 сарын 15",
          WashingtonDCNaadamJuly15_2007: "Вашингртоны Наадам 2007 оны 7 сарын 15",
          ChicagoMay13_2007Br: "Чикаго<br>2007 оны<br>5 сарын 13",
          ChicagoMay13_2007: "Чикаго 2007 оны 5 сарын 13",

          OurFriends: 'Найз нөхөд',
          DorjsurenFamily: "Доржсүрэнгийн<br> гэр бүл",
          CornellUniversityIthacaNY_July2003: "Корнелын Их Сургууль, Итака НЙ, 2003 оны 7 сар",
          NiagaraFallsNY_September2001: "Ниагара Хурхрээ, НЙ, 2001 оны 9 сар",
          FrederickMarylandNovember2001: "Фредерик, Мариланд, 2001 оны 11 сар",
          BattogtokhFamily: "Баттогтохын<br> гэр бүл",
          WashingtonDC_May2003: "Вашингтон, ДС, 2003 оны 5 сар",
          MoscowStateUniversity1983: "Москвагийн Их Сургууль, 1984",
          BayaraaChimgee: "Баяраа &<br> Чимгээ",
          UlaanbaatarMongoliaDecember1994: "Улаанбаатар, 1994 оны 12 сар",
          Moscow1984: "Москва, 1984",
          UlaanbaatarMongolia2001: "Улаанбаатар, 2001 он",
          Boldoo: "Болдо",
          UlaanbaatarMongolia1992: "Улаанбаатар, 1992",
          SeventhGrade: "7-р анги",
          Moscow1985: "Москва, 1985",
          MendeeFamily: "Мэндээгийн<br> гэр бүл",
          UlaanbaatarMongolia1994: "Улаанбаатар, 1994 он",
          Moscow1983: "Москва, 1983 он",
          UlaanbaatarMongolia1983: "Улаанбаатар, 1983 он",
          UlaanbaatarMongoliaJuly2001: "Улаанбаатар, 2001 оны 7 сар",
          GambaaFamily: "Гамбаагийн<br> гэр бүл",
          Baigalaa: "Байгалаа",
          WashingtonDC_Summer2000: "Вашингтон, ДС, 2000 оны зун",
          Serge: "Сэргэлэн",
          Mongolia2001: "Монгол, 2001",
          NiagaraFallsNY_May2002: "Ниагара Хурхрээ, НЙ, 2002 оны 5 сар",
          IthacaNY_May2002: "Итака НЙ, 2002 оны 5 сар",
          SergeSonNewZealand2004: "Сэргэлэнгийн хүү, Шинэ Зиланд, 2004",
          Petre: "Петрээ",
          PetreMassaAndMunkSyracuseNY_Winter1996: "Петрээ, Маса, Мөнхөө гурав, Сиракуз, 1996 он",
          PetreSyracuseNY_Summer1996: "Петрээ, Сиракуз, 1996 он",
          SyracuseUniversityNY1997: "Сиракузын Их сургууль, 1997 он",
          ThanksgivingSyracuseNY1998: "Ургацын баяр, Сиракуз, 1998 он",
          Tav: "Тав",
          SyracuseSummer2000: "Сиракуз, 2000 оны зун",
          Liz_Bahri: "Лиз Бахри<br> хоёр",
          MariaLizAndShaySyracuseSummer2002: "Мария, Лиз, Ишээ гурав, Сиракуз, 2002 оны зун",
          Christmas2002Syracuse: "2002 оны Кристосын баяр, Сиракуз",
          ElizabethAndMariaAugust2002: "Лиз, Мария хоёр, 2002 оны 8 сар",
          Maria_Jose: "Лиз Бахри<br> хоёр",
          MariaAndJoseChristmas2002Syracuse: "Мария, Хосэ хоёр, 2002 оны Кристосын баяр, Сиракуз",
          Bahri_MariaAndShayChristmas2002Syracuse: "Бахри, Мария, Ишээ гурав, 2002 оны Кристосын баяр, Сиракуз",
          BahriJoseShayAndJosesSonAtMariasHouseWinter2002: "Бахри, Хосэ, Ишээ, Хосээгийн хүү нар, Мариягийн гэрт, 2002 оны өвөл",
          JoseShayAndMariaChristmas2002Syracuse: "Хосэ, Ишээ, Мария нар, 2002 оны Кристосын баяр, Сиракуз",
          Julan: "Жюлан",
          JulanAndEvanSyracuseUniversityJune2003FS: "Жюлан Еван хоёр (эхний эгнээнд), Сиракузын Их сургууль, 2003 оны 6 сар",
          JulanAndEvanSyracuseUniversityJune2003: "Жюлан Еван хоёр, Сиракузын Их сургууль, 2003 оны 6 сар",






        },
      },
    },
  });

export default i18n;
