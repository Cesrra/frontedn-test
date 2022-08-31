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
    return this.filters.filter((filt, i) => {
      const compareFilt = this.selectedFilters[i]
      if(compareFilt == null){
        return filt
      }
    })
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