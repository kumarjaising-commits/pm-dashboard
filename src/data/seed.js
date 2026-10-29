// ─── Meridian Shipping — Dashboard Seed Data v3 ─────────────────────────────

// ─── CORPORATE STRUCTURE ─────────────────────────────────────────────────────
export const GROUP_ENTITIES = [
  {
    id:'meridian', name:'Meridian Shipping Group', short:'Meridian',
    type:'Parent Holding Company', jurisdiction:'India / UAE',
    role:'Ultimate parent — Ship Owning, Ship Management, River Barge Operations, Ship Repairing',
    level:1, parentId:null, vessels:['V001','V002','V003','V004','B001','B002','B003','B004','B005'],
    pl:{ rev:15.9, ebitda:5.1 }, established:2004, color:'#C9A457', dormant:false,
  },
  {
    id:'nis', name:'Meridian International Holdings Pte Ltd', short:'MIH Pte Ltd',
    type:'Intermediate Holding Company', jurisdiction:'Singapore',
    role:'Intermediate holding company for all vessel-owning SPVs and ship management entities under Meridian group',
    level:2, parentId:'meridian', vessels:['V001','V002','V003','V004'],
    pl:{ rev:13.2, ebitda:3.9 }, established:2021, color:'#3B9EFF', dormant:false,
  },
  {
    id:'nsm', name:'Meridian Ship Management Pte Ltd', short:'MSM Pte Ltd',
    type:'Ship Management Company', jurisdiction:'Singapore',
    role:'Technical and commercial ship management — crewing, maintenance, vetting, compliance for MT Aurora and MT Boreas',
    level:3, parentId:'nis', vessels:['V001','V002'],
    pl:{ rev:5.4, ebitda:1.6 }, established:2023, color:'#10D9A0', dormant:false,
  },
  {
    id:'meridian_shipco', name:'Meridian ShipCo LLC', short:'Meridian ShipCo LLC',
    type:'Ship Owning SPV', jurisdiction:'UAE (Ras Al Khaimah FTZ)',
    role:'Independent entity — no vessel assets currently assigned',
    level:3, parentId:'nis', vessels:[],
    pl:{ rev:0, ebitda:0 }, established:2022, color:'#6A8FAA', dormant:true,
  },
  {
    id:'calypso_spv', name:'Calypso SPV', short:'Calypso SPV',
    type:'Single-Purpose Vehicle', jurisdiction:'UAE (Ras Al Khaimah FTZ)',
    role:'Dedicated SPV for MT Calypso — vessel mortgage and pool agreement ring-fenced for lender security',
    level:3, parentId:'nis', vessels:['V003'],
    pl:{ rev:2.1, ebitda:0.7 }, established:2026, color:'#F59E0B', dormant:false,
  },
  {
    id:'delphine_spv', name:'Delphine SPV', short:'Delphine SPV',
    type:'Single-Purpose Vehicle', jurisdiction:'UAE (Ras Al Khaimah FTZ)',
    role:'Dedicated SPV for MT Delphine — captive cargo operations',
    level:3, parentId:'nis', vessels:['V004'],
    pl:{ rev:1.4, ebitda:0.5 }, established:2026, color:'#14B8A6', dormant:false,
  },
]

export const FLEET_CHARTERS = [
  { id:'CP-001', vessel:'MT Boreas',      charterer:'Atlas Commodities Pte Ltd',                  type:'Time Charter',  rate:19500, currency:'USD/day', start:'2026-01-15', end:'2027-01-14', status:'active', paymentStatus:'Current',  netTCE:18200, nextHire:'1 Aug 2026', notes:'Fixed rate TC — redelivery at expiry.' },
  { id:'CP-002', vessel:'MT Aurora',    charterer:'Northstar Tankers Pool',                type:'Pool Agreement',rate:20400, currency:'USD/day (est.)', start:'2025-09-01', end:'Ongoing', status:'active', paymentStatus:'Current',  netTCE:18900, nextHire:'Monthly distribution', notes:'Pool transfer completed — now in Northstar Tankers Pool.' },
  { id:'CP-003', vessel:'MT Calypso',  charterer:'Northstar Tankers Pool',                type:'Pool Agreement',rate:21200, currency:'USD/day (est.)', start:'2026-03-20', end:'Ongoing', status:'active', paymentStatus:'Current',  netTCE:19600, nextHire:'Monthly distribution', notes:'Pool points allocation confirmed.' },
  { id:'CP-004', vessel:'MT Delphine',charterer:'Meridian Internal Cargo Programme', type:'Captive Cargo', rate:0,     currency:'Internal',       start:'2026-04-20', end:'Ongoing', status:'active', paymentStatus:'Current',  netTCE:14000, nextHire:'N/A — Internal', notes:'Dedicated captive cargo vessel.' },
]

// ─── SHIPPING PARTNERS ────────────────────────────────────────────────────────
export const SHIPPING_PARTNERS = [
  { name:'Northstar Tankers', role:'Pool Operator', vessels:['MT Aurora','MT Calypso'], color:'#00243D', website:'https://www.northstar-tankers.example' },
  { name:'Polaris',         role:'Pool Operator (outgoing)', vessels:['MT Aurora'], color:'#004B87', website:'https://www.polaris-pool.example' },
  { name:'Atlas Commodities',      role:'TC Charterer',  vessels:['MT Boreas'], color:'#E30613', website:'https://www.atlas-commodities.example' },
  { name:'Harbour P&I Club',    role:'P&I Insurer',   vessels:['All tankers'], color:'#003366', website:'https://www.harbour-pandi.example' },
  { name:'Nordic Mutual',          role:'H&M Insurer',   vessels:['MT Aurora','MT Delphine'], color:'#1A3C6E', website:'https://www.nordic-mutual.example' },
  { name:'Fjord Hull Club',role:'H&M Insurer',vessels:['MT Boreas'], color:'#B22222', website:'https://www.fjord-hull.example' },
  { name:'Bergen Marine',           role:'H&M Insurer',   vessels:['MT Calypso'], color:'#005587', website:'https://www.bergen-marine.example' },
]

// ─── VESSELS ─────────────────────────────────────────────────────────────────
export const VESSELS = [
  { id:'V001', name:'MT Aurora',     type:'MR Product Tanker', flag:'Marshall Islands', util:88, target:85, status:'amber', pos:'East Mediterranean',route:'Mediterranean → Dortyol, Turkey',crew:24, defects:1, certs:'ok',      dwt:47200, built:2018, class:'DNV', imo:'9000001', mgr:'Master, MT Aurora',        dayRate:20400, voyageDays:12, pl:214000, commercialMode:'pool',    pool:'Northstar Tankers Pool',            charterer:null,              acquired:'Aug 2025', entity:'nsm',            lat:36.8, lng:36.1, note:'Northstar Tankers Pool — pool transfer completed', rob_vlsfo:420, rob_mdo:38, eta:'14 Jul 2026', nextPort:'Dortyol, Turkey', latDisplay:'36°14\'N', lngDisplay:'036°08\'E', insurer_hm:'Nordic Mutual', insurer_pi:'Harbour P&I Club', loh_covered:true, insured_value:28500000 },
  { id:'V002', name:'MT Boreas',       type:'MR Product Tanker', flag:'Marshall Islands', util:95, target:88, status:'green', pos:'Gulf of Guinea', route:'West Africa → Lomé, Togo',       crew:23, defects:0, certs:'ok',      dwt:46800, built:2019, class:'BV',  imo:'9000002', mgr:'Master, MT Boreas',        dayRate:19500, voyageDays:18, pl:312000, commercialMode:'tc',      pool:null,                             charterer:'Atlas Commodities Pte Ltd', acquired:'Jan 2026', entity:'nsm',            lat:5.5,  lng:1.2,  note:'TC to Atlas Commodities $19,500/day until Jan 2027', rob_vlsfo:180, rob_mdo:22, eta:'11 Jul 2026', nextPort:'Lomé, Togo', latDisplay:'05°31\'N', lngDisplay:'001°12\'E', insurer_hm:'Fjord Hull Club', insurer_pi:'Harbour P&I Club', loh_covered:true, insured_value:30200000 },
  { id:'V003', name:'MT Calypso',   type:'MR Product Tanker', flag:'Malta',            util:92, target:88, status:'green', pos:'China Coast',     route:'En route → Shanghai',        crew:24, defects:2, certs:'ok',      dwt:47500, built:2017, class:'LR',  imo:'9000003', mgr:'Master, MT Calypso',             dayRate:21200, voyageDays:8,  pl:298000, commercialMode:'pool',    pool:'Northstar Tankers Pool',            charterer:null,              acquired:'Mar 2026', entity:'calypso_spv',  lat:30.7, lng:122.4, note:'Northstar Tankers Pool — pool points confirmed', rob_vlsfo:310, rob_mdo:41, eta:'18 Jul 2026', nextPort:'Shanghai, China', latDisplay:'30°42\'N', lngDisplay:'122°24\'E', insurer_hm:'Bergen Marine', insurer_pi:'Harbour P&I Club', loh_covered:true, insured_value:27800000 },
  { id:'V004', name:'MT Delphine', type:'MR Product Tanker', flag:'Malta',            util:82, target:80, status:'green', pos:'Indian Coast',    route:'Indian Coast — slow speed',  crew:23, defects:1, certs:'ok',      dwt:46500, built:2020, class:'DNV', imo:'9000004', mgr:'Master, MT Delphine',            dayRate:0,     voyageDays:14, pl:178000, commercialMode:'captive', pool:null,                             charterer:'Meridian Internal', acquired:'Apr 2026', entity:'delphine_spv',lat:15.5, lng:73.8, note:'Dedicated captive cargo operations — Coastal Salt Co..', rob_vlsfo:95, rob_mdo:18, eta:'09 Jul 2026', nextPort:'Mumbai, India', latDisplay:'15°30\'N', lngDisplay:'073°48\'E', insurer_hm:'Nordic Mutual', insurer_pi:'Harbour P&I Club', loh_covered:true, insured_value:32100000 },
  { id:'B001', name:'Orion 1',       type:'Inland River Barge',flag:'India',            util:90, target:85, status:'green', pos:'Port Kandla, Gujarat',route:'Kandla Salt Jetty → Export Markets', crew:8,  defects:0, certs:'ok',      dwt:2100,  built:2024, class:'IACS',imo:'N/A',    mgr:'Barge Master',              dayRate:0,     voyageDays:0,  pl:42000,  commercialMode:'captive', pool:null, charterer:'Meridian Internal', acquired:'2024', entity:'meridian', lat:23.14, lng:68.35, note:'Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China' },
  { id:'B002', name:'Orion 2',       type:'Inland River Barge',flag:'India',            util:88, target:85, status:'green', pos:'Port Kandla, Gujarat',route:'Kandla Salt Jetty → Export Markets', crew:8,  defects:0, certs:'ok',      dwt:2100,  built:2024, class:'IACS',imo:'N/A',    mgr:'Barge Master',              dayRate:0,     voyageDays:0,  pl:40000,  commercialMode:'captive', pool:null, charterer:'Meridian Internal', acquired:'2024', entity:'meridian', lat:23.44, lng:68.65, note:'Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China' },
  { id:'B003', name:'Orion 3',       type:'Inland River Barge',flag:'India',            util:85, target:85, status:'green', pos:'Port Kandla, Gujarat',route:'Kandla Salt Jetty → Export Markets', crew:8,  defects:1, certs:'ok',      dwt:2100,  built:2025, class:'IACS',imo:'N/A',    mgr:'Barge Master',              dayRate:0,     voyageDays:0,  pl:38000,  commercialMode:'captive', pool:null, charterer:'Meridian Internal', acquired:'2025', entity:'meridian', lat:22.84, lng:68.65, note:'Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China' },
  { id:'B004', name:'Orion 4',       type:'Inland River Barge',flag:'India',            util:82, target:85, status:'amber', pos:'Port Kandla, Gujarat',route:'Kandla Salt Jetty → Export Markets', crew:8,  defects:2, certs:'ok',      dwt:2100,  built:2025, class:'IACS',imo:'N/A',    mgr:'Barge Master',              dayRate:0,     voyageDays:0,  pl:35000,  commercialMode:'captive', pool:null, charterer:'Meridian Internal', acquired:'2025', entity:'meridian', lat:23.44, lng:68.05, note:'Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China' },
  { id:'B005', name:'Orion 5',       type:'Inland River Barge',flag:'India',            util:78, target:85, status:'amber', pos:'Port Kandla, Gujarat',route:'Kandla Salt Jetty → Export Markets', crew:8,  defects:0, certs:'warning', dwt:2100,  built:2026, class:'IACS',imo:'N/A',    mgr:'Barge Master',              dayRate:0,     voyageDays:0,  pl:28000,  commercialMode:'captive', pool:null, charterer:'Meridian Internal', acquired:'2026', entity:'meridian', lat:22.84, lng:68.05, note:'Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China' },
]

export const COMMERCIAL_MODE_LABELS = { pool:'Pool', tc:'Time Charter', captive:'Captive', spot:'Spot' }
export const BREAKEVEN_PER_DAY   = 7500
export const BREAKEVEN_PER_MONTH = 7500 * 30

export const VESSEL_EARNINGS = {
  'V001':{ grossIncome:612000, brokerageComm:7650,  poolCommission:30600, opex:225000, insurancePnI:18000, warRisk:6000,  shoreCosts:12000, interest:48000, repayment:60000 },
  'V002':{ grossIncome:585000, brokerageComm:7313,  poolCommission:0,     opex:225000, insurancePnI:16500, warRisk:8500,  shoreCosts:12000, interest:46000, repayment:58000 },
  'V003':{ grossIncome:636000, brokerageComm:7950,  poolCommission:31800, opex:225000, insurancePnI:17000, warRisk:5500,  shoreCosts:12000, interest:49000, repayment:62000 },
  'V004':{ grossIncome:420000, brokerageComm:0,     poolCommission:0,     opex:225000, insurancePnI:15500, warRisk:4500,  shoreCosts:12000, interest:44000, repayment:55000 },
}

export function calcWaterfall(e) {
  if (!e) return null
  const netOpIncome = e.grossIncome - e.brokerageComm - e.poolCommission - e.opex - e.insurancePnI - e.warRisk - e.shoreCosts
  const netCashFlow = netOpIncome - e.interest - e.repayment
  const dailyEarnings = e.grossIncome / 30
  return { ...e, netOpIncome, netCashFlow, dailyEarnings, aboveBreakeven: dailyEarnings >= BREAKEVEN_PER_DAY }
}

// ─── FLEET GROWTH ─────────────────────────────────────────────────────────────
export const FLEET_GROWTH = [
  { label:'2004', vessels:1,  dwt:8000,   event:'Meridian founded' },
  { label:'2008', vessels:2,  dwt:18000,  event:'Second vessel' },
  { label:'2012', vessels:3,  dwt:35000,  event:'Barge ops begin' },
  { label:'2016', vessels:4,  dwt:52000,  event:'First MR tanker' },
  { label:'2020', vessels:6,  dwt:88000,  event:'Orion 1 & 2' },
  { label:'2024', vessels:7,  dwt:95000,  event:'Orion 3' },
  { label:'Aug 25',vessels:8, dwt:142200, event:'MT Aurora — MIH formed' },
  { label:'Jan 26',vessels:9, dwt:189000, event:'MT Boreas acquired' },
  { label:'Mar 26',vessels:10,dwt:236500, event:'MT Calypso' },
  { label:'Apr 26',vessels:11,dwt:283000, event:'MT Delphine' },
]

// ─── INSURANCE ───────────────────────────────────────────────────────────────
export const INSURANCE = [
  { id:'HM-001', category:'H&M',    vessel:'MT Aurora',     insurer:'Nordic Mutual P&I',           broker:'Harbourline Shipping', policyNo:'NMU-2025-47821', sumInsured:28500000, premium:185000, inception:'2025-08-01', expiry:'2026-08-01', daysToRenewal:29,  status:'red',   coverage:'Hull & Machinery — Total Loss, GA, Salvage' },
  { id:'HM-002', category:'H&M',    vessel:'MT Boreas',       insurer:'Fjord Hull Club',         broker:'Crestline Marine',        policyNo:'FHC-2026-00234', sumInsured:30200000, premium:196000, inception:'2026-01-15', expiry:'2027-01-15', daysToRenewal:196, status:'green', coverage:'Hull & Machinery — Total Loss, GA, Salvage' },
  { id:'HM-003', category:'H&M',    vessel:'MT Calypso',   insurer:'Bergen Marine P&I Ltd',     broker:'Beacon Marine',      policyNo:'BGM-2026-58812', sumInsured:27800000, premium:178000, inception:'2026-03-20', expiry:'2027-03-20', daysToRenewal:260, status:'green', coverage:'Hull & Machinery — Total Loss' },
  { id:'HM-004', category:'H&M',    vessel:'MT Delphine', insurer:'Nordic Mutual P&I',           broker:'Harbourline Shipping', policyNo:'NMU-2026-52190', sumInsured:32100000, premium:208000, inception:'2026-04-20', expiry:'2027-04-20', daysToRenewal:291, status:'green', coverage:'Hull & Machinery — Total Loss, GA, Salvage' },
  { id:'PI-001',  category:'P&I',   vessel:'All Tankers',    insurer:'Harbour P&I Club',                broker:'Whitmore Management',     policyNo:'HPI-2026-MSG-01',sumInsured:null,     premium:320000, inception:'2026-02-20', expiry:'2027-02-20', daysToRenewal:232, status:'green', coverage:'Third party liability — cargo, crew, pollution, collision' },
  { id:'WR-001',  category:'War Risk',vessel:'MT Boreas',     insurer:'London Marine Underwriters',         broker:'Crestline Marine',        policyNo:'LMU-2026-WR-891',sumInsured:30200000, premium:48000,  inception:'2026-01-15', expiry:'2027-01-15', daysToRenewal:196, status:'green', coverage:'War risk including terrorism, piracy — Red Sea routing active' },
]

// ─── RENEWAL CALENDAR ────────────────────────────────────────────────────────
export const RENEWAL_ITEMS = [
  { id:'R001', category:'Insurance — H&M', item:'MT Aurora H&M',       due:'2026-08-01', daysLeft:29,  status:'red',   responsible:'Finance Controller', vessel:'MT Aurora'    },
  { id:'R002', category:'Certificate',     item:'MT Aurora IOPP Cert',  due:'2026-08-10', daysLeft:38,  status:'amber', responsible:'Tech Supt.',        vessel:'MT Aurora'    },
  { id:'R003', category:'Certificate',     item:'Orion 5 Inland Cert',  due:'2026-08-18', daysLeft:46,  status:'amber', responsible:'Tech Supt.',        vessel:'Orion 5'      },
  { id:'R004', category:'Certificate',     item:'MT Boreas MLC Cert',     due:'2026-09-02', daysLeft:61,  status:'amber', responsible:'Tech Supt.',        vessel:'MT Boreas'      },
  { id:'R005', category:'Class',           item:'MT Calypso Class Renewal',due:'2026-09-20',daysLeft:79,status:'amber', responsible:'DPA',               vessel:'MT Calypso'  },
  { id:'R006', category:'Insurance — P&I', item:'All Vessels P&I',       due:'2027-02-20', daysLeft:232, status:'green', responsible:'Finance Controller', vessel:'All Tankers'   },
  { id:'R007', category:'Insurance — H&M', item:'MT Boreas H&M',          due:'2027-01-15', daysLeft:196, status:'green', responsible:'Finance Controller', vessel:'MT Boreas'      },
  { id:'R008', category:'Provisions',      item:'MT Aurora Provisions',  due:'2026-07-20', daysLeft:17,  status:'amber', responsible:'Master',            vessel:'MT Aurora'    },
  { id:'R009', category:'Provisions',      item:'MT Boreas Provisions',    due:'2026-08-01', daysLeft:29,  status:'amber', responsible:'Master',            vessel:'MT Boreas'      },
  { id:'R010', category:'Lubes',           item:'MT Calypso Lubes',     due:'2026-07-25', daysLeft:22,  status:'amber', responsible:'Chief Engineer',    vessel:'MT Calypso'  },
  { id:'R011', category:'Bunkering',       item:'MT Aurora Next Bunker', due:'2026-07-22', daysLeft:19,  status:'amber', responsible:'Master',            vessel:'MT Aurora'    },
  { id:'R012', category:'Bunkering',       item:'MT Boreas Next Bunker',   due:'2026-07-28', daysLeft:25,  status:'amber', responsible:'Master',            vessel:'MT Boreas'      },
]

// ─── BUNKERING LOG ────────────────────────────────────────────────────────────
export const BUNKERING = [
  { id:'BNK-001', vessel:'MT Aurora',     date:'2026-05-02', port:'Fujairah',  grade:'VLSFO', qty:850, unit:'MT', pricePerTon:612, totalCost:520200, supplier:'Eastport Marine Fuels',           terms:'30 days net', quality:'ISO 8217 RMG380', sampleRetained:true, status:'completed' },
  { id:'BNK-002', vessel:'MT Boreas',       date:'2026-04-28', port:'Jeddah',    grade:'VLSFO', qty:600, unit:'MT', pricePerTon:608, totalCost:364800, supplier:'Red Sea Bunkers',  terms:'7 days net',  quality:'ISO 8217 RMG380', sampleRetained:true, status:'completed' },
  { id:'BNK-003', vessel:'MT Calypso',   date:'2026-05-08', port:'Sharjah',  grade:'VLSFO', qty:920, unit:'MT', pricePerTon:615, totalCost:565800, supplier:'Eastport Marine Fuels',           terms:'30 days net', quality:'ISO 8217 RMG380', sampleRetained:true, status:'completed' },
  { id:'BNK-004', vessel:'MT Delphine', date:'2026-05-10', port:'Fujairah',  grade:'MGO',   qty:120, unit:'MT', pricePerTon:748, totalCost:89760,  supplier:'Cape Bunkers',   terms:'30 days net', quality:'ISO 8217 DMA',    sampleRetained:true, status:'completed' },
  { id:'BNK-005', vessel:'MT Aurora',     date:'2026-05-28', port:'Ras Tanura',grade:'VLSFO', qty:800, unit:'MT', pricePerTon:618, totalCost:494400, supplier:'Red Sea Bunkers',  terms:'30 days net', quality:'ISO 8217 RMG380', sampleRetained:true, status:'completed'  },
  { id:'BNK-006', vessel:'MT Aurora',     date:'2026-07-22', port:'Fujairah',  grade:'VLSFO', qty:750, unit:'MT', pricePerTon:0,   totalCost:0,       supplier:'TBD — RFQ in progress', terms:'TBD',         quality:'ISO 8217 RMG380', sampleRetained:false,status:'planned'   },
]

// ─── POOL EARNINGS ────────────────────────────────────────────────────────────
export const POOL_EARNINGS = [
  { id:'PE-001', pool:'Northstar Tankers', vessel:'MT Calypso',  period:'Apr-26', grossEarnings:638400, poolDeductions:31920, netEarnings:606480, poolPoints:1.12, tce:21280, statement:'MT_Calypso_Northstar_Apr2026.pdf', uploadDate:'2026-05-08' },
  { id:'PE-002', pool:'Polaris',         vessel:'MT Aurora',     period:'Apr-26', grossEarnings:598200, poolDeductions:29910, netEarnings:568290, poolPoints:1.05, tce:19940, statement:'MT_Aurora_Polaris_Apr2026.pdf',   uploadDate:'2026-05-10', note:'Final month in Polaris pool' },
  { id:'PE-003', pool:'Northstar Tankers', vessel:'MT Calypso',   period:'Mar-26', grossEarnings:621000, poolDeductions:31050, netEarnings:589950, poolPoints:1.10, tce:20700, statement:'MT_Calypso_Northstar_Mar2026.pdf', uploadDate:'2026-04-09' },
  { id:'PE-004', pool:'Polaris',         vessel:'MT Aurora',     period:'Mar-26', grossEarnings:582000, poolDeductions:29100, netEarnings:552900, poolPoints:1.02, tce:19400, statement:'MT_Aurora_Polaris_Mar2026.pdf',   uploadDate:'2026-04-11' },
  { id:'PE-005', pool:'Northstar Tankers', vessel:'MT Calypso',  period:'May-26', grossEarnings:654000, poolDeductions:32700, netEarnings:621300, poolPoints:1.14, tce:21710, statement:'MT_Calypso_Northstar_May2026.pdf', uploadDate:'2026-06-09' },
  { id:'PE-006', pool:'Northstar Tankers', vessel:'MT Aurora',    period:'May-26', grossEarnings:612000, poolDeductions:30600, netEarnings:581400, poolPoints:1.08, tce:20460, statement:'MT_Aurora_Northstar_May2026.pdf',  uploadDate:'2026-06-09', note:'First month in Northstar Tankers Pool' },
  { id:'PE-007', pool:'Northstar Tankers', vessel:'MT Calypso',  period:'Jun-26', grossEarnings:661200, poolDeductions:33060, netEarnings:628140, poolPoints:1.15, tce:22040, statement:'MT_Calypso_Northstar_Jun2026.pdf', uploadDate:'2026-07-02' },
  { id:'PE-008', pool:'Northstar Tankers', vessel:'MT Aurora',    period:'Jun-26', grossEarnings:624000, poolDeductions:31200, netEarnings:592800, poolPoints:1.09, tce:20800, statement:'MT_Aurora_Northstar_Jun2026.pdf',  uploadDate:'2026-07-02', note:'Second month in Northstar Tankers Pool' },
]

// ─── AWARDS — BEST MASTER & CREW ─────────────────────────────────────────────
export const AWARD_CRITERIA_MASTER = [
  { id:'AM1', category:'Safety Leadership',       weight:25, desc:'Zero LTIs · Near-miss reporting rate · Drill compliance' },
  { id:'AM2', category:'Commercial Performance',  weight:20, desc:'Utilisation vs target · On-hire efficiency · Bunker vs Speed/Cons' },
  { id:'AM3', category:'Vetting & Compliance',    weight:20, desc:'SIRE score · PSC deficiencies · Oil Major vetting outcome' },
  { id:'AM4', category:'Cargo Care',              weight:15, desc:'Zero cargo claims · Tank cleaning results · Quantity disputes' },
  { id:'AM5', category:'Crew Management',         weight:10, desc:'Crew retention · Complaint rate · Crew feedback' },
  { id:'AM6', category:'Technical Stewardship',   weight:10, desc:'Defects raised proactively · Defects cleared on time' },
]
export const AWARD_CRITERIA_CREW = [
  { id:'AC1', category:'Collective Safety Record', weight:30, desc:'Zero LTIs · Near-miss frequency (higher = better culture)' },
  { id:'AC2', category:'Inspection Performance',   weight:25, desc:'Best PSC result · Best SIRE/Oil Major score' },
  { id:'AC3', category:'Operational Efficiency',   weight:20, desc:'Utilisation achievement · Bunker efficiency vs Speed/Cons' },
  { id:'AC4', category:'Cargo Record',             weight:15, desc:'Zero claims · Tank inspection first-time pass rate' },
  { id:'AC5', category:'Crew Wellbeing',           weight:10, desc:'Rest hour compliance · Shore leave · Satisfaction survey' },
]
export const AWARD_NOMINEES = [
  { id:'N001', type:'master', name:'Master, MT Calypso',          vessel:'MT Calypso',  scores:{ AM1:23, AM2:19, AM3:20, AM4:14, AM5:9,  AM6:9  }, year:2026 },
  { id:'N002', type:'master', name:'Master, MT Aurora',     vessel:'MT Aurora',    scores:{ AM1:20, AM2:17, AM3:18, AM4:13, AM5:8,  AM6:8  }, year:2026 },
  { id:'N003', type:'master', name:'Master, MT Delphine',         vessel:'MT Delphine',scores:{ AM1:22, AM2:16, AM3:17, AM4:15, AM5:10, AM6:9  }, year:2026 },
  { id:'N004', type:'crew',   name:'MT Calypso Crew',      vessel:'MT Calypso',  scores:{ AC1:28, AC2:24, AC3:19, AC4:14, AC5:9  }, year:2026 },
  { id:'N005', type:'crew',   name:'MT Boreas Crew',          vessel:'MT Boreas',      scores:{ AC1:29, AC2:22, AC3:18, AC4:13, AC5:8  }, year:2026 },
]

// ─── MARKET DATA & BALTIC INDICES ────────────────────────────────────────────
export const MARKET_DATA = [
  { label:'Baltic Dirty Tanker Index (BDTI)', value:'854',      delta:'+2.1%', up:true,  warn:false, context:'MR tanker proxy'         },
  { label:'Baltic Clean Tanker Index (BCTI)', value:'712',      delta:'+1.8%', up:true,  warn:false, context:'Product tanker index'    },
  { label:'Baltic Dry Index (BDI)',           value:'1,842',    delta:'+3.2%', up:true,  warn:false, context:'Dry bulk indicator'      },
  { label:'VLSFO Bunker (Fujairah)',          value:'$612/MT',  delta:'+2.8%', up:false, warn:false, context:'Main bunkering port'     },
  { label:'MGO (Fujairah)',                   value:'$748/MT',  delta:'+1.2%', up:false, warn:false, context:'Distillate price'        },
  { label:'Northstar Pool TCE (MR est.)',        value:'~$21,200', delta:'+4.2%', up:true,  warn:false, context:'Pool earnings estimate'  },
  { label:'USD / INR',                        value:'₹83.4',    delta:'+0.3%', up:false, warn:false, context:'Mid-market'              },
  { label:'USD / EUR',                        value:'€0.924',   delta:'-0.2%', up:true,  warn:false, context:'Mid-market'              },
  { label:'USD / SGD',                        value:'S$1.344',  delta:'+0.1%', up:false, warn:false, context:'Singapore reference'     },
  { label:'Red Sea Risk',                     value:'ELEVATED', delta:'Rerouting active', up:false, warn:true, context:'+12–15 days/voyage' },
]

// ─── VERTICALS ───────────────────────────────────────────────────────────────
export const VERTICALS = [
  { id:'shipown',  name:'Ship Owning',    rev:8.2,  ebitda:2.1,  prevRev:7.8,  trend:+5.1, status:'green', margin:'25.6', vessels:4, budget:9.2, variance:-1.0, variancePct:-10.9, cash:4.2, receivables:1.8 },
  { id:'shipmgmt', name:'Ship Management',rev:4.5,  ebitda:1.8,  prevRev:4.3,  trend:+4.7, status:'green', margin:'40.0', vessels:4, budget:4.2, variance:0.3, variancePct:7.1, cash:2.1, receivables:0.6 },
  { id:'barges',   name:'River Barges',   rev:1.8,  ebitda:0.9,  prevRev:1.5,  trend:+20.0,status:'green', margin:'50.0', vessels:5, budget:1.6, variance:0.2, variancePct:12.5, cash:0.8, receivables:0.2 },
  { id:'shiprep',  name:'Ship Repairing', rev:1.4,  ebitda:0.3,  prevRev:1.5,  trend:-6.7, status:'amber', margin:'21.4', vessels:0, budget:1.6, variance:-0.2, variancePct:-12.5, cash:0.4, receivables:0.8 },
]

export const REVENUE_TREND = [
  {m:'Jul 25',r:15.8,e:4.2},{m:'Aug 25',r:13.1,e:3.1},
  {m:'Sep 25',r:16.4,e:4.6},{m:'Oct 25',r:17.2,e:5.1},{m:'Nov 25',r:18.1,e:5.4},
  {m:'Dec 25',r:19.4,e:6.1},{m:'Jan 26',r:16.8,e:4.8},{m:'Feb 26',r:15.3,e:4.1},
  {m:'Mar 26',r:17.9,e:5.3},{m:'Apr 26',r:18.6,e:5.7},{m:'May 26',r:15.9,e:5.0},
  {m:'Jun 26',r:16.8,e:5.2},
]

export const CRITICAL_ITEMS = [
  { id:1, urg:'high',   title:'MT Aurora — Pool Transfer Complete',        detail:'Transfer from Polaris to Northstar Tankers pool confirmed. Jun-26 pool statement received.',                action:'View Earnings',    assignee:'fleet_mgr' },
  { id:2, urg:'high',   title:'MT Aurora IOPP Cert — 38 Days',             detail:'IOPP Certificate expires 10 Aug. Renewal survey must be booked immediately.',                          action:'Book Survey',      assignee:'tech_supt'  },
  { id:3, urg:'medium', title:'MT Aurora H&M Insurance — 29 Days',         detail:'Hull & Machinery policy expires 1 Aug. Renewal terms from Nordic Mutual required urgently.',                  action:'Confirm Renewal',  assignee:'finance'    },
  { id:4, urg:'medium', title:'Orion 4 & 5 Below Utilisation Target',      detail:'Both at 78–82% vs 85% target. Review cargo schedule.',                                                 action:'Review Schedule',  assignee:'ops'        },
]

export const LEGAL_MATTERS = [
  {
    id:'L001',
    type:'Charter Party Dispute',
    party:'Horizon Petrochemicals FZE',
    pos:'Claimant',
    exp:2400000,
    next:'2026-07-21',
    event:'Arbitration Hearing',
    status:'red',
    spend:85000,
    currency:'USD',
    counsel:'Ashford & Lane LLP',
    jurisdiction:'London Maritime Arbitration — LMAA',
    arbitrator:'Single Arbitrator — LMAA Panel Member',
    panel:'Single',
    place:'London, UK',
    pros:'Strong contractual position — clear breach of laytime provisions. Documentary evidence complete.',
    cons:'Counterparty has deep pockets. Delay in proceedings adds cost.',
    benchChangeDate:null,
    confidentiality:'Strictly Confidential',
    comment:'Counsel briefing confirmed for 21 Jul hearing',
    vessel:'MT Aurora',
  },
  {
    id:'L002',
    type:'P&I Cargo Claim',
    party:'Atlas Commodities Pte Ltd',
    pos:'Respondent',
    exp:890000,
    next:'2026-08-05',
    event:'Pleadings Deadline',
    status:'amber',
    spend:32000,
    currency:'USD',
    counsel:'Carrow & Co',
    jurisdiction:'Singapore International Arbitration Centre — SIAC',
    arbitrator:'Three-member panel — TBC',
    panel:'Three',
    place:'Singapore',
    pros:'P&I Club handling. Strong survey report supports MSG position.',
    cons:'Cargo damage quantum disputed. Independent surveyor report pending.',
    benchChangeDate:'2026-09-15',
    confidentiality:'Confidential',
    comment:'P&I Club handling — independent surveyor report due',
    vessel:'MT Boreas',
  },
  {
    id:'L003',
    type:'Crew Personal Injury Claim',
    party:'Chief Engineer',
    pos:'Respondent',
    exp:320000,
    next:'2026-07-25',
    event:'Medical Assessment — Follow Up',
    status:'amber',
    spend:18500,
    currency:'USD',
    counsel:'Harbour P&I Club',
    jurisdiction:'MLC 2006 — Flag State Jurisdiction (Marshall Islands)',
    arbitrator:'N/A — Settlement negotiation',
    panel:'N/A',
    place:'Manila, Philippines',
    pros:'Injury classified minor. P&I Club managing. Early settlement likely.',
    cons:'Crew member has legal representation. Delay risk if settlement rejected.',
    benchChangeDate:null,
    confidentiality:'Confidential',
    comment:'Medical report received — settlement offer under consideration',
    vessel:'MT Calypso',
  },
  {
    id:'L004',
    type:'Newbuilding Contract Dispute',
    party:'Riverside Drydocks Pvt Ltd',
    pos:'Claimant',
    exp:4100000,
    next:'2026-08-19',
    event:'Expert Determination',
    status:'amber',
    spend:7800000,
    currency:'INR',
    spendUSD:93500,
    counsel:'Hale & Whitford',
    jurisdiction:'Goa Civil Court — Indian Arbitration Act 1996',
    arbitrator:'Expert Determination — neutral expert TBC',
    panel:'Single Expert',
    place:'Goa, India',
    pros:'MSG has documentary evidence of controlling interest. Board resolutions on file.',
    cons:'Counterparty well connected locally. Proceedings may be protracted.',
    benchChangeDate:'2026-10-01',
    confidentiality:'Strictly Confidential',
    comment:'Stakeholder dispute on controlling interest in shipyard. Sensitivity: HIGH.',
    vessel:null,
  },
]

export const LEGAL_CALENDAR = [
  { date:'2026-07-21', matter:'L001', label:'Horizon Petrochemicals — Arbitration Hearing', type:'red' },
  { date:'2026-07-25', matter:'L003', label:'Crew Injury Claim — Medical Assessment', type:'amber' },
  { date:'2026-08-05', matter:'L002', label:'Atlas Commodities Cargo Claim — Pleadings', type:'amber' },
  { date:'2026-08-19', matter:'L004', label:'Riverside Drydocks — Expert Determination', type:'amber' },
]

export const CERTIFICATES = [
  { vessel:'MT Aurora',    cert:'IOPP Certificate',             expires:'2026-08-10', days:38,  status:'amber' },
  { vessel:'Orion 5',      cert:'Inland Waterways Certificate', expires:'2026-08-18', days:46,  status:'amber' },
  { vessel:'MT Boreas',      cert:'MLC Certificate',              expires:'2026-09-02', days:61,  status:'amber' },
  { vessel:'MT Calypso',  cert:'Class Renewal Survey',         expires:'2026-09-20', days:79,  status:'green' },
  { vessel:'MT Delphine',cert:'Safety Management Certificate',expires:'2026-11-05', days:125, status:'green' },
]

export const RED_FLAGS = [
  { domain:'Fleet Operations', item:'Orion 4 — Below utilisation target',       actual:'82%',     target:'85%',       gap:'-3%',       status:'amber', vessel:'B004' },
  { domain:'Fleet Operations', item:'Orion 5 — Below utilisation target',       actual:'78%',     target:'85%',       gap:'-7%',       status:'amber', vessel:'B005' },
  { domain:'Compliance',       item:'MT Aurora IOPP cert expiry — 38 days',     actual:'38 days', target:'60d buffer',gap:'-22 days',  status:'amber', vessel:'V001' },
  { domain:'Compliance',       item:'MT Aurora H&M insurance — 29 days',        actual:'29 days', target:'60d buffer',gap:'-31 days',  status:'red',   vessel:'V001' },
  { domain:'Compliance',       item:'Orion 5 — Inland cert expiry 46 days',     actual:'46 days', target:'60d buffer',gap:'-14 days',  status:'amber', vessel:'B005' },
  { domain:'Compliance',       item:'3 vessels CII not submitted',               actual:'3',       target:'0',         gap:'+3',        status:'red',   vessel:null   },
  { domain:'Financial',        item:'Ship Repairing revenue vs budget',          actual:'$1.4M',   target:'$1.6M',     gap:'-$0.2M',    status:'amber', vessel:null   },
  { domain:'Legal',            item:'Arbitration hearing approaching — 21 Jul',  actual:'Pending', target:'7d prior',  gap:'—',         status:'red',   vessel:null   },
  { domain:'Bunkering',        item:'MT Aurora bunker RFQ not confirmed',       actual:'Open',    target:'Confirmed', gap:'19 days',   status:'red',   vessel:'V001' },
]

export const CREW = [
  { vesselId:'V001', vessel:'MT Aurora',    rank:'Master', name:'Master, MT Aurora',       nation:'Egypt',       signOn:'2026-02-14', signOff:'2026-08-14', certs:'ok',     relief:'Ready'   },
  { vesselId:'V002', vessel:'MT Boreas',      rank:'Master', name:'Master, MT Boreas',       nation:'India',       signOn:'2026-01-10', signOff:'2026-07-10', certs:'warning',relief:'Sourcing' },
  { vesselId:'V003', vessel:'MT Calypso',  rank:'Master', name:'Master, MT Calypso',            nation:'China',       signOn:'2026-04-01', signOff:'2026-10-01', certs:'ok',     relief:'Ready'   },
  { vesselId:'V004', vessel:'MT Delphine',rank:'Master', name:'Master, MT Delphine',           nation:'India',       signOn:'2026-02-28', signOff:'2026-08-28', certs:'ok',     relief:'Ready'   },
  { vesselId:'B001', vessel:'Orion 1',      rank:'Master', name:'Barge Master, Orion 1',   nation:'Philippines', signOn:'2026-03-01', signOff:'2026-09-01', certs:'ok',     relief:'N/A'     },
  { vesselId:'B002', vessel:'Orion 2',      rank:'Master', name:'Barge Master, Orion 2',    nation:'India',       signOn:'2026-01-15', signOff:'2026-07-15', certs:'ok',     relief:'Sourcing'},
  { vesselId:'B003', vessel:'Orion 3',      rank:'Master', name:'Barge Master, Orion 3',nation:'Philippines', signOn:'2026-04-10', signOff:'2026-10-10', certs:'ok',     relief:'Ready'   },
  { vesselId:'B004', vessel:'Orion 4',      rank:'Master', name:'Barge Master, Orion 4',    nation:'India',       signOn:'2026-02-20', signOff:'2026-08-20', certs:'ok',     relief:'Ready'   },
  { vesselId:'B005', vessel:'Orion 5',      rank:'Master', name:'Barge Master, Orion 5',   nation:'India',       signOn:'2026-03-15', signOff:'2026-09-15', certs:'warning',relief:'Ready'   },
]

export const CREW_SIGNOFFS = [
  { vessel:'MT Boreas',    name:'Master, MT Boreas', rank:'Master', date:'2026-07-10', days:7,   status:'red',   action:'Relief sourcing — URGENT, 7 days remaining' },
  { vessel:'Orion 2',    name:'Barge Master, Orion 2',rank:'Master',date:'2026-07-15', days:12,  status:'amber', action:'Sourcing India-based relief'                 },
  { vessel:'MT Aurora',  name:'Master, MT Aurora',  rank:'Master', date:'2026-08-14', days:42,  status:'amber', action:'On schedule'                                 },
  { vessel:'MT Calypso',name:'Master, MT Calypso',       rank:'Master', date:'2026-10-01', days:90,  status:'green', action:'On schedule'                                 },
]

export const SCENARIO_PRESETS = {
  base:       { label:'Base Case',          util:88,  poolRate:21000, tcRate:19500, bunker:612, inr:83.4, extra:0, opex:7500 },
  bull:       { label:'Bull Case',          util:95,  poolRate:26000, tcRate:21000, bunker:580, inr:82.0, extra:1, opex:7300 },
  bear:       { label:'Bear Case',          util:72,  poolRate:14000, tcRate:16000, bunker:680, inr:86.0, extra:0, opex:7800 },
  redsea:     { label:'Red Sea Disruption', util:80,  poolRate:23000, tcRate:19500, bunker:720, inr:84.5, extra:0, opex:8200 },
  bunkerspike:{ label:'Bunker Spike',       util:88,  poolRate:21000, tcRate:19500, bunker:850, inr:83.4, extra:0, opex:7500 },
}
export const SENSITIVITY = [
  { n:'Pool / TC Rate',   v:4.2 }, { n:'Fleet Utilisation', v:3.6 },
  { n:'Fleet Size',       v:3.1 }, { n:'Bunker Price',      v:2.8 },
  { n:'OPEX / Day',       v:1.9 }, { n:'USD / INR',         v:1.4 },
]
export function calcPL(a) {
  const tankers = 4 + (a.extra||0)
  const rev   = (2*(a.util/100)*(a.poolRate||21000) + (a.util/100)*(a.tcRate||19500) + (a.util/100)*14000) * 365 / 1e6
  const bunk  = tankers*(a.bunker*25*365)/1e6
  const opex  = tankers*a.opex*365/1e6
  const ebitda = rev - bunk - opex
  return { rev:rev.toFixed(1), ebitda:ebitda.toFixed(1), margin:((ebitda/rev)*100).toFixed(1), bunk:bunk.toFixed(1), opex:opex.toFixed(1), vessels:tankers }
}

export const ACTIVE_DEALS = [
  { id:'D001', name:'MT Aurora Acquisition',     type:'Vessel Acquisition', status:'closed',   purpose:'Entry into Polaris pool → Northstar Tankers', highlights:'47,200 DWT MR, 2018, DNV. Deployed into Northstar Tankers pool.',                                                    dealSize:28500000, equity:8550000,  debt:19950000, leverage:70, projectIRR:13.8, equityIRR:21.4, cashRequired:8550000, stage:'Closed',      counterparty:'Undisclosed', lead:'Chairman', targetClose:'2025-08-31', paybackYears:6.8, vertical:'Ship Owning' },
  { id:'D002', name:'MT Boreas Acquisition',       type:'Vessel Acquisition', status:'closed',   purpose:'TC to Atlas Commodities — fixed cash flow certainty', highlights:'46,800 DWT MR, 2019, BV. TC $19,500/day until Jan 2027.',                                                     dealSize:30200000, equity:9060000,  debt:21140000, leverage:70, projectIRR:14.6, equityIRR:22.8, cashRequired:9060000, stage:'Closed',      counterparty:'Atlas Commodities Pte Ltd', lead:'Chairman', targetClose:'2026-01-31', paybackYears:6.4, vertical:'Ship Owning' },
  { id:'D003', name:'MT Calypso Acquisition',   type:'Vessel Acquisition', status:'closed',   purpose:'Northstar Tankers pool — higher pool points',    highlights:'47,500 DWT MR, 2017, LR. Direct entry into Northstar Tankers pool.',                                              dealSize:27800000, equity:8340000,  debt:19460000, leverage:70, projectIRR:13.2, equityIRR:20.6, cashRequired:8340000, stage:'Closed',      counterparty:'Undisclosed', lead:'Chairman', targetClose:'2026-03-31', paybackYears:7.1, vertical:'Ship Owning' },
  { id:'D004', name:'MT Delphine Acquisition', type:'Vessel Acquisition', status:'closed',   purpose:'Captive cargo programme vessel',               highlights:'46,500 DWT MR, 2020, DNV. Dedicated captive cargo. Acquired Apr 2026.',                                        dealSize:32100000, equity:9630000,  debt:22470000, leverage:70, projectIRR:12.8, equityIRR:19.4, cashRequired:9630000, stage:'Closed',      counterparty:'Undisclosed', lead:'Chairman', targetClose:'2026-04-30', paybackYears:7.4, vertical:'Ship Owning' },
  { id:'D005', name:'Fifth MR Tanker — Pipeline', type:'Vessel Acquisition', status:'active', purpose:'Fleet expansion — increase pool allocation',   highlights:'Target 2018–2021 build MR, 45–50K DWT. Brokers engaged. Pool placement confirmed with Northstar Tankers.',          dealSize:29000000, equity:8700000,  debt:20300000, leverage:70, projectIRR:14.1, equityIRR:22.0, cashRequired:8700000, stage:'Origination', counterparty:'Various — brokers', lead:'Chairman', targetClose:'2026-09-30', paybackYears:6.6, vertical:'Ship Owning' },
]
export const DEAL_STAGES = ['Origination','Indicative Terms','Due Diligence','Credit Approval','Documentation','Closed']

export const INSPECTIONS = [
  { id:'INS-001', vessel:'MT Calypso', type:'PSC',       port:'Fujairah',  authority:'UAE MCA',           date:'2026-04-20', result:'pass', deficiencies:0, detained:false, score:null, next:'2026-10-20' },
  { id:'INS-002', vessel:'MT Aurora',   type:'SIRE',      port:'Sharjah',  authority:'Vetting Inspector', date:'2026-04-05', result:'pass', deficiencies:2, detained:false, score:91,   next:'2026-10-05' },
  { id:'INS-003', vessel:'MT Boreas',     type:'PSC',       port:'Jeddah',    authority:'Saudi MAWANI',      date:'2026-03-28', result:'pass', deficiencies:1, detained:false, score:null, next:'2026-09-28' },
  { id:'INS-004', vessel:'MT Delphine',type:'Oil Major',port:'Sharjah',  authority:'Oil Major Vetting',     date:'2026-03-15', result:'pass', deficiencies:1, detained:false, score:89,   next:'2026-09-15' },
  { id:'INS-005', vessel:'MT Calypso', type:'SIRE',      port:'Ras Tanura',authority:'Vetting Inspector', date:'2026-02-20', result:'pass', deficiencies:0, detained:false, score:94,   next:'2026-08-20' },
]

export const HSE_INCIDENTS = [
  { id:'HSE-001', vessel:'MT Aurora',    type:'Near Miss', desc:'Slip on wet deck during night cargo watch',           date:'2026-05-08', severity:'low',    status:'closed', rootCause:'Inadequate lighting',    corrective:'LED lighting installed'           },
  { id:'HSE-002', vessel:'MT Boreas',      type:'Injury',    desc:'AB hand laceration during mooring — minor',          date:'2026-04-22', severity:'medium', status:'open',   rootCause:'PPE non-compliance',     corrective:'Safety training scheduled'        },
  { id:'HSE-003', vessel:'Orion 4',      type:'Near Miss', desc:'Rope caught on winch drum — no injury',              date:'2026-04-10', severity:'low',    status:'closed', rootCause:'Winch guard missing',    corrective:'Guard fitted'                     },
  { id:'HSE-004', vessel:'MT Delphine',type:'Near Miss', desc:'Cargo manifold valve open before hose connection',   date:'2026-03-30', severity:'high',   status:'open',   rootCause:'Checklist not completed',corrective:'Dual-sign checklist enforced'      },
]
export const HSE_KPI = { LTIF:0.38, TRCF:1.62, nearMisses:4, openActions:2, auditScore:89, daysWithoutLTI:207, industryLTIF:0.68 }

export const ALERTS = [
  { id:'AL001', ts:'09:38', level:'critical', msg:'MT Aurora — IOPP Certificate expires in 38 days. Renewal survey required immediately.',    vessel:'V001', dismissed:false },
  { id:'AL002', ts:'08:15', level:'high',     msg:'MT Aurora H&M insurance expires in 29 days — Nordic Mutual renewal terms required urgently',       vessel:'V001', dismissed:false },
  { id:'AL003', ts:'08:00', level:'high',     msg:'MT Aurora bunker RFQ not confirmed — 19 days to planned bunker date',                      vessel:'V001', dismissed:false },
  { id:'AL004', ts:'Yesterday', level:'medium',   msg:'Orion 4 & 5 utilisation below 85% target — review cargo schedule',                    vessel:null,   dismissed:false },
]

export const ACTION_ITEMS = [
  { id:'A001', item:'Confirm MT Aurora pool Q3 allocation — Northstar Tankers confirmation', owner:'fleet_mgr', ownerName:'Fleet Manager',    due:'2026-07-10', status:'open',   priority:'high',   meeting:'BOD Meeting 01 Jul 2026' },
  { id:'A002', item:'Book IOPP renewal survey for MT Aurora — expires 10 Aug',            owner:'tech_supt', ownerName:'Technical Superintendent',      due:'2026-07-15', status:'open',   priority:'high',   meeting:'BOD Meeting 01 Jul 2026' },
  { id:'A003', item:'Confirm bunker supplier for MT Aurora — Fujairah 22 Jul',            owner:'ops',       ownerName:'Operations Manager',      due:'2026-07-08', status:'overdue',priority:'high',   meeting:'Ops Review 25 Jun 2026'  },
  { id:'A004', item:'Review Orion 4 & 5 cargo utilisation — optimise programme',          owner:'ops',       ownerName:'Operations Manager',      due:'2026-07-14', status:'open',   priority:'medium', meeting:'BOD Meeting 01 Jul 2026' },
  { id:'A005', item:'Confirm Ashford & Lane briefing for 21 Jul arbitration',              owner:'legal',     ownerName:'Legal Counsel', due:'2026-07-14', status:'open',   priority:'high',   meeting:'BOD Meeting 01 Jul 2026' },
  { id:'A006', item:'Submit MT Boreas relief master nomination — sign-off 10 Jul',          owner:'manning',   ownerName:'Manning Superintendent',  due:'2026-07-05', status:'overdue',priority:'high',   meeting:'Ops Review 25 Jun 2026'  },
]

export const CONNECTORS = [
  { name:'Zoho Books',             status:'connected', org:'Meridian Finance Suite', detail:'P&L, invoices & bank accounts live',   module:'finance' },
  { name:'Zoho Expense',           status:'connected', org:'Meridian Finance Suite', detail:'Expense reports synced',               module:'expense' },
  { name:'Zoho Payroll',           status:'connected', org:'Meridian Finance Suite', detail:'Crew & staff payroll',                 module:'payroll' },
  { name:'FURUNO / MarineTraffic', status:'pending',   org:'AIS Fleet Tracking',      detail:'Subscription procurement in progress', module:'ais'     },
  { name:'Harbour P&I Club',            status:'connected', org:'Harbour P&I Club',             detail:'Claims module live',                   module:'pi'      },
]

export const ZOHO_SUITE = {
  label:'Zoho Finance Suite',
  description:"Meridian's primary ERP — Zoho Books, Expense, and Payroll connected as single source of financial truth.",
  modules:['Zoho Books','Zoho Expense','Zoho Payroll','Zoho CRM'], orgId:'10000001', region:'UAE (zoho.com)',
}

export const TEAM = [
  { id:'fleet_mgr', name:'Fleet Manager',         role:'Fleet Manager',            email:'fleet.manager@meridian-shipping.example'  },
  { id:'tech_supt', name:'Technical Superintendent',           role:'Technical Superintendent', email:'tech.superintendent@meridian-shipping.example'     },
  { id:'finance',   name:'Finance Controller',          role:'Finance Controller',       email:'finance.controller@meridian-shipping.example'    },
  { id:'ops',       name:'Operations Manager',           role:'Operations Manager',       email:'operations@meridian-shipping.example'     },
  { id:'manning',   name:'Manning Superintendent',       role:'Manning Superintendent',   email:'manning@meridian-shipping.example' },
  { id:'legal',     name:'Ashford & Lane LLP', role:'External Legal Counsel',   email:'meridian@ashfordlane.example'             },
]
