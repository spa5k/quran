import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={clsx(
			'focus:ring-border data-[state=unchecked]:bg-tertiary data-[state=checked]:bg-secondary focus:outline-border dark:data-[state=checked]:bg-text_button peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={clsx(
				'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5',
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
