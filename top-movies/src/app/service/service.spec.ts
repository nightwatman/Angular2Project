import { TestBed, async, inject } from '@angular/core/testing';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import {AppService} from './app.service';

describe('AppService', () => {
    let service: AppService;
    let mockBackend:MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                AppService,
                MockBackend,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });

        // inject the service
        service = TestBed.get(AppService);
        mockBackend = TestBed.get(MockBackend);
    });

    it('should have a service instance', () => {
        expect(service).toBeDefined();
    });

    it('should return the json', async(() => {
        mockBackend.connections.subscribe((conn:MockConnection) => {
            conn.mockRespond(new Response(new ResponseOptions('{ "name": "Responded" }')));
        });

        service.getData().subscribe((data) => {
            expect(data.name).toBe('Responded');
        });
    }));

});