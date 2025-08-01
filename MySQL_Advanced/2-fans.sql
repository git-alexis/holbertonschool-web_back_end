-- Create a table users with four columns (id, email, name, country)
-- Only if he doesn't exist
SELECT origin, SUM(fans) AS nb_fans FROM metal_bands
WHERE origin IS NOT NULL AND fans IS NOT NULL
GROUP BY origin
ORDER BY nb_fans DESC;
