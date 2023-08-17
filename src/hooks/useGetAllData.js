import axios from 'axios'
import { useEffect, useState } from 'react'
import adapterData from './adapterData'

export default function useGetAllData() {
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    })
    const getData = async () => {
        const api = await axios.get('https://eokyg5j5on90it0.m.pipedream.net')
        const adapterApi = adapterData(api.data.data)
        console.log(api)
        try {
            setState({
                data: adapterApi,
                loading:false,
                error:null
            })
            
        } catch (error) {
            setState({
                data: [],
                loading:false,
                error: error.message
            })
            
        }
    }
    useEffect(()=>{
        getData()
    }, [])

  return {
    ...state
    }  
}
