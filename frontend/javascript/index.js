
document.addEventListener('DOMContentLoaded', async () => {
    getMethodFetch('http://127.0.0.1:3000/api/diakok')
        .then((data) => {
            console.log('Fetched data:', data);
        })
        .catch((error) => {
            console.error('Hiba: ', error.message);
        });
});


const getMethodFetch = (url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Hiba: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(`Hiba történt: ${error.message}`);
      });
  };

  const postFetch= async(url,data)=>{
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        });
    
    if(!response.ok){
        throw new Error('hiba'+ response.statusText+'('+response.status+')')
    }
    return await response.json();
    }catch(error){
        throw new Error('hiba',error);
    }
}