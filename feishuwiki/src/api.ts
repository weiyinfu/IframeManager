import axios from "axios";

export const cli = axios.create()

cli.interceptors.request.use((config) => {
    if (!config.url) return config;
    config.url = rewriteUrl(config.url)
    return config
})

function rewriteUrl(url: string): string {
    console.log(`rewriteUrl ${url}`)
    if (url.startsWith('/api/')) {
        url = `http://${location.host}:8001${url}`
    }
    return url;
}

export function getBookList() {
    return cli.get("/api/book_list")
}

export function getBook(book: string) {
    return cli.get("/api/get_book", {
        params: {
            book
        }
    })
}

