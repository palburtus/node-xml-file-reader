import { promises as fsPromises } from 'fs';
import {Build} from '../model/build';

export class BuildService {
    
    getBuild(buildNumber: string | number) : Promise<Build> {

        return new Promise<Build>((resolve, reject) => {

            let result = {
                number: buildNumber,
                version: 1
            }
    
            resolve(result);

        });
        
    }
}
