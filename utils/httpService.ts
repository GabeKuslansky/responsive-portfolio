export default class HttpService {
    static get(url: string) {
        return fetch(url);
    }
}