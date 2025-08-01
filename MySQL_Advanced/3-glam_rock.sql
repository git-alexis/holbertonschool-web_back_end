-- Lists all bands with Glam rock as their main style
-- Ranked by their longevity
SELECT band_name, IFNULL(split, 2024) - formed AS lifespan FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;
