import axios from 'axios'



export const getChartList = params => axios.get('/api/getCart/list').then(res=>res.data)
//------------------------api list
