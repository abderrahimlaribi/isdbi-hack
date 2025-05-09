import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';
import * as FormData from 'form-data';
import { AI_SERVICE_URLS, DOCUMENT_PARSER_URL } from '../common/constants';

@Injectable()
export class GatewayService {
  async handleRequest(service: string, text?: string, file?: Express.Multer.File) {
    if (!text && !file) throw new BadRequestException('No input provided.');

    let finalText = text || '';

    if (file) {
      const formData = new FormData();
      formData.append('file', file.buffer, file.originalname);

      // const parsed = await axios.post(DOCUMENT_PARSER_URL, formData, {
      //   headers: formData.getHeaders(),
      // });
      const parsed = { text: " a file is parsed" };
      
      // Append document text to existing text if both exist
      if (parsed.text) {
        finalText = finalText ? `${finalText}\n${parsed.text}` : parsed.text;
      }
    }

    const serviceUrl = AI_SERVICE_URLS[service];
    if (!serviceUrl) throw new BadRequestException('Invalid service name');

    // const response = await axios.post(serviceUrl, { text: finalText });
    // return response.data;
    return { text : finalText }
  }
}
