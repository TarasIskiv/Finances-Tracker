import { Injectable } from "@angular/core";
import { SourceDetails } from "../models/source-details";
import { SourceType } from "../models/source-type.enum";

@Injectable({providedIn: 'root'})
export class SourceState
{
    private sources: Array<SourceDetails> = 
    [
        new SourceDetails('Salary', 4500, SourceType.Income, 'work', new Date(2024,1,10)),
        new SourceDetails('Refund', 120, SourceType.Income, 'refund', new Date(2024,1,12)),
        new SourceDetails('Partnership', 300, SourceType.Income, 'additional', new Date(2024,1,7)),

        new SourceDetails('House Rent', 1200, SourceType.Outcome, 'routine', new Date(2024,1,15)),
        new SourceDetails('Groceries', 45, SourceType.Outcome, 'routine', new Date(2024,1,10)),
        new SourceDetails('Car Fuel', 150, SourceType.Outcome, 'routine', new Date(2024,1,10)),
        new SourceDetails('Apple Music', 5, SourceType.Outcome, 'subscriptions', new Date(2024,1,15)),
        new SourceDetails('Game Pass', 11, SourceType.Outcome, 'subscriptions', new Date(2024,1,16))
    ];

    public addSource(source: SourceDetails)
    {
        this.sources.push(source);
    }

    public removeSource(source: SourceDetails)
    {
        var index = this.sources.indexOf(source);
        if(index == -1) return;
        this.sources.splice(index, 1);
    }

    public get getSources()
    {
        return this.sources;
    }
}