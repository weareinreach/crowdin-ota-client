import { HttpClient } from '../../model';

export class FetchHttpClient implements HttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const json = await response.json();
        return json as T;
    }
}
