const fetchData = async (url: string, timeout: number = 5000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, {
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

  export default fetchData
