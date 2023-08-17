export default function adapterData(data) {
    if (!Array.isArray(data)) return data
    return data.map(e => {
      return {
        id: e.id,
        name: e.name,
        category: e.category,
        brand: e.brand,
        perishable: e.perishable,
        expiration_date: e.expiration_date ? e.expiration_date.slice(0, 10) : null,
        image_url: e.image_url,
        stock: e.stock
      }
    })
  }