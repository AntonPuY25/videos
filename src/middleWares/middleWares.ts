import {NextFunction, Request, Response} from "express";
import {getCurrentFieldError} from "../helpers/helpers";



export const  titleCorrectValidatorMiddleWare = (req:Request, res:Response, next:NextFunction)=>{
    const title = req.body.title;
    if(!title || !title.length ){
        res.status(400).send(getCurrentFieldError('title', 'incorrect Title'))
        return
    }else{
        next()
    }
}

export const titleMaxLengthValidator = (req:Request, res:Response, next:NextFunction)=>{
    const title = req.body.title;
    if(title && title.length > 40 ){
        res.status(400).send(getCurrentFieldError('title', 'Title length is not valid'))
        return
    }else{
        next()
    }
}