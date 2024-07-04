import { Request, Response } from "express";

import { DeleteJobUsecase } from "./DeleteJobUsecase.js";

export class DeleteJobController {
  constructor(private deleteJobUseCase: DeleteJobUsecase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { jobId } = req.params;

    await this.deleteJobUseCase.execute(jobId);

    return res.status(204).send();
  }
}
