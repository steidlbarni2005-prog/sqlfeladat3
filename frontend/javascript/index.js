
document.addEventListener('DOMContentLoaded', async () => {
    getMethodFetch('http://127.0.0.1:3000/api/BRADAR')
        .then((data) => {
                      
            data.resul.forEach(element => {
              console.log('Diák:', element);
            });
   
        })

        .catch((error) => {
            console.error('Hiba: ', error.message);
        });
});


const getMethodFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`GET hiba: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Hiba történt: ${error.message}`);
    }
}

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
