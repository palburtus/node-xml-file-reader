import { readFile, promises as fsPromises } from 'fs';
import sxml from 'sxml';
import XML = sxml.XML;
import XMLList = sxml.XMLList;
import { Build } from '../model/build';
import { Meta } from '../model/meta';
import { TestResult } from '../model/testResults';

export interface IBuildService {
    getBuilds() : Promise<Build>;
}

export class BuildService implements IBuildService {
    
    public async getBuilds() : Promise<Build> {        

        return new Promise<Build>(async (resolve, reject) => {
        
            try{
                
                let meta = await this.readMetaJsonFile();
                let testResult = await this.readTestXmlFile('app-platform-major_minor-build/tests/quick/build/mergedReports/mergedJunitReport_QuickTest.xml');
                
                let build: Build = {
                    meta: meta,
                    testResults: testResult
                }
        
                resolve(build);

            }catch(ex) {
                reject(ex);
            };

            
        });        
    }

    private async readTestXmlFile(path: string){

        return new Promise<TestResult>((resolve, reject) => {
                    
            const file = readFile(`./${process.env.BUILDS_ROOT}/${path}`, (error, data) => {
                
                if(error){
                    reject(error);     
                }

                let xml:XML = new XML(data.toString());
                //let json = xml.toJSON();
                let xmlRootNodePropertyMap = xml.getPropertyMap();
                debugger;
                //let testSuites: XMLList = xml.get('testsuites');

                //console.log(json);

                //let obj = JSON.parse(json);

                let testResult: TestResult = {
                    failed: xmlRootNodePropertyMap.get('failures'), 
                    tests: xmlRootNodePropertyMap.get('tests')
                }

                resolve(testResult);
                
            });  
        
        });
            
    }

    private async readMetaJsonFile() : Promise<Meta>{

        return new Promise<Meta>((resolve, reject) => {

            const file = readFile(`./${process.env.BUILDS_ROOT}/app-platform-major_minor-build/meta.json`, (error, data) => {
                
                if(error){
                    reject(error);     
                }

                let json = data.toString();
                let obj = JSON.parse(json);

                let meta: Meta = {
                    number: obj.build,
                    version: obj.version
                }

                resolve(meta);
            });            
        });
    }
}
