enum RestoCategory {
  SUSHI = 'SUSHI',
  UNAGI = 'UNAGI',
  TEMPURA = 'TEMPURA',
  TONKATSU = 'TONKATSU',
  YAKITORI = 'YAKITORI',
  SUKIYAKI = 'SUKIYAKI',
  SOBA = 'SOBA',
  RAMEN = 'RAMEN',
  YAKISOBA = 'YAKISOBA',
  OKONOMIYAKI = 'OKONOMIYAKI',
  DONBURI = 'DONBURI',
  ODEN = 'ODEN',
  KAISEKI = 'KAISEKI',
  HAMBAGU = 'HAMBAGU',
  TEPPANYAKI = 'TEPPANYAKI',
  CURRY = 'CURRY',
  YAKINIKU = 'YAKINIKU',
  NABE = 'NABE',
  CAFE = 'CAFE',
  IZAKAYA = 'IZAKAYA',
  OTHER = 'OTHER',
}

export const textByRestoCategory = {
  [RestoCategory.SUSHI]: '스시·해산물',
  [RestoCategory.UNAGI]: '장어',
  [RestoCategory.TEMPURA]: '덴푸라',
  [RestoCategory.TONKATSU]: '돈카츠·쿠시카츠',
  [RestoCategory.YAKITORI]: '야키토리·꼬치',
  [RestoCategory.SUKIYAKI]: '스키야키·샤브샤브',
  [RestoCategory.SOBA]: '소바·우동',
  [RestoCategory.RAMEN]: '라멘·츠케멘',
  [RestoCategory.YAKISOBA]: '야키소바',
  [RestoCategory.OKONOMIYAKI]: '오코노미야키·타코야키',
  [RestoCategory.DONBURI]: '덮밥',
  [RestoCategory.ODEN]: '오뎅',
  [RestoCategory.KAISEKI]: '가이세키·일식',
  [RestoCategory.HAMBAGU]: '함바그·오므라이스',
  [RestoCategory.TEPPANYAKI]: '스테이크·철판요리',
  [RestoCategory.CURRY]: '카레',
  [RestoCategory.YAKINIKU]: '야키니쿠·호르몬',
  [RestoCategory.NABE]: '나베',
  [RestoCategory.CAFE]: '카페·디저트',
  [RestoCategory.IZAKAYA]: '이자카야·바',
  [RestoCategory.OTHER]: '기타 일본 음식',
};

enum City {
  osaka = 'osaka',
  tokyo = 'tokyo',
  kyoto = 'kyoto',
  nagoya = 'nagoya',
  fukuoka = 'fukuoka',
  sapporo = 'sapporo',
  hiroshima = 'hiroshima',
  yokohama = 'yokohama',
  kobe = 'kobe',
}

export const TextByCity = {
  [City.osaka]: '오사카',
  [City.tokyo]: '도쿄',
  [City.kyoto]: '교토',
  [City.nagoya]: '나고야',
  [City.fukuoka]: '후쿠오카',
  [City.sapporo]: '삿포로',
  [City.hiroshima]: '히로시마',
  [City.yokohama]: '요코하마',
  [City.kobe]: '고베',
};

export const Cities = [
  'osaka',
  'tokyo',
  'kyoto',
  'nagoya',
  'fukuoka',
  'sapporo',
  'hiroshima',
  'yokohama',
  'kobe',
] as const;

export type TextByRestoCategoryKey = keyof typeof textByRestoCategory;
export type TextByCityKey = keyof typeof TextByCity;
