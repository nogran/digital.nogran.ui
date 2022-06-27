import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://nogran-site.herokuapp.com/'
})

export const busca = async (url:any, setDados:any, header:any)=>{
    const resposta = await api.get(url,header)
    setDados (resposta.data)
}

// ---------Busca sem token---------
export const buscasemtoken = async (url:any, setDados:any)=>{
    const resposta = await api.get(url)
    setDados (resposta.data)
}

// export const buscaId = async (url:any, setDados:any, header:any)=>{
//     const resposta = await api.get(url,header)
//     setDados (resposta.data)
// }

// export const post = async (url: any, dados:any, setDados: any, header:any) => {
//     const resposta = await api.post(url, dados, header)
//     setDados(resposta.data)
// }

// ---------Post sem token---------
export const postsemtoken = async (url: any, dados:any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}