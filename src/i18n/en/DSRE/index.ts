/**
 * you can follow the constructure of /src/DSRE files
 */

import main from "./main.json";
import lifeCycle from "./lifeCycle.json";
import riskCategories from "./riskCategories.json";
import risks from "./risks.json";
import securityAttributes from "./securityAttributes.json";
import securityImplements from "./securityImplements.json";
import threaten from "./threaten.json";

const DSRE = {
  ...main,
  lifeCycle,
  riskCtg: riskCategories,
  risks,
  secAttrs: securityAttributes,
  secImpls: securityImplements,
  threaten,
};

export default DSRE;
