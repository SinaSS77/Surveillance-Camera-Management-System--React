import { render, screen, fireEvent } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('VideoCard component', () => {
  const videoUrl = 'https://example.com/video.mp4';
  const title = 'Test video';

  it('renders video player when status is 1', () => {
    render(<VideoCard videoUrl={videoUrl} title={title} status={1} />);
    const videoPlayer = screen.getByRole('video');
    expect(videoPlayer).toBeInTheDocument();
    expect(videoPlayer).toHaveAttribute('src', videoUrl);
  });

  it('renders image when status is not 1', () => {
    render(<VideoCard videoUrl={videoUrl} title={title} status={0} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', videoUrl);
  });

  it('displays title', () => {
    render(<VideoCard videoUrl={videoUrl} title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('opens video player dialog on click', () => {
    render(<VideoCard videoUrl={videoUrl} title={title} />);
    const cardActionArea = screen.getByRole('button');
    fireEvent.click(cardActionArea);
    const videoPlayer = screen.getByRole('video');
    expect(videoPlayer).toBeInTheDocument();
    expect(videoPlayer).toHaveAttribute('src', videoUrl);
  });
});
