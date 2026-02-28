/**
 * CRM Integration – PRD: Lead Capture Forms with CRM Integration (HubSpot / Zoho).
 * Set CRM_WEBHOOK_URL in env to POST leads to your CRM or automation (e.g. Zapier → HubSpot).
 * Optional: HUBSPOT_ACCESS_TOKEN / ZOHO_* for direct API integration.
 */

export type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  industry?: string;
  service?: string;
  message: string;
  source?: string;
};

export async function sendLeadToCrm(payload: LeadPayload): Promise<boolean> {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: payload.source ?? "website-contact",
        timestamp: new Date().toISOString(),
      }),
    });
    return res.ok;
  } catch (e) {
    console.error("[CRM] Webhook error:", e);
    return false;
  }
}
