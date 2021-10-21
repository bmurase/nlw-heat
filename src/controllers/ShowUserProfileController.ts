import { Request, Response } from 'express';
import { ShowUserProfileService } from '../services/ShowUserProfileService';

class ShowUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const service = new ShowUserProfileService();

    try {
      const result = await service.execute(user_id);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}

export { ShowUserProfileController };