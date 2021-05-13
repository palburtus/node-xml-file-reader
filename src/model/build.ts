import { Meta } from "./meta";
import { TestResult } from "./testResults";

export interface Build {
    meta: Meta;
    testResults: TestResult;
}