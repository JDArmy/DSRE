import main from "./main.json";
import secAttrs from "./securityAttributes.json";
import lifeCycle from "./lifeCycle.json";
import secImpls from "./securityImplements.json";
import risks from "./risks.json";
import riskCtg from "./riskCategories.json";

const DSRE = {
  ...main, //DSRE框架基础信息
  secAttrs: secAttrs,
  lifeCycle: lifeCycle,
  secImpls: secImpls,
  risks: risks,
  riskCtg: riskCtg,
};

export default DSRE;
