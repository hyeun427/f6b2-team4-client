export const getDate = (date: string | number | Date) => {
  const newDate = new Date(date);
  const yyyy = String(newDate.getFullYear()).padStart(4, '0');
  const mm = String(newDate.getMonth() + 1).padStart(2, '0');
  const dd = String(newDate.getDate()).padStart(2, '0');
  const yyyymmdd: String = `${yyyy}-${mm}-${dd}`;
  return yyyymmdd;
};

export const getLangCode = (newLang: string) => {
  const langList = [
    '한국어',
    'English',
    '日本語',
    'español',
    'Français',
    '中国',
  ];

  const newLangCode = ['ko', 'en', 'ja', 'es', 'fr', 'zh'];

  const index = langList.indexOf(newLang);

  return newLangCode[index];
};
