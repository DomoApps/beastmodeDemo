// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data
domo.get('data/v1/salesTable?useBeastMode=true&fields=Date,Sales,Expenses,ProfitSum&groupby=Date&sum=Sales,Expenses')
    .then(data => {
      let list = "";
      data.forEach(row =>{
        list += `<li class="list-group-item">
          <span class="font-weight-bold">Date</span>: ${row.Date}, 
          <span class="font-weight-bold">Sales</span>: ${toCurr(row.Sales)}, 
          <span class="font-weight-bold">Expenses</span>: ${toCurr(row.Expenses)}, 
          <span class="font-weight-bold">Profit</span>: ${toCurr(row.ProfitSum)}
        </li>`
      })
      document.getElementById('byDate').innerHTML = list;
    });

domo.get('data/v1/salesTable?useBeastMode=true&fields=RepID,Sales,Expenses,Profit&groupby=RepID&sum=Sales,Expenses,Profit')
    .then(data => {
      let list = "";
      data.forEach(row =>{
        list += `<li class="list-group-item">
          <span class="font-weight-bold">Rep</span>: ${row.RepID}, 
          <span class="font-weight-bold">Sales</span>: ${toCurr(row.Sales)}, 
          <span class="font-weight-bold">Expenses</span>: ${toCurr(row.Expenses)}, 
          <span class="font-weight-bold">Profit</span>: ${toCurr(row.Profit)}
        </li>`
      })
      document.getElementById('byRep').innerHTML = list;
    });

domo.get('data/v1/salesTable?useBeastMode=true&fields=FullName,Sales,Expenses&groupby=FullName&sum=Sales,Expenses')
    .then(data => {
      let list = "";
      data.forEach(row =>{
        list += `<li class="list-group-item">
          <span class="font-weight-bold">Name</span>: ${row.FullName}, 
          <span class="font-weight-bold">Sales</span>: ${toCurr(row.Sales)}, 
          <span class="font-weight-bold">Expenses</span>: ${toCurr(row.Expenses)} 
        </li>`
      })
      document.getElementById('byName').innerHTML = list;
    });


    function toCurr(number){
      return number.toLocaleString('en', { style: 'currency', currency: 'USD' })
    }