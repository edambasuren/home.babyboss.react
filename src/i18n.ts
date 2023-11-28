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


        },
      },
    },
  });

export default i18n;
