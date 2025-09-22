import { Injectable } from '@nestjs/common';

// Service-ის როლი: Business Logic:
//მონაცემების დამუშავება
// ბიზნეს წესების განხორციელება
// Database-თან Ï
// External API calls
// Data validation

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
