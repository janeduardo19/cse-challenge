import { render, waitFor } from '@testing-library/react';
import { CroctProvider } from '@croct/plug-react';
import croct from '@croct/plug';
import { SlotContent } from '@croct/plug/fetch';
import HomeBanner from './HomeBanner';
import { Suspense } from 'react';

describe('<HomeBanner />', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render the personalized content on success', async () => {
		const content: SlotContent<'home-banner'> = {
			title: 'Banner title',
			subtitle: 'Banner subtitle',
			cta: {
				label: 'Button',
				link: 'https://croct.com',
			},
		};

		const fetch = jest.spyOn(croct, 'fetch');

		fetch.mockResolvedValue({ payload: content });

		const { getByText } = render(
			<Suspense fallback="">
				<CroctProvider appId="00000000-0000-0000-0000-000000000000">
					<HomeBanner cacheKey="home-banner-success" />
				</CroctProvider>
			</Suspense>,
		);

		expect(fetch).toHaveBeenCalledWith('home-banner');

		expect(getByText('Experience up to 20% more revenue faster')).toBeInTheDocument();
		expect(getByText('Deliver tailored experiences that drive satisfaction and growth.')).toBeInTheDocument();
		expect(getByText('Discover how')).toBeInTheDocument();

		await waitFor(() => {
			expect(getByText(content.title)).toBeInTheDocument();
			expect(getByText(content.subtitle)).toBeInTheDocument();
			expect(getByText(content.cta.label)).toBeInTheDocument();
		});
	});

	it('should render the fallback content on error', async () => {
		const fetch = jest.spyOn(croct, 'fetch');

		fetch.mockRejectedValue(new Error('failure'));

		const { getByText } = render(
			<Suspense fallback="">
				<CroctProvider appId="00000000-0000-0000-0000-000000000000">
					<HomeBanner cacheKey="home-banner-fallback" />
				</CroctProvider>
			</Suspense>,
		);

		expect(fetch).toHaveBeenCalledWith('home-banner');

		expect(getByText('Experience up to 20% more revenue faster')).toBeInTheDocument();
		expect(getByText('Deliver tailored experiences that drive satisfaction and growth.')).toBeInTheDocument();
		expect(getByText('Discover how')).toBeInTheDocument();

		await waitFor(() => {
			expect(getByText('Experience up to 20% more revenue faster')).toBeInTheDocument();
			expect(getByText('Deliver tailored experiences that drive satisfaction and growth.')).toBeInTheDocument();
			expect(getByText('Discover how')).toBeInTheDocument();
		});
	});
});
