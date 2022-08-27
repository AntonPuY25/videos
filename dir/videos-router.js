"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoute = void 0;
const express_1 = require("express");
const middleWares_1 = require("./middleWares/middleWares");
const videos_repositories_1 = require("./reposotories/videos-repositories");
exports.videoRoute = (0, express_1.Router)({});
exports.videoRoute.get('/', (req, res) => {
    res.send(videos_repositories_1.videosRepositories.getVideo());
});
exports.videoRoute.get('/:id', (req, res) => {
    const videoId = Number(req.params.id);
    try {
        const currentVideo = videos_repositories_1.videosRepositories.findVideo(videoId);
        if (currentVideo) {
            res.send(currentVideo);
        }
        else {
            throw new Error();
        }
    }
    catch (e) {
        res.send(404);
    }
});
exports.videoRoute.post('/', middleWares_1.titleCorrectValidatorMiddleWare, middleWares_1.titleMaxLengthValidator, (req, res) => {
    const title = req.body.title;
    const newVideo = videos_repositories_1.videosRepositories.createVideo(title);
    res.send(newVideo).status(201);
});
exports.videoRoute.put('/:id', middleWares_1.titleCorrectValidatorMiddleWare, middleWares_1.titleMaxLengthValidator, (req, res) => {
    const videoId = Number(req.params.id);
    const title = req.body.title;
    const currentVideo = videos_repositories_1.videosRepositories.updateVideo(videoId, title);
    try {
        if (currentVideo) {
            res.send(204);
        }
        else {
            throw new Error('404');
        }
    }
    catch (e) {
        if (e === null || e === void 0 ? void 0 : e.message) {
            res.send(Number(e.message));
        }
        else {
            res.send(404);
        }
    }
});
exports.videoRoute.delete('/:id', (req, res) => {
    const videoId = Number(req.params.id);
    const currentVideo = videos_repositories_1.videosRepositories.deleteVideo(videoId);
    try {
        if (currentVideo) {
            res.send(204);
        }
        else {
            throw new Error();
        }
    }
    catch (e) {
        res.send(404);
    }
});
//# sourceMappingURL=videos-router.js.map