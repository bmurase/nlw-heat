import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;
    const { user_id } = request;

    const service = new CreateMessageService();

    try {
      const result = await service.execute(text, user_id);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}

export { CreateMessageController };