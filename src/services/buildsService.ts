import { readdirSync, readFile, promises as fsPromises, PathLike } from 'fs';
import sxml from 'sxml';
import XML = sxml.XML;
import XMLList = sxml.XMLList;
import { Build } from '../model/build';
import { Meta } from '../model/meta';
import { TestResult } from '../model/testResults';


export interface IBuildService {
    getBuilds() : Promise<Build[]>;
}

export class BuildService implements IBuildService {

    buildsRootPath: string;

    constructor(buildsRootPath: string){
        this.buildsRootPath = buildsRootPath;
    }
    
    public async getBuilds() : Promise<Build[]> {        

        return new Promise<Build[]>((resolve, reject) => {
           
            try{

                let files = readdirSync(this.buildsRootPath);

                let builds: Promise<Build>[] = [];
                
                files.forEach(file => {
                    
                    let build = this.readTestDirectory(file);
                    builds.push(build);
                });

                resolve(Promise.all(builds));   

            }catch(ex) {
                reject(ex);
            };
        });        
    }

    private async readTestDirectory(directory: string): Promise<Build>{
        
        return new Promise<Build>(async (resolve, reject) => {
                      
            let meta = await this.readMetaJsonFile(directory);
            let testResult = await this.readTestXmlFile(`${directory}/tests/quick/build/mergedReports/mergedJunitReport_QuickTest.xml`);
            
            let build: Build = {
                meta: meta,
                testResults: testResult
            } 

            resolve(build);      
        });
    }

    private async readTestXmlFile(path: string) : Promise<TestResult>{

        return new Promise<TestResult>((resolve, reject) => {
                    
            readFile(`./${this.buildsRootPath}/${path}`, (error, data) => {
                
                if(error){
                    reject(error);     
                }

                let xml:XML = new XML(data.toString());
                let xmlRootNodePropertyMap = xml.getPropertyMap();
                
                //let testSuites: XMLList = xml.get('testsuites');

                let testResult: TestResult = {
                    failed: xmlRootNodePropertyMap.get('failures'), 
                    tests: xmlRootNodePropertyMap.get('tests')
                }

                resolve(testResult);
                
            });  
        
        });
            
    }

    private async readMetaJsonFile(directory: string) : Promise<Meta>{

        return new Promise<Meta>((resolve, reject) => {

            readFile(`./${this.buildsRootPath}/${directory}/meta.json`, (error, data) => {
                
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
