-- Ranks country origins of bands
-- Ordered by the number of (non-unique) fans
SELECT origin, SUM(fans) AS nb_fans FROM metal_bands
WHERE origin IS NOT NULL AND fans IS NOT NULL
GROUP BY origin
ORDER BY nb_fans DESC;
