export const getTransactions = async () => {
  const tnx = [
    { id : 1, type : "credit", subject : "for data sub", amount: 10000, description: "Salary", date: "2026-06-11"},
    { id : 2,type : "debit", subject : "airtime sub", amount: 2000, description: "bread", date: "2026-06-7"},
    {id : 3,type : "debit", subject : "bread purchase", amount: 1000, description: "airtime", date: "2026-06-06"},
     {id : 4,type : "debit", subject : "liquor purchase", amount: 3000, description: "bank interest", date: "2026-06-04"},
      {id : 5,type : "credit", subject : "mum's gift", amount: 500, description: "gift", date: "2026-06-02"},
       {id : 6,type : "credit", subject : "screen guard purchase", amount: 1500, description: "mini work", date: "2026-06-01"}
  ]
    return tnx;
};