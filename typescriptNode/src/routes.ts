import {Request, Response} from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({name: "NodeJS", duration: 20, educator: "Pedro"});

    CreateCourseService.execute({name: "ReactJS", educator: "Pedro"});


    return response.send();
}
