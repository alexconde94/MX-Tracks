import { ApiMessage } from './ApiMessage';

export class ApiResponse<T> {
    message: ApiMessage;
    content: T;
}