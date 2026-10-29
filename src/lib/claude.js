const API_URL = '/api/claude'
const MODEL   = import.meta.env.VITE_CLAUDE_MODEL || 'claude-sonnet-4-20250514'
const API_KEY = import.meta.env.VITE_CLAUDE_API_KEY

// ─── Smart Mock Engine ────────────────────────────────────────────────────────
// Runs entirely from dashboard data. No API needed.

const MOCK_DATA = {
  vessels: [
    { name: 'MT Aurora',     pos: 'East Mediterranean', route: 'en route Dortyol, Turkey', tce: '$20,400/day', util: '88%', defects: 1, status: 'amber', note: 'IOPP certificate expires in 38 days — CRITICAL. Pool transfer to Northstar Tankers pending.' },
    { name: 'MT Boreas',       pos: 'Conakry, Guinea',    route: 'Atlantic voyage',            tce: '$19,500/day', util: '95%', defects: 0, status: 'green', note: 'Time Charter to Atlas Commodities at $19,500/day until Jan 2027. Performing well.' },
    { name: 'MT Calypso',   pos: 'China Coast',        route: 'en route Shanghai',          tce: '$21,200/day', util: '92%', defects: 2, status: 'green', note: 'Northstar Tankers Pool. Highest earner in fleet at $21,200/day.' },
    { name: 'MT Delphine', pos: 'Indian Coast',       route: 'slow speed — Indian Coast',  tce: 'Captive',     util: '82%', defects: 1, status: 'green', note: 'Captive cargo for Coastal Salt Co. salt exports.' },
  ],
  barges: 'Orion 1–5 all operating at Port Kandla Salt Jetty, Gujarat. Captive cargo for Coastal Salt Co. — salt exports to Japan, South Korea, China. 3–4.5M MT annually, growing to 7M MT with new Hajipur facility.',
  financials: { revenue: '$15.9M', ebitda: '$5.1M', margin: '32.1%', cash: '$7.5M', receivables: '$3.4M overdue (Ship Building)' },
  redFlags: [
    'MT Aurora IOPP Certificate expires in 38 days — renewal survey not booked',
    'MT Aurora pool transfer to Northstar Tankers — allocation date unconfirmed',
    'MT Aurora bunker RFQ unconfirmed — 15 days to planned stem',
    'Orion 4 and Orion 5 below 85% utilisation target',
    'Horizon Petrochemicals arbitration 14 Jun — Ashford & Lane briefing unconfirmed',
    'Ship Building revenue $0.6M below budget — Eastern Shipyard delay',
    'Overdue receivables $3.4M — Ship Building elevated',
  ],
  legal: [
    { matter: 'Charter Party Dispute vs Horizon Petrochemicals', exposure: '$2.4M', next: '14 Jun 2026 — Arbitration', counsel: 'Ashford & Lane LLP' },
    { matter: 'Newbuilding Dispute vs Riverside Drydocks', exposure: '$4.1M', next: '19 Aug 2026 — Expert Determination', counsel: 'Hale & Whitford' },
    { matter: 'P&I Cargo Claim vs Orient Chemical Holdings', exposure: '$0.89M', next: '2 Jul 2026 — Pleadings', counsel: 'Carrow & Co' },
    { matter: 'Crew Personal Injury vs Chief Engineer', exposure: '$0.32M', next: 'Medical Assessment', counsel: 'P&I Club' },
  ],
  market: { bdti: '854 (+2.1%)', bcti: '712 (+1.8%)', bdi: '1,842 (+3.2%)', vlsfo: '$612/MT Fujairah', redSea: 'ELEVATED — rerouting active +12-15 days per voyage' },
  certs: [
    'MT Aurora IOPP Certificate — expires 20 Jun 2026 — 38 days — CRITICAL',
    'Orion 5 Inland Certificate — expires 28 Jun 2026 — 46 days',
    'MT Boreas MLC Certificate — expires 10 Jul 2026 — 58 days',
    'MT Calypso Class Renewal — due 1 Aug 2026 — 80 days',
  ],
}

function generateMockResponse(userMessage) {
  const q = userMessage.toLowerCase()

  // Vessel specific
  if (q.includes('aurora')) {
    return `**MT Aurora — Status Update**\n\nCurrently in the East Mediterranean, en route to Dortyol, Turkey. Earning $20,400/day in the Polaris Pool (transferring to Northstar Tankers — allocation date still unconfirmed).\n\n**Requires immediate attention:**\n- IOPP Certificate expires in 38 days (20 Jun 2026) — renewal survey not yet booked\n- Bunker RFQ unconfirmed — 15 days to planned stem at Ras Tanura\n- Pool transfer to Northstar Tankers pending confirmation\n\nUtilisation: 88% | Open defects: 1\nBunkers on board: VLSFO 420 MT | MDO 38 MT\nNoon position: 36°14'N / 036°08'E\nNext port: Dortyol, Turkey | ETA: 02 Jun 2026\nInsurance: H&M Nordic Mutual | P&I Harbour P&I Club | LOH covered`
  }
  if (q.includes('boreas')) {
    return `**MT Boreas — Status Update**\n\nCurrently at Conakry, Guinea on Atlantic voyage. Time Charter to Atlas Commodities Pte Ltd at $19,500/day until Jan 2027.\n\nBest performing vessel on utilisation at 95%. No open defects. MLC Certificate expires 10 Jul 2026 — 58 days remaining.\n\nP&L MTD: +$312K\nBunkers on board: VLSFO 180 MT | MDO 22 MT\nNoon position: 09°31'N / 013°42'W\nNext port: Conakry, Guinea | ETA: 04 Jun 2026\nInsurance: H&M Fjord Hull Club | P&I Harbour P&I Club`
  }
  if (q.includes('calypso')) {
    return `**MT Calypso — Status Update**\n\nCurrently on China Coast, en route Shanghai. Operating in Northstar Tankers Pool at $21,200/day — highest earner in the fleet.\n\nUtilisation: 92% | Open defects: 2 | Class renewal due 1 Aug 2026.\n\nP&L MTD: +$298K\nBunkers on board: VLSFO 310 MT | MDO 41 MT\nNoon position: 30°42'N / 122°24'E\nNext port: Shanghai, China | ETA: 08 Jun 2026\nInsurance: H&M Bergen Marine | P&I Harbour P&I Club`
  }
  if (q.includes('delphine')) {
    return `**MT Delphine — Status Update**\n\nCurrently on Indian Coast at slow speed (0.7 knots). Operating on captive cargo programme for Coastal Salt Co. salt exports.\n\nUtilisation: 82% | Open defects: 1 | Certificates current.\n\nP&L MTD: +$178K\nBunkers on board: VLSFO 95 MT | MDO 18 MT\nNoon position: 15°30'N / 073°48'E\nNext port: Mumbai, India | ETA: 03 Jun 2026\nInsurance: H&M Nordic Mutual | P&I Harbour P&I Club`
  }

  // Fleet overview
  if (q.includes('fleet') || q.includes('vessel') || q.includes('ship') || q.includes('utilisation') || q.includes('utilization')) {
    return `**Fleet Status — 9 Vessels**\n\n**MR Tankers (4):**\n- MT Aurora: East Med → Dortyol Turkey | $20,400/day | 88% util | ⚠ IOPP cert 38 days\n- MT Boreas: Conakry, Guinea | $19,500/day TC | 95% util | ✓ All clear\n- MT Calypso: China Coast → Shanghai | $21,200/day | 92% util | ✓ All clear\n- MT Delphine: Indian Coast | Captive | 82% util | ✓ All clear\n\n**Orion Barges (5):**\nAll operating at Port Kandla Salt Jetty, Gujarat. Captive cargo — Coastal Salt Co. salt exports to Japan, South Korea, China.\n\n**Overall:** 7/9 vessels on hire | Average utilisation 87%`
  }

  // Financials
  if (q.includes('revenue') || q.includes('ebitda') || q.includes('financial') || q.includes('profit') || q.includes('cash') || q.includes('p&l')) {
    return `**Group Financials — May 2026 MTD**\n\nRevenue: $15.9M (+4.2% MoM)\nEBITDA: $5.1M (32.1% margin)\nCash Position: $7.5M\nOverdue Receivables: $3.4M (Ship Building elevated)\n\n**By Vertical:**\n- Ship Owning: $8.2M | 25.6% margin\n- Ship Management: $4.5M | 40% margin ← strongest\n- River Barges: $1.8M | 50% margin\n- Ship Repairing: $1.4M | 21.4% margin ← below budget\n\nBreakeven threshold: $7,500/day per vessel. All 4 tankers above breakeven.`
  }

  // Legal
  if (q.includes('legal') || q.includes('exposure') || q.includes('arbitration') || q.includes('dispute') || q.includes('riverside') || q.includes('petrochemical') || q.includes('gulf petrochemical') || q.includes('trafigura') || q.includes('chief engineer')) {
    return `**Legal Matters — Total Exposure $7.71M**\n\n1. **Horizon Petrochemicals FZE — Charter Party Dispute** — $2.4M exposure | MSG Claimant | Arbitration Hearing 14 Jun 2026 | Ashford & Lane LLP ⚠ Counsel briefing unconfirmed\n\n2. **Riverside Drydocks — Newbuilding Dispute** — $4.1M exposure | MSG Claimant | Expert Determination 19 Aug 2026 | Hale & Whitford\n\n3. **Atlas Commodities Pte Ltd — P&I Cargo Claim** — $0.89M exposure | MSG Respondent | Pleadings 2 Jul 2026 | Carrow & Co (MT Boreas)\n\n4. **Chief Engineer — Crew Injury** — $0.32M exposure | MSG Respondent | Medical Assessment 15 Jun 2026 | Harbour P&I Club (MT Calypso)`
  }

  // Red flags
  if (q.includes('red flag') || q.includes('attention') || q.includes('urgent') || q.includes('critical') || q.includes('risk') || q.includes('issue')) {
    return `**Items Requiring Your Attention — 7 Open**\n\n🔴 **CRITICAL:**\n1. MT Aurora IOPP Certificate expires 38 days — renewal survey not booked\n2. MT Aurora pool transfer to Northstar — allocation date still pending\n3. Horizon Petrochemicals arbitration 14 Jun — Ashford & Lane briefing unconfirmed\n\n🟡 **WATCH:**\n4. MT Aurora bunker RFQ unconfirmed — 15 days to stem\n5. Orion 4 & 5 below 85% utilisation target\n6. Ship Building revenue $0.6M below budget — Eastern Shipyard delay\n7. Overdue receivables $3.4M — Ship Building elevated`
  }

  // Market
  if (q.includes('market') || q.includes('bdi') || q.includes('bcti') || q.includes('bdti') || q.includes('bunker') || q.includes('vlsfo') || q.includes('freight') || q.includes('rate')) {
    return `**Live Market Intelligence**\n\nBaltic Dirty Tanker Index (BDTI): 854 (+2.1%)\nBaltic Clean Tanker Index (BCTI): 712 (+1.8%) ← your benchmark\nBaltic Dry Index (BDI): 1,842 (+3.2%)\n\nVLSFO Fujairah: $612/MT (+2.8%)\nMGO Fujairah: $748/MT (+1.2%)\nNorthstar Pool TCE estimate: ~$21,200/day (+4.2%)\nUSD/INR: 83.4 (+0.3%)\n\n⚠ Red Sea: ELEVATED RISK — rerouting active, adding 12–15 days per voyage. Monitor freight rate impact on MT Boreas's Atlantic routing.`
  }

  // Coastal Salt / barges
  if (q.includes('coastal salt') || q.includes('barge') || q.includes('orion') || q.includes('kandla') || q.includes('salt') || q.includes('gujarat')) {
    return `**Orion Barges — Coastal Salt Co. Operations**\n\nAll 5 Orion barges operating at Port Kandla Salt Jetty, Gulf of Kutch, Gujarat (23°01'N, 70°13'E).\n\nCaptive cargo: Coastal Salt Industries salt exports\n- Current volume: 3–4.5 million MT annually\n- Export markets: Japan, South Korea, China\n- Growth: Expanding to 7M MT with new Hajipur facility (online next year)\n\nOrion 4 and Orion 5 currently below 85% utilisation target — review cargo schedule recommended.\n\nRevenue MTD: $1.8M | EBITDA: $0.9M | Margin: 50%`
  }

  // Certificates
  if (q.includes('cert') || q.includes('expir') || q.includes('iopp') || q.includes('mlc') || q.includes('class')) {
    return `**Certificate Expiry — Next 90 Days**\n\n🔴 MT Aurora IOPP Certificate — expires 20 Jun 2026 — **38 days** — renewal survey must be booked immediately\n🟡 Orion 5 Inland Waterways Certificate — expires 28 Jun 2026 — 46 days\n🟡 MT Boreas MLC Certificate — expires 10 Jul 2026 — 58 days\n🟡 MT Calypso Class Renewal — due 1 Aug 2026 — 80 days\n🟡 MT Aurora H&M Insurance renewal — due 1 Aug 2026 — 80 days`
  }

  // Pool earnings
  if (q.includes('pool') || q.includes('northstar') || q.includes('polaris') || q.includes('tce') || q.includes('earning')) {
    return `**Pool Earnings — May 2026**\n\nNorthstar Tankers Pool (MT Calypso): $1,765K net MTD | Avg TCE ~$21,200/day\nPolaris Pool (MT Aurora — outgoing): $553K net (Apr) | Avg TCE ~$20,330/day\n\nNote: MT Aurora transferring from Polaris to Northstar Tankers Pool — allocation date pending confirmation. MT Boreas on fixed TC at $19,500/day to Atlas Commodities — not in pool.\n\nPool statements received: Polaris via Excel on 10th & 25th | Northstar via PDF on 10th & 25th`
  }

  // Crew
  if (q.includes('crew') || q.includes('master') || q.includes('captain') || q.includes('sign')) {
    return `**Crew Summary — All Vessels**\n\nMT Aurora: Master (Egypt) | Sign-off Aug 2026 | 24 crew\nMT Boreas: Master (India) | Certs expiring — relief sourcing | 23 crew\nMT Calypso: Master (China) | Sign-off Oct 2026 | 24 crew\nMT Delphine: Master (India) | Sign-off Aug 2026 | 23 crew\nOrion 1–5: Barge Masters | 8 crew each\n\nTotal crew on board: 131`
  }

  // Insurance
  if (q.includes('insur') || q.includes('hull') || q.includes('p&i') || q.includes('loh')) {
    return `**Fleet Insurance Summary — All 4 Tankers**\n\nH&M (Hull & Machinery):\n- MT Aurora: Nordic Mutual | Insured value $28.5M | Renewal 1 Aug 2026\n- MT Boreas: Fjord Hull Club | Insured value $30.2M | Renewal 15 Jan 2027\n- MT Calypso: Bergen Marine | Insured value $27.8M | Renewal 20 Mar 2027\n- MT Delphine: Nordic Mutual | Insured value $32.1M | Renewal 20 Apr 2027\n\nP&I (Protection & Indemnity):\n- All 4 tankers: Harbour P&I Club | Fleet entry | Renewal 20 Feb 2027\n\nLoss of Hire (LOH): Confirmed covered on all 4 vessels\n\nTotal fleet insured value: $118.6M\n\n⚠ MT Aurora H&M renewal due in 80 days — action required.`
  }

  // Default — morning briefing style
  return `**Chairman's Briefing — ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}**\n\n**Needs Attention:**\n- MT Aurora IOPP cert expires 38 days — book renewal survey today\n- Pool transfer to Northstar Tankers allocation date still unconfirmed\n- Horizon Petrochemicals arbitration 14 Jun — Ashford & Lane briefing needed\n\n**On Track:**\n- Fleet utilisation 87% — above 80% target third consecutive month\n- MT Calypso earning $21,200/day — strongest in fleet\n- Ship Management margin 40% — best performing vertical\n\n**Market:**\n- BCTI +1.8% — clean tanker demand strengthening\n- Red Sea risk elevated — MT Boreas routing via Atlantic adding voyage days\n\nWhat would you like to explore further?`
}

// ─── API Call (tries real API, falls back to mock) ────────────────────────────

export async function callClaude(messages, maxTokens = 800) {
  // Try real API first if key is available
  if (API_KEY) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, messages }),
      })
      const data = await res.json()
      if (!data.error) return data.content?.[0]?.text || 'Unable to generate response.'
    } catch (err) {
      // Fall through to mock
    }
  }

  // Smart mock fallback
  const lastMessage = messages[messages.length - 1]?.content || ''
  return generateMockResponse(lastMessage)
}

export async function generateTalkingPoints(matter) {
  return callClaude([{ role:'user', content:`talking points for ${matter.type} vs ${matter.party} exposure $${(matter.exp/1e6).toFixed(2)}M next event ${matter.next}` }])
}

export async function generateVesselBriefing(vessel) {
  const commercialDesc = vessel.commercialMode === 'pool'
    ? `Operating in ${vessel.pool} at ~$${vessel.dayRate?.toLocaleString()}/day`
    : vessel.commercialMode === 'tc'
    ? `Time Charter to ${vessel.charterer} at $${vessel.dayRate?.toLocaleString()}/day`
    : 'Captive cargo operations — Coastal Salt Co.'

  const briefing = `**${vessel.name} — Vessel Briefing**

**Status:** ${vessel.status?.toUpperCase()} | ${vessel.pos}
**Route:** ${vessel.route}
**Next Port:** ${vessel.nextPort || '—'} | ETA: ${vessel.eta || '—'}
**Noon Position:** ${vessel.latDisplay || '—'} / ${vessel.lngDisplay || '—'}

**Commercial:** ${commercialDesc}
**Utilisation:** ${vessel.util}% (target ${vessel.target}%)
**P&L MTD:** ${vessel.pl >= 0 ? '+' : ''}$${(vessel.pl/1000).toFixed(0)}K

**Bunkers on Board:**
VLSFO: ${vessel.rob_vlsfo || '—'} MT | MDO: ${vessel.rob_mdo || '—'} MT

**Compliance:**
Certificates: ${vessel.certs === 'ok' ? '✓ Current' : '⚠ Attention Required'}
Open Defects: ${vessel.defects} item(s)

**Insurance:**
H&M: ${vessel.insurer_hm || '—'} | P&I: ${vessel.insurer_pi || '—'}
Insured Value: $${vessel.insured_value ? (vessel.insured_value/1e6).toFixed(1) + 'M' : '—'}
Loss of Hire: ${vessel.loh_covered ? '✓ Covered' : '—'}

**Note:** ${vessel.note || '—'}

**Question for your Fleet Manager:**
"What is the current status on ${vessel.name} and
is everything on track for the next port call?"`

  return briefing
}

export async function draftEmail(recipient, subject, context) {
  return callClaude([{ role:'user', content:`draft email to ${recipient?.name} about ${subject}: ${context}` }])
}

export async function chatWithAssistant(history, userMessage) {
  const messages = [...history.map(m => ({ role:m.role, content:m.content })), { role:'user', content:userMessage }]
  return callClaude(messages, 600)
}