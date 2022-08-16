import {FunctionComponent, Suspense} from 'react';
import {Slot} from '@croct/plug-react';
import {SlotContent} from '@croct/plug/fetch';

type SlotProps = SlotContent<'home-banner'> & {
    loading?: boolean,
};

const defaultContent: SlotProps = {
    title: 'Experience up to 2% more revenue faster',
    subtitle: 'Deliver tailored experiences that drive satisfaction and growth.',
    cta: {
        label: 'Discover how',
        link: 'https://croct.link/demo',
    },
};

const initialContent: SlotProps = {
    ...defaultContent,
    loading: true,
};

const HomeBanner: FunctionComponent = ReactElement => (
	<Suspense fallback=":✨ Personalizing...">
		<Slot id="home-banner" initial={initialContent} fallback={defaultContent}>
			{({loading, title, subtitle, cta}: SlotProps) => (
				<div className={`hero${loading ? ' loading' : ''}`}>
					<h1>{title}</h1>
					<p className="subtitle">
						{subtitle}
					</p>
					<a href={cta.link} className="cta">{cta.label}</a>
				</div>
			)}
		</Slot>
	</Suspense>
);

export default HomeBanner;
