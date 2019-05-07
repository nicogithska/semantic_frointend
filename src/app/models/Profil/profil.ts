export class Profile {
    public id: number;
    public name: string;
    public nachname: string;
}

export class Result {
    public hits: {
        hits: [Record];
    };
}

export class Record {
    // tslint:disable-next-line:variable-name
    public _id: number;
    // tslint:disable-next-line:variable-name
    public _source: Profile;
}
