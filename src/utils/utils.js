export function formatPrice(price){
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price)  
 }
 
   export const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
   
 
 export function listOfMonths(data){
   
   let meses = []
   let validate = []
  data?.map(curso => {
    const originalDate = curso.start_date
    const month = new Date(curso.start_date).getMonth();
   
    if(!validate.includes(mes[month])) {
 
      meses.push({month:mes[month], date: originalDate})
    }
   
    
    validate.push(mes[month])
   
 
 })
 return meses
 }
 
 
 export function getDate(date){
   return new Intl.DateTimeFormat('en-US').format(new Date(date))
 }