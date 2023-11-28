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
          UpdateHelloWorldBabybossComFamilyHomepagedOn: 'Hello World! Babyboss.com is a family homepage. Thanks for finding us. My name is Shay (nick name). Here are my baby boy Munk and my husband Bayar.',
          WeLivedInUSAforLast13Years: 'We lived in USA for last 13 years (Syracuse, NY and Ithaca, NY, Alexandria VA.) Now we just moved in Toronto Canada. This homepage has been published in 1999. Currently I am working on it to improve its disign and content. Please visit us more often.',
          HaveFun: 'Have fun!',
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


        },
      },
    },
  });

export default i18n;
