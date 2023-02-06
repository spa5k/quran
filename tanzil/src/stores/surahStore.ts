import { Ayah } from '@/utils/bindings.js';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const mushaf = new MushafApi();

type State = {
	quranTextEdition: string;
	translationTextEdition: string;
	transliterationTextEdition: string;
	directionTranslation: Direction;
	directionTransliteraion: Direction;
};

type Actions = {
	changeQuranTextEdition: (edition: string) => void;
	fetchQuranText: (number: number) => Promise<Ayah[]>;
};

export const surahStore = create<State & Actions>()(devtools(persist(
	persist((set, get) => ({
		changeQuranTextEdition: (edition) => set(() => ({ quranTextEdition: edition })),
		quranTextEdition: 'ara-quranuthmanihaf',
		translationTextEdition: 'ara-quranuthmanihaf',
		transliterationTextEdition: 'ara-quranuthmanihaf',
		fetchQuranText: async (number) => {
			return await mushaf.ayahsByChapter(number, get().quranTextEdition);
		},
		directionTranslation: 'LTR' as Direction,
		directionTransliteraion: 'LTR' as Direction,
	}), {
		name: 'surah',
		getStorage: () => hashStorage,
	}),
	{
		name: 'surah',
	},
)));

if (process.env.NODE_ENV !== 'production') {
	mountStoreDevtool('surahStore', surahStore);
}

const getEdition = (string: string) => {
	const quranTransliteration = /^ara_quran.*la$/;
	const quranRegex = /^ara_quran(?!.*(la\d*)$)/;
	const genericTransliteration = /^(?!ara_quran).*(la$|la*$)/;
	if (string.match(quranTransliteration) || string.startsWith('ara_quran') && string.includes('la')) {
		return Type.QURAN_TRANSLITERATION;
	}
	if (string.match(quranRegex) || string.startsWith('ara_quran') && !string.includes('la')) {
		return Type.QURAN;
	}
	if (string.match(genericTransliteration) && !string.startsWith('ara_quran') && string.includes('la')) {
		return Type.TRANSLITERATION;
	}
	return Type.TRANSLATION;
};

enum Direction {
	LTR = 'ltr',
	RTL = 'rtl',
}

enum Type {
	TRANSLATION = 'translation',
	QURAN = 'quran',
	TRANSLITERATION = 'transliteration',
	QURAN_TRANSLITERATION = 'quran_transliteration',
}
