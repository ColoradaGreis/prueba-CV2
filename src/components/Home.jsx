import useGetAllData  from '../hooks/useGetAllData'
import { DataGrid } from '@mui/x-data-grid'
import s from './Home.module.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 80, },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'category', headerName: 'Category', width: 170 },
  { field: 'brand', headerName: 'Brand', sortable: false, width: 170 },
  { field: 'expiration_date', headerName: 'Expiration Date', width: 170 },

]


function Home() {
    const {data, loading, error} = useGetAllData()
    console.log('aca estoy en el home',data)

  const rows = data.map(u => { return { id: u.id, name: u.name, category: u.category, brand: u.brand, perishable: u.perishable, expiration_date: u.expiration_date, image_url: u.image_url, stock: u.stock } }
  )
  const imageColumn =[{
    field: 'image_url',
    headerName: 'Image',
    sortable: false, 
    width: 190,
    renderCell: (params) => (
      <img className={s.img} src={params.row.image_url} alt={params.row.name} />
    )
  }]
  const stockColumn = [{
    field: 'stock',
    headerName: 'Stock',
    sortable: true, 
    width: 80,
    renderCell: (params) => (
      <div>
        {
          params.row.stock < 0 ? <div className={s.danger}>{params.row.stock}</div> : <div className={s.green}>{params.row.stock}</div>
        }
      </div>
    )
  }]
return (
    <div>
        <h1>Tabla</h1>
        <div className='d-flex flex-wrap mx-md-5 p-md-5 gap-sm-5 gap-4 justify-content-center'>

        {
          loading
            ? <h3>Loading...</h3>
            : error
              ? alert(error) //eslint-disable-line
              :<div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                      className='fs-5 bg-white'
                      initialState={{
                        sorting: {
                          sortModel: [{ field: 'id', sort: 'asc' }]
                        }
                      }}
                      rows={rows}
                      columns={columns.concat(imageColumn).concat(stockColumn)}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                    />
              </div>
            

        }
</div>

    </div>
  )
}

export default Home