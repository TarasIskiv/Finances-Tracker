import { SourceType } from "./source-type.enum";

export class SourceDetails
{
    name: string;
    amount: number;
    sourceType: SourceType = SourceType.Income;
    transactionDate: Date = new Date();
    tag: string;
    
    constructor(name: string, amount: number, sourceType: SourceType, tag: string, transactionDate: Date) {
        this.name = name;
        this.amount = amount;
        this.sourceType = sourceType;
        this.tag = tag;
        this.transactionDate = transactionDate;
    }
}