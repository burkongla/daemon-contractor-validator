// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0],
      2: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Contractor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contractor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contractor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
  ;
  const v76 = stdlib.protect(ctc1, await interact.wagerToPay(), {
    at: './index.rsh:31:61:application',
    fs: ['at ./index.rsh:30:18:application call to [unknown function] (defined at: ./index.rsh:30:22:function exp)'],
    msg: 'wagerToPay',
    who: 'Contractor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v70, v71, v76],
    evt_cnt: 1,
    funcNum: 1,
    lct: v72,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v76, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
      
      sim_r.txns.push({
        amt: v78,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v88 = stdlib.addressEq(v70, v85);
  stdlib.assert(v88, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Contractor'
    });
  ;
  stdlib.protect(ctc2, await interact.displayFunds(v78, v71), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)'],
    msg: 'displayFunds',
    who: 'Contractor'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, await interact.supplier(), {
    at: './index.rsh:23:49:application',
    fs: ['at ./index.rsh:22:13:application call to [unknown function] (defined at: ./index.rsh:22:17:function exp)'],
    msg: 'supplier',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.informTimeOut(), {
    at: './index.rsh:39:27:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: 'informTimeOut',
    who: 'Owner'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v70, v71, v78],
    evt_cnt: 0,
    funcNum: 2,
    lct: v79,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v71,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v88 = stdlib.addressEq(v70, v85);
  stdlib.assert(v88, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  stdlib.protect(ctc2, await interact.displayFunds(v78, v71), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)'],
    msg: 'displayFunds',
    who: 'Owner'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByADAAECJgIBAAAiNQAxGEEBVClkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAJhJJAxAAEAkEkQkNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0A1cAIDEAEkSxIrIBNAOBQFuyCCOyEDQDVyAgsgezQgCQSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFFzX9gATVFRkUNP0WULA0/YgAxjT/NP5QNP0WUChLAVcASGdIJDUBMgY1AkIAWkiBoI0GiACjIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAT7hm/uNP9QsDEANP9QKEsBVwBAZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"v134","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v136","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v138","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62000a7a60806001600160401b03601f1938849003601f81018216840190848210848311176102d957808591604097889485528339810103126102ef578351610047816102f4565b835181526020938401516001600160a01b039490919085831683036102ef5780820192835243600355865191818301838110878211176102d9578852600080935260049060ff8254166102c2577fdfc9ca24641405bcf22714584c5a6a755e437739bd3255aaabe0d859c10c4e1360608a513381528351868201528a8851168c820152a15180159081156102b6575b501561029f573461028857868851946100ee866102f4565b838601958587523390525116845260019687845543885588519433848701525116888501528784526060840184811087821117610275578852835195861161026257600254908782811c92168015610258575b838310146102455750601f81116101fe575b508093601f861160011461019b57505091839491849394610190575b50501b916000199060031b1c1916176002555b5161076a9081620003108239f35b01519250388061016f565b600283528183209493928692918316915b888383106101e457505050106101cb575b505050811b01600255610182565b015160001960f88460031b161c191690553880806101bd565b8587015188559096019594850194879350908101906101ac565b60028352818320601f870160051c81019183881061023b575b601f0160051c019087905b828110610230575050610153565b848155018790610222565b9091508190610217565b634e487b7160e01b845260229052602483fd5b91607f1691610141565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b905060015414386100d6565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176102d95760405256fe608060409080825260049182361015610020575b505050361561001e57005b005b600091823560e01c9081631377727414610301575080631e93b0f1146102e357806383230757146102c5578063ab53f2c6146102565763f5a239bc0361001357602092836003193601126102525782825161007a816105ff565b52815190610087826105ff565b8035825260ff81541661023b577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a838051338152845188820152a16002845403610224576100d3610666565b606081805181010312610220578351916100ec8361064b565b6100f787830161072d565b8352606061010686840161072d565b92888501938452015193858401948552518015908115610214575b50156101fd57346101e65791516001600160a01b03929033908416036101cf57508480938193829351169051908282156101c6575bf1156101bc578180558160015561016e6002546105c5565b8061017b575b5051908152f35b601f81116001146101925750816002555b38610174565b600283528383206101ae91601f0160051c810190600101610746565b81838120816002555561018c565b51903d90823e3d90fd5b506108fc610156565b602490601286519163100960cb60e01b8352820152fd5b602490601186519163100960cb60e01b8352820152fd5b602490601086519163100960cb60e01b8352820152fd5b90506001541438610121565b8480fd5b602490600f84519163100960cb60e01b8352820152fd5b602490600e84519163100960cb60e01b8352820152fd5b8280fd5b50346102c157816003193601126102c1578154610271610666565b91805193849283526020828185015284518093850152815b8381106102aa57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610289565b5080fd5b50346102c157816003193601126102c1576020906001549051908152f35b50346102c157816003193601126102c1576020906003549051908152f35b905081600319360112610252578061031984926105ff565b5280519261032684610630565b80358452602093848101916024918235845260ff8254166105b0577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060865133815283518a820152865188820152a16001928387540361059c57610389610666565b8681805181010312610598576103b8878051926103a584610630565b6103b08c820161072d565b84520161072d565b9289820193845251801590811561058d575b50156105785785513403610563578651926103e48461064b565b8884528984018981528885018a815292516001600160a01b0390811695869052915182168152965182526002808a554387558851808c0195909552965116838801525160608084019190915282526001600160401b03926080830184811184821017610551578752825193841161054057505061046184546105c5565b601f8111610507575b508690601f83116001146104a857928293918392889461049d575b50501b916000199060031b1c19161790555b51908152f35b015192503880610485565b848752878720919083601f198116895b8b888383106104f057505050106104d7575b505050811b019055610497565b015160001960f88460031b161c191690553880806104ca565b8686015188559096019594850194879350016104b8565b61053090858852888820601f850160051c8101918a8610610536575b601f0160051c0190610746565b3861046a565b9091508190610523565b634e487b7160e01b88526041905286fd5b50634e487b7160e01b88526041905286fd5b50855163100960cb60e01b8152600d81850152fd5b50855163100960cb60e01b8152600c81850152fd5b9050855414386103ca565b8780fd5b855163100960cb60e01b8152600b81850152fd5b50600a84519163100960cb60e01b8352820152fd5b90600182811c921680156105f5575b60208310146105df57565b634e487b7160e01b600052602260045260246000fd5b91607f16916105d4565b602081019081106001600160401b0382111761061a57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761061a57604052565b606081019081106001600160401b0382111761061a57604052565b604051906000600254610678816105c5565b80855260019180831690811561070e57506001146106b6575b5050829003601f01601f191682016001600160401b0381118382101761061a57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106106fa57505050508301013880610691565b8054888601830152930192849082016106e5565b919250506020925060ff191682850152151560051b8301013880610691565b51906001600160a01b038216820361074157565b600080fd5b818110610751575050565b6000815560010161074656fea164736f6c6343000810000a`,
  BytecodeLen: 2682,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contractor": Contractor,
  "Owner": Owner
  };
export const _APIs = {
  };
