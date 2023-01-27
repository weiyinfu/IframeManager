import axios from "axios";

const host = "http://10.227.30.19:8001"
export const cli = axios.create()

cli.interceptors.request.use((config) => {
    if (!config.url) return config;
    config.url = rewriteUrl(config.url)
    return config
})

function rewriteUrl(url: string): string {
    console.log(`rewriteUrl ${url}`)
    if (location.href.startsWith('https://pico.web.bytedance.net/') || location.href.startsWith("http://10.227.30.19")) {
        //electron
        url = `${host}${url}`
        console.log(url)
        return url;
    }
    return url;
}
export function getBookList(){
  return cli.get("/api/book_list")
}
export function getBook(book:string){
  return cli.get("/api/get_book",{
    params:{
      book
    }
  })
}