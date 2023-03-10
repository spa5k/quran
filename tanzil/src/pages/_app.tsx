import { ErrorBoundary } from 'react-error-boundary';
import { ImperativePanelHandle, Panel, PanelGroup } from 'react-resizable-panels';
import 'virtual:fonts.css';

const ErrorFallback = () => {
	return (
		<div
			className='flex h-screen w-screen flex-col items-center justify-center'
			role='alert'
		>
			<h2 className='text-text text-lg font-semibold'>Ooops, something went wrong :(</h2>
			<Button className='mt-4' onClick={() => window.location.assign(window.location.origin)}>
				Refresh
			</Button>
		</div>
	);
};

const App = ({ children }: { children: React.ReactNode; }) => {
	const [hideText, sethideText] = useState(false);
	const ref = useRef<ImperativePanelHandle>(null);

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<section>
				<header>
				</header>

				<main className='bg-background text-text min-h-screen transition-all duration-150'>
					<PanelGroup autoSaveId='homepage' direction='horizontal'>
						<Panel
							defaultSize={10}
							minSize={3}
							maxSize={14}
							collapsible={false}
							ref={ref}
							onResize={(size) => {
								if (size <= 3) {
									sethideText(true);
								} else {
									sethideText(false);
								}
							}}
						>
							<ErrorBoundary FallbackComponent={ErrorFallback}>
								<LeftBar hideText={hideText} handler={ref} />
							</ErrorBoundary>
						</Panel>

						<ResizeHandler />

						<Panel minSize={30}>
							<Navbar />
							{children}
						</Panel>
						<ResizeHandler />
						<Panel defaultSize={20} minSize={20}>
							<RightBar />
						</Panel>
					</PanelGroup>
				</main>
			</section>
		</ErrorBoundary>
	);
};

export default App;
