import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, Profile } from './profile';
import { Observable } from 'rxjs';

/**
 * ElasticSearch settings
 */
const elasticSearchUrl = 'http://localhost:9200';
const elasticSearchIndex = 'test_profiles';

@Injectable({
    providedIn: 'root',
})
export class SeamnticSearch {

    private elasticSearchQuery = {
        query: {
            match_all: {}
        }
    };

    constructor(private http: HttpClient) { }

    search(): Profile[] {
        const profiles = [];
        this.execute_search(this.elasticSearchQuery).subscribe(result => {
            result.hits.hits.forEach(e => {
                let profile = new Profile();
                profile = e._source;
                profile.id = e._id;
                profiles.push(profile);
            });
        },
        err => {
            console.log(err);
        });
        return profiles;
    }

    execute_search(query: object): Observable<Result> {
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json; charset=UTF-8');
        headers.append('Access-Control-Allow-Origin', '*');
        const options = {
            // tslint:disable-next-line:object-literal-shorthand
            headers: headers,
            param: JSON.stringify(query)
        };
        const url = `${elasticSearchUrl}/${elasticSearchIndex}/_search`;
        return this.http.get<Result>(url, options);
    }
}
