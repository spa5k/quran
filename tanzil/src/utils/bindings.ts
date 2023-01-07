// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
	queries:
		| { key: 'ayahs'; input: number; result: Array<Ayahs>; }
		| { key: 'surah_info'; input: number; result: Surahs; }
		| { key: 'surah_list'; input: never; result: Array<Surahs>; }
		| { key: 'version'; input: never; result: string; };
	mutations: never;
	subscriptions: never;
};

export interface Ayahs {
	surah: number;
	ayah: number;
	indopak: string;
	uthmani: string;
	unicode: string;
	simple: string;
	warsh: string;
	tajweed: string;
}

export interface Surahs {
	id: number;
	revelation_order: number;
	bismillah_pre: string;
	name_simple: string;
	name_complex: string;
	name_arabic: string;
	ayah_start: number;
	ayah_end: number;
	page_start: number;
	page_end: number;
}