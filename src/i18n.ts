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
          FamilyEvents: 'Family events',
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
          ShayИркутск1982: "Shay, Иркутск, 1982",




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
          FamilyEvents: 'Гэрийн үйл явдал',
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
          ShayИркутск1982: "Ишээ, Эрхүү хот, 1982",




        },
      },
    },
  });

export default i18n;
