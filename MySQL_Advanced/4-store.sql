-- Creates a trigger that decreases the quantity of an item
-- After adding a new order
CREATE TRIGGER decrease_quantity_after_insert AFTER INSERT ON orders
FOR EACH ROW UPDATE items
SET quantity = quantity - NEW.number
WHERE name = NEW.item_name;
