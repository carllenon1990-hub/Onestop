import React from 'react';

interface VideoMetadata {
    title: string;
    timestamp: string;
    description: string;
}

const HistoryPanel: React.FC = () => {
    // Mock data for previously generated videos
    const videos: VideoMetadata[] = [
        { title: 'Video 1', timestamp: '2026-04-01 01:00:00', description: 'First generated video.' },
        { title: 'Video 2', timestamp: '2026-04-01 01:05:00', description: 'Second generated video.' },
        // Add more video metadata as needed
    ];

    return (
        <div>
            <h1>Video History</h1>
            <ul>
                {videos.map((video, index) => (
                    <li key={index}>
                        <strong>{video.title}</strong> - {video.timestamp}
                        <br />
                        <em>{video.description}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryPanel;