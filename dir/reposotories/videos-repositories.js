"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRepositories = void 0;
const videos = [
    { id: 1, title: 'About JS - 01', author: 'Anton' },
    { id: 2, title: 'About JS - 02', author: 'Yana' },
    { id: 3, title: 'About JS - 03', author: 'Kirill' },
    { id: 4, title: 'About JS - 04', author: 'Byklya' },
    { id: 5, title: 'About JS - 05', author: 'Bob' },
];
exports.videosRepositories = {
    getVideo() {
        return videos;
    },
    findVideo(videoId) {
        return videos.find(({ id }) => videoId === id);
    },
    createVideo(title) {
        const newVideo = {
            id: +(new Date()),
            title,
            author: 'it-incubator.eu'
        };
        videos.push(newVideo);
        return newVideo;
    },
    deleteVideo(videoId) {
        const currentVideoId = videos.findIndex(({ id }) => videoId === id);
        if (currentVideoId !== -1) {
            return videos.splice(currentVideoId, 1);
        }
        else {
            return null;
        }
    },
    updateVideo(videoId, title) {
        const currentVideo = videos.find(({ id }) => videoId === id);
        if (currentVideo) {
            currentVideo.title = title;
            videos.splice(videoId - 1, 1, currentVideo);
            return videos;
        }
        else {
            return null;
        }
    }
};
//# sourceMappingURL=videos-repositories.js.map