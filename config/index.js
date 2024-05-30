import DEVELOPMENT from './development';
import PRODUCTION from './production';
import TESTING from "./testing";

export const SETTINGS = {
    development: DEVELOPMENT,
    production: PRODUCTION,
    testing: TESTING
};
export default SETTINGS[process.env.NODE_ENV];
// export default SETTINGS["development"];
// export default SETTINGS["production"];
// export default SETTINGS["testing"];