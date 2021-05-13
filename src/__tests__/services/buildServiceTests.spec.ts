import { BuildService, IBuildService } from "../../services/buildsService";

describe("test build service",  () => {

  it("should return build and version number", async () => {

    let buildService:IBuildService = new BuildService();
    let build = await buildService.getBuilds();

    expect(build.meta.number).toBe(7);
    expect(build.meta.version).toBe(1);

  });

});