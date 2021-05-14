import { BuildService, IBuildService } from "../../services/buildsService";

describe("test build service",  () => {

  it("should return build and version number", async () => {

    let buildService:IBuildService = new BuildService(`./${process.env.BUILDS_ROOT}`);
    let build = await buildService.getBuilds();

    expect(build[0].meta.number).toBe(7);
    expect(build[0].meta.version).toBe(1);

    expect(build[0].testResults.failed).toBe('209');
    expect(build[0].testResults.tests).toBe('622');

  });

});