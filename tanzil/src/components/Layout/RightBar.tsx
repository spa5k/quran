// eslint-disable-next-line no-restricted-imports
import { DailyAyat } from "@/features/salah/components/DailyAyat.js";

export default function RightBar(): JSX.Element {
	return (
		<div className='h-full basis-1/4'>
			<Salah />
			<DailyAyat />
		</div>
	);
}
