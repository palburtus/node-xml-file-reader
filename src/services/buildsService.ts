export class BuildService {
    getBuild(buildNumber: string | number) : string {
        return `build ${buildNumber}`;
    }
}
