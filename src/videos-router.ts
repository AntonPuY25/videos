import {Router, Request, Response,} from 'express';
import {
    titleCorrectValidatorMiddleWare,
    titleMaxLengthValidator
} from "./middleWares/middleWares";
import {videosRepositories} from "./reposotories/videos-repositories";

export const videoRoute = Router({})


videoRoute.get('/', (req: Request, res: Response) => {
    res.send(videosRepositories.getVideo())
})

videoRoute.get('/:id', (req: Request, res: Response) => {
    const videoId = Number(req.params.id);

    try {
        const currentVideo = videosRepositories.findVideo(videoId)
        if (currentVideo) {
            res.send(currentVideo)
        } else {
            throw new Error()
        }
    } catch (e) {
        res.send(404)
    }
})

videoRoute.post('/', titleCorrectValidatorMiddleWare, titleMaxLengthValidator, (req: Request, res: Response) => {
    const title = req.body.title;
    const newVideo = videosRepositories.createVideo(title)

    res.send(newVideo).status(201)

})

videoRoute.put('/:id', titleCorrectValidatorMiddleWare, titleMaxLengthValidator, (req: Request, res: Response) => {
    const videoId = Number(req.params.id);
    const title = req.body.title;

    const currentVideo = videosRepositories.updateVideo(videoId, title)

    try {

        if (currentVideo) {
            res.send(204)
        } else {
            throw new Error('404')
        }
    } catch (e: any) {
        if (e?.message) {
            res.send(Number(e.message))
        } else {
            res.send(404)
        }

    }
})

videoRoute.delete('/:id', (req: Request, res: Response) => {
    const videoId = Number(req.params.id);
    const currentVideo = videosRepositories.deleteVideo(videoId);
    try {
        if (currentVideo) {
            res.send(204)
        } else {
            throw new Error()
        }
    } catch (e) {
        res.send(404)
    }
})

