const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();
const RETENTION_SECONDS = 400 * 24 * 60 * 60;

function getCurrentMonth() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Port-au-Prince",
    year: "numeric",
    month: "2-digit"
  }).formatToParts(new Date());
  const year = parts.find((part) => part.type === "year").value;
  const month = parts.find((part) => part.type === "month").value;
  return `${year}-${month}`;
}

module.exports = async (req, res) => {
  const month = getCurrentMonth();
  const totalsKey = `fleutech:visits:${month}`;
  const visitorsKey = `fleutech:visitors:${month}`;

  try {
    if (req.method === "POST") {
      const visitorId = req.body && req.body.visitor_id;
      if (typeof visitorId !== "string" || !/^[a-zA-Z0-9-]{16,128}$/.test(visitorId)) {
        return res.status(400).json({ ok: false, error: "Identifiant visiteur invalide" });
      }

      const batch = redis.pipeline();
      batch.hincrby(totalsKey, "page_views", 1);
      batch.expire(totalsKey, RETENTION_SECONDS);
      await redis.sadd(visitorsKey, visitorId);
      await redis.expire(visitorsKey, RETENTION_SECONDS);
      await batch.exec();
      return res.status(200).json({ ok: true });
    }

    if (req.method === "GET") {
      const [totals, uniqueVisits] = await Promise.all([
        redis.hgetall(totalsKey),
        redis.scard(visitorsKey)
      ]);

      return res.status(200).json({
        month,
        page_views: Number(totals && totals.page_views) || 0,
        unique_visits: Number(uniqueVisits) || 0
      });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ ok: false, error: "Méthode non autorisée" });
  } catch (error) {
    console.error("Impossible de traiter le relevé des visites :", error);
    return res.status(500).json({ ok: false, error: "Impossible de traiter le relevé des visites" });
  }
};
