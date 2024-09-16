import { Edition } from "../api/edition";

export const quranEditions: Edition[] = [
  {
    id: 145,
    slug: "ara-quranindopak",
    author: "Indopak",
    direction: "rtl",
    type: "QURAN",
    name: "IndoPak",
    enabled: true,
    language: "arabic",
  },
  {
    id: 120,
    slug: "ara-quranuthmanihaf",
    author: "Quran Uthmani Hafs",
    direction: "rtl",
    type: "QURAN",
    name: "Uthmanic",
    enabled: true,
    language: "arabic",
  },
  {
    id: 146,
    slug: "ara-quranindopak",
    author: "Normal",
    direction: "rtl",
    type: "QURAN",
    name: "Normal",
    enabled: true,
    language: "arabic",
  },
  {
    id: 62,
    slug: "ara-quransimple",
    author: "Simple",
    direction: "rtl",
    enabled: true,
    language: "arabic",
    name: "Simple",
    type: "QURAN",
  },
  {
    id: 1,
    direction: "rtl",
    enabled: true,
    name: "King Fahd Complex v1",
    language: "arabic",
    author: "King Fahd Complex",
    slug: "ara-quran-kfc-v1",
    type: "QURAN_QFC",
  },
  {
    id: 2,
    direction: "rtl",
    enabled: true,
    name: "King Fahd Complex v2",
    language: "arabic",
    author: "King Fahd Complex",
    slug: "ara-quran-kfc-v2",
    type: "QURAN_QFC",
  },
];