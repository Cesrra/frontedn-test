class Filter {
  
  constructor() {
    this.filters = [
      {id: 1},
      {id: 2},
      {id: 3}
    ]
    this.selectedFilters = [];
  }

  clearFilters() {
    this.selectedFilters = []
  }

  getFilters() {
    const result = this.filters.filter((filt, i) => {
      const isThere = this.selectedFilters.find(select => select.id == filt.id)
      if(!isThere){
        return filt
      }
    })

    return result
  }

  selectFilter(id, status) {
    if(status){
      this.selectedFilters.push({id})
    }else {
      const index = this.selectedFilters.indexOf(id)
      this.selectedFilters.splice(index, 1)
    }
  }

  countSelected() {
    return this.selectedFilters.length
  }

}

export default Filter;