import { BuildService, IBuildService } from "../../services/buildsService";

describe("test build service",  () => {

  it("should return build and version number", async () => {

    let buildService:IBuildService = new BuildService();
    let build = await buildService.getBuild(7);

    expect(build.number).toBe(7);
    expect(build.version).toBe(1);

  });

});