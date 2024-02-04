export class ChartItem
{
    transactionDate: Date;
    amount: number;
    isPrimary: boolean = true;

    constructor(date: Date, amount: number, isPrimary: boolean) 
    {
        this.transactionDate = date;
        this.amount = amount;
        this.isPrimary = isPrimary;
    }
}