import { Countries }  from "../types/types";

const fetchData = async (url: string, timeout: number = 20000) => {
    const controller  = new AbortController();
    const timeoutId   = setTimeout(() => controller.abort(), timeout);
    const response    = await fetch(url, {
      method:  'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    clearTimeout(timeoutId);
    if (response.ok) {
      return response.json()
    } else {
      const responseJson = await response.json()
      throw new Error(responseJson.message)
    }
}

const paginate = (array: Countries[],  page: number | null, limit: number | null) => {
  if(page && limit){
    return array.slice((page - 1) * limit, page * limit);
  }
}

export { fetchData, paginate }