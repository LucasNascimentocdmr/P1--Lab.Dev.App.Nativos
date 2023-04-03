
CREATE TABLE products (
  id uuid PRIMARY KEY,
  name varchar(255) NOT NULL,
  price decimal NOT NULL,
  category_id uuid NOT NULL,
  subcategory varchar(255) NOT NULL
);